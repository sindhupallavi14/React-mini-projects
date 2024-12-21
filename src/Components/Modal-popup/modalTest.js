import { useState } from "react";
import { Modal } from "./modal";
import "./modal.css"

export function ModalTest()
{
    const [showModalPopup,setShowModalPopup]=useState(false);

    function handleTogglePopUp()
    {
        setShowModalPopup(!showModalPopup);
    }
    function handleonClose()
    {
        setShowModalPopup(false)
    }

    return(
       <div className="modal-con">
         <button onClick={handleTogglePopUp}>Click to open Modal PopUp</button>
            {
                showModalPopup && <Modal  id={"custom-id"} header={<p>Customize Header</p>} footer={<p>Customize Footer</p>} body={<p>Customize Body</p>} onClose={handleonClose}/>
            }
       </div>
    )
}