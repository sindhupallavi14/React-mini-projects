import { useReducer, useRef, useState } from "react";
import { useOnClickOutside } from "./useOnclickOutside";

export function UseOnClickOutsideTest() {
    const [showContent,setShowContent]=useState(false);
    const ref=useRef();
    useOnClickOutside(ref,()=>setShowContent(false));
  return (
    <div style={{ display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center",}}>
        {showContent?<div ref={ref}>
            <h3>This is the Content</h3>
            <p>Click outside to make the content hiddden</p>
        </div>
        :<button onClick={()=>setShowContent(true)} style={{cursor: "pointer", margin:30,background: "beige", width: 200, height: 30,borderRadius: 5,}}> Click to see the Content</button>}
    </div>
  );
}
