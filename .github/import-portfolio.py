from pathlib import Path
import hashlib
import shutil
import subprocess
import zipfile

archive = Path("portfolio-source.zip")
assert hashlib.sha256(archive.read_bytes()).hexdigest() == "12eb755ebbf935e925fe011c91b229f21dc49968726b74d99298b9ffbdba4090"

root = Path.cwd().resolve()
paths = []

with zipfile.ZipFile(archive) as z:
    for entry in z.infolist():
        p = Path(entry.filename)
        if entry.is_dir() or p.parts[0] in (".git", ".github"):
            continue
        dest = (root / p).resolve()
        if not dest.is_relative_to(root):
            raise ValueError("Invalid archive path")
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(z.read(entry))
        paths.append(entry.filename)

# Remove duplicate certificate copy from the deployed artifact.
duplicate_certificate = Path("public/certificates/Health & Safety Induction Certificate.pdf")
if duplicate_certificate.exists():
    duplicate_certificate.unlink()
    duplicate_path = str(duplicate_certificate)
    paths = [p for p in paths if p != duplicate_path]

# Apply verified component corrections maintained outside the archived source.
overrides = Path(".github/portfolio-overrides")
for source in overrides.glob("*.tsx"):
    destination = Path("src/components") / source.name
    shutil.copy2(source, destination)
    if str(destination) not in paths:
        paths.append(str(destination))

# Apply professional metadata.
index_override = overrides / "index.html"
if index_override.exists():
    shutil.copy2(index_override, Path("index.html"))
    if "index.html" not in paths:
        paths.append("index.html")

# Build a 1200x630 JPG social preview from the verified SVG artwork.
og_override = overrides / "og-image.svg"
if og_override.exists():
    public_dir = Path("public")
    public_dir.mkdir(exist_ok=True)
    svg_output = public_dir / "og-image.svg"
    jpg_output = public_dir / "og-image.jpg"
    shutil.copy2(og_override, svg_output)

    converter = shutil.which("magick") or shutil.which("convert")
    if converter:
        subprocess.run(
            [converter, str(svg_output), "-background", "#0f172a", "-alpha", "remove", "-alpha", "off", "-resize", "1200x630!", "-quality", "92", str(jpg_output)],
            check=True,
        )
    else:
        # Conservative fallback keeps a valid JPG social image available.
        shutil.copy2(Path("src/assets/profile-placeholder.jpg"), jpg_output)

    for output in (svg_output, jpg_output):
        if str(output) not in paths:
            paths.append(str(output))

# Keep current CV filename/link compatible with the deployed build.
hero = Path("src/components/HeroSection.tsx")
text = hero.read_text()
text = text.replace("/Jahangir%20Alam_Cv.pdf", "/J.%20A.%20Rakib%20Mridha_Cv.pdf").replace('download="Jahangir Alam_Cv.pdf"', 'download="J. A. Rakib Mridha_Cv.pdf"')
hero.write_text(text)

Path("/tmp/portfolio-paths").write_bytes(b"\0".join(p.encode() for p in paths) + b"\0")
