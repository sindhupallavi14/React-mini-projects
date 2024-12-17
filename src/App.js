// import logo from './logo.svg';
import './App.css';
import Accordian from './Components/Accordian/accordian';

import { QRCodeGenerator } from './Components/QR Code Generator/qrCode';
import { RandomColor } from './Components/RandomColor/randomcolor';
import { StarRating } from './Components/StarRating/starRating';

function App() {
  return (
    <div className="App">
      {/* Accordian */}
        {/* <Accordian/> */}
      {/* Random Color */}
        {/* <RandomColor/> */}
      {/* Star Rating */}
        {/* <StarRating/> */}
      {/* QRCode Generator */}
        <QRCodeGenerator/>
      

    </div>
  );
}

export default App;
