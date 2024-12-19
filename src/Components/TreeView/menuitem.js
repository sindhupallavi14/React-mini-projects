import { useState } from "react";
import { MenuList } from "./menulist";
import {FaMinus,FaPlus} from "react-icons/fa" 

export function MenuItem({item})
{
    const [displayChildren,setDisplayChildren]=useState({});

    function handleToggleChildren(getCrntlabel)
    {
         setDisplayChildren({
            ...displayChildren,
            [getCrntlabel]:!displayChildren[getCrntlabel]
         })
    }

    console.log(displayChildren);
    

    return(
        <li >
            <div className="menu-item">
                <p>{item.label}</p>
                {item && item.children && item.children.length ?
                <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayChildren[item.label]?<FaMinus size={15} color="white"/>:<FaPlus size={15} color="black"/>
                    }
                </span>:null}
            </div>
            {item && item.children && item.children.length >0 && displayChildren[item.label] ? 
             <MenuList list={item.children}/>
              :null
            }
        </li>
    )
}