
export function Modal({id,header,body,footer,onClose})
{
    return(
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                   <span className="close-modal-icon" onClick={onClose}>X</span>
                   <h3>{header ? header : "Header"}</h3>
                </div>
                <div className="body">
                <h3>{body ? body :<div><p>This is our Modal body</p></div> }</h3>
                </div>
                <div className="footer">
                <h3>{footer ? footer : "Footer"}</h3>
                </div>
            </div>
        </div>
    )
}