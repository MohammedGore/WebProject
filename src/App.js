
import './App.css';
import Contact from './Components/Contact';
import Facility from './Components/Facility';
import HomePage from './Components/HomePage';
import PopularOffering from './Components/PopularOffering';
import RoomsAndSuites from './Components/Rooms&Suites';
import Message from './Message';
import Footer from './Components/Footer';
import Rooms from './Components/Rooms&Rate';
import About from './Components/About';

import MyCarousel from './Components/MyCarousel';
import Facility2 from './Components/Facility2';

function App() {
  return (
    <div>
     <HomePage />
     <RoomsAndSuites />
     <PopularOffering />
     <MyCarousel />
     <Facility />
     <Message />
     <Contact />
     <Footer />
     <Rooms/>
     <Footer />
     <Facility2 />
     <Footer />
     <About />
     <Footer />

    </div>
  );
}

export default App;
