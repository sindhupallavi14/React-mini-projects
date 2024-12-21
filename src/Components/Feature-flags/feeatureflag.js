import { useContext } from "react";
import Accordian from "../Accordian/accordian";
import { QRCodeGenerator } from "../QR Code Generator/qrCode";
import { StarRating } from "../StarRating/starRating";
import { Tabs } from "../Tabs/Tabs";
import { TicTacToe } from "../Tic Tac Toe/tictactoe";
import { Theme } from "../Toggle Theme/theme";
import { Featureflagcontext } from "./context/featureContext";


export default function Featureflag(){
    const {loading,enableComponents} = useContext(Featureflagcontext)
    // console.log(enablecomponenets);
    if(loading){
        return(<h1>loading......!</h1>)
    }
    function Checkenablecomponents(name) {
        return enableComponents && enableComponents[name];
    }
    
    
    const ComponentsToRender = [
        {
            key:"showAccrodian",
            component:<Accordian/>
        },
        {
            key:"showQrcode",
            component:<QRCodeGenerator/>
        },
        {
            key:"showLightdarkmode",
            component:<Theme/>
        },
        {
            key:"showStarrating",
            component:<StarRating/>
        },
        {
            key:"Showtictactoe",
            component:<TicTacToe/>
        }
    ]
    return(
        <>
        
         {ComponentsToRender.map((item,idx)=>(
            Checkenablecomponents(item.key)?item.component:null
        ))}
        </>
    )
}