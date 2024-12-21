// import logo from './logo.svg';
import './App.css';
import {menus} from "./Components/TreeView/data"
import Accordian from './Components/Accordian/accordian';
import { LoadMoreButton } from './Components/LoadMore/loadmorebtn';

import { QRCodeGenerator } from './Components/QR Code Generator/qrCode';
import { RandomColor } from './Components/RandomColor/randomcolor';
import { StarRating } from './Components/StarRating/starRating';
import { TabTest } from './Components/Tabs/TabTest';
import { TicTacToe } from './Components/Tic Tac Toe/tictactoe';
import { TreeView } from './Components/TreeView/TreeView';
import { Theme } from './Components/Toggle Theme/theme';
import { GithubProfileFinder } from './Components/Github-profile-Finder/github-finder';
import { SearchAutofill } from './Components/Search-autofill-with-api/search';
import { ScrollIndicator } from './Components/custom scroll indicator/scroll indicator';
import { ScrollTopBottom } from './Components/Scroll to Top & Bottom/scroll';
import Scrollparticulardiv from './Components/Scroll-particular-section/scroll';
import CustomUseFetch from './Components/useFetch-Custom-Hook/test';
import { UseOnClickOutsideTest } from './Components/use-onClickOutside/test';
import { ResponsiveWindow } from './Components/Responsive window/test';
import { ImageSlider } from './Components/ImageSlider/imageSlider';
import Featureflag from './Components/Feature-flags/feeatureflag';
import Customfeatureflag from './Components/Feature-flags/context/featureContext';
import { ModalTest } from './Components/Modal-popup/modalTest';

function App() {
  return (
    <div>
      {/* Accordian */}
        {/* <Accordian/> */}

      {/* Random Color */}
        {/* <RandomColor/> */}

      {/* Star Rating */}
        {/* <StarRating/> */}

      {/* QRCode Generator */}
        {/* <QRCodeGenerator/> */}

      {/* Load more button */}
          {/* <LoadMoreButton/> */}

        {/* <TabTest/> */}

        {/* <TicTacToe/> */}

        {/* <TreeView menus={menus}/> */}

        {/* <Theme/> */}
        
        {/* <GithubProfileFinder/> */}

        {/* <SearchAutofill/> */}

        {/* <ScrollTopBottom/> */}

        {/* <Scrollparticulardiv/> */}
         
        {/* <CustomUseFetch/> */}

        {/* <UseOnClickOutsideTest/> */}

        {/* <ResponsiveWindow/> */}

        {/* <ImageSlider/> */}

        {/* 
        <Customfeatureflag>
        <Featureflag/>
        </Customfeatureflag> */}

        <ModalTest/>


         
      

      

    </div>
  );
}

export default App;
