"use client";
import { useState } from "react";
export default function Home(){const [q,setQ]=useState(""); const [a,setA]=useState("");
return <div><h1>Enterprise AI Assistant</h1><textarea value={q} onChange={e=>setQ(e.target.value)}/><button onClick={async()=>{const r=await fetch('/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:q})});const d=await r.json();setA(d.answer)}}>Ask AI</button><pre>{a}</pre></div>}
