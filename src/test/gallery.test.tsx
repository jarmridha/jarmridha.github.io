import { afterEach, beforeAll, afterAll, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import ProjectsSectionLite from "../components/ProjectsSectionLite";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

afterEach(() => { cleanup(); vi.useRealTimers(); });
beforeAll(() => vi.stubGlobal("IntersectionObserver", class {
  observe() {}
  unobserve() {}
  disconnect() {}
}));
afterAll(() => vi.unstubAllGlobals());
describe("project gallery", () => {
  it("advances automatically, pauses, and resumes", () => {
    vi.useFakeTimers();
    render(<ProjectsSectionLite />);
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByAltText("HSIA Terminal 03 — project photograph 2 of 9")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", {name: "Pause HSIA Terminal 03 slideshow"}));
    act(() => vi.advanceTimersByTime(6000));
    expect(screen.getByAltText("HSIA Terminal 03 — project photograph 2 of 9")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", {name: "Play HSIA Terminal 03 slideshow"}));
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByAltText("HSIA Terminal 03 — project photograph 3 of 9")).toBeTruthy();
  });
  it("has a real local image for every selectable photo", () => {
    render(<ProjectsSectionLite />);
    for (const button of screen.getAllByRole("button")) {
      fireEvent.click(button);
      for (const image of screen.getAllByRole("img")) {
        const src = image.getAttribute("src")!;
        expect(existsSync(resolve("public", src.slice(1)))).toBe(true);
      }
    }
  });
  it("opens the previously omitted WebP photo and recovers after an image error", () => {
    render(<ProjectsSectionLite />);
    fireEvent.click(screen.getByRole("button", { name: "Show Dhaka MRT Project photo 5" }));
    const image = screen.getByAltText("Dhaka MRT Project — project photograph 5 of 8");
    expect(image.getAttribute("src")).toBe("/mrt/mrt-thumb-4.webp");
    fireEvent.error(image);
    expect(screen.getByText("Project photo unavailable.")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Show Dhaka MRT Project photo 1" }));
    expect(screen.getByAltText("Dhaka MRT Project — project photograph 1 of 8")).toBeTruthy();
  });
});
