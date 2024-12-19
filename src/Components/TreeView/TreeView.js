import { MenuList } from "./menulist";
import "./TreeView.css"

export function TreeView({menus=[]})
{
    return(
        <div className="tree-view-container" >
            <MenuList list={menus}/>
        </div>
    )
}