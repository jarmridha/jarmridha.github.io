import { useEffect, useRef, type ReactNode } from "react";
export default function AccessibleModal({children,onClose,label}:{children:ReactNode;onClose:()=>void;label:string}) {
 const ref=useRef<HTMLDialogElement>(null);
 const closeRef=useRef(onClose); closeRef.current=onClose;
 useEffect(()=>{const dialog=ref.current!;const trigger=document.activeElement as HTMLElement|null;dialog.showModal();const previous=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{dialog.close();document.body.style.overflow=previous;trigger?.focus();};},[]);
 return <dialog ref={ref} aria-label={label} onCancel={(e)=>{e.preventDefault();closeRef.current();}} className="portfolio-modal" onClick={e=>{if(e.target===e.currentTarget)closeRef.current();}}>{children}</dialog>;
}
