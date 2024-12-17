import { useState } from "react";
import QRCode from "react-qr-code";
import "./qrCode.css";

export function QRCodeGenerator()
{
    const [qrCode,setQrCode]=useState('');
    const [input,setInput]=useState('');

    function handleQRCodeGenerator()
    {
        setQrCode(input)
    }

    return(
        <div>
            <h1>QR Code Generator</h1>
            <div className="qrcode-inputfield">
                <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter Value" />
                <button disabled={input && input.trim() !== ''?false :true} onClick={handleQRCodeGenerator}>Generate</button>
            </div>
            <div className="qrcode">
                <QRCode
                  id="qr-code-value"
                  value={qrCode}
                  size={400}
                  bgColor="#fff"
                />
            </div>
        </div>
    )
}