import { MenuItem } from "./menuitem";

export function MenuList({list=[]})
{
    return(
        <ul className="menu-list-container">
            {list && list.length
            ? list.map((listitem)=> <MenuItem item={listitem}/>):null}
        </ul>
    )
}