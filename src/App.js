
import './App.css';
import PreNavbar from './Componets/PreNavbar';
import Navbar from './Componets/Navbar';
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Slider from './Componets/Slider';
import Offers from './Componets/Offers';
import Data from "./Data/Data.json"
import Heading from './Componets/Heading';
import StarProduct from './Componets/StarProduct';
import HotAccessoriesMenu from './Componets/HotAccessoriesMenu';
import HotAccessories from './Componets/HotAccessories';
import ProductReviews from './Componets/ProductReviews';
import Videos from './Componets/Videos';
import Banner from './Componets/Banner';
import Footer from './Componets/Footer';
import NavOption from './Componets/NavOption';



function App() {

  return (
  <>
  <div>
    <Router>
    
        
      <PreNavbar/>
      <Navbar/>
       <NavOption miPhones={Data.miPhones} redmiPhones={Data.redmiPhones} tv={Data.tv} laptop={Data.laptop}
       fitnessAndLifeStyle={Data.fitnessAndLifeStyle} home={Data.home} audio={Data.audio} accessories={Data.accessories}/>
      <Slider/>
      <Offers offer={Data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starproduct={Data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
        <Routes>
       
     <Route exact path ='/' element={
      <HotAccessories music={Data.hotAccessories.music} musicCover={Data.hotAccessoriesCover.music}/>
     }/>
     <Route exact path ='/smartDevice' element={
      <HotAccessories smartDevice={Data.hotAccessories.smartDevice} smartDeviceCover={Data.hotAccessoriesCover.smartDevice}/>
     }/>
     <Route exact path ='/home' element={
      <HotAccessories home={Data.hotAccessories.home} homeCover={Data.hotAccessoriesCover.home}/>
     }/>
       <Route exact path ='/lifestyle' element={
      <HotAccessories lifestyle={Data.hotAccessories.lifeStyle} lifestyleCover={Data.hotAccessoriesCover.lifeStyle}/>
     }/>
       <Route exact path ='/mobileAccessories' element={
      <HotAccessories mobileAccessories={Data.hotAccessories.mobileAccessories} mobileAccessoriesCover={Data.hotAccessoriesCover.mobileAccessories}/>
     }/>
       
      
    </Routes> 
     
    </Router>
    <Heading text="PRODUCT REVIEWS"/>
    <ProductReviews productReviews={Data.productReviews}/>
    <Heading text="VIDEO"/>
    <Videos videos={Data.videos}/>
    <Heading text="IN THE PRESS"/>
    <Banner banner={Data.banner}/>
    <Footer/>
  </div>
 
  </>
  );
}

export default App;
