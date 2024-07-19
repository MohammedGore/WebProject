import React from "react";
import Image1 from '../assets/images/Rooms&Suites.png'
import { Slide } from "react-awesome-reveal";

const RoomsAndSuites = () =>{
    return <section className="flex flex-col md:flex-row py-20 h-full overflow-hidden p-10 gap-5">
          
           <div className="w-full md:w-1/2  h-[60vh] flex flex-col 
            justify-center">
                 <Slide direction="left">
                    <h2 className="font-bold text-2xl">Rooms & Suites</h2>
                <p className="text-[12px] ">A holistic approach to luxury living, the Kigoma offers 297
                     curated rooms & suites<br/> that ensure that guests would never want, or need, to leave. Guests
                      are invited to <br/>customize their luxury stay with a selection of the most exquisite room 
                      offerings<br/> available, including seven distinct suite categories featuring private and open 
                      floor<br/> layouts as well as outdoor terraces and city and garden-view balcony options.
                 </p>
                 <div className="space-x-5 font-semibold mb-10 md:mb-0 mt-5 lg:mt-0">
                    <button className="bg-white text-black border-black  border-2 p-2">View Rooms & Suites</button>
                    <button className="bg-orange-500 text-white py-3 px-5">Book Now</button>
                 </div>
                 </Slide>
            </div>
          
            <Slide direction="right" className="w-full md:w-1/2 h-[60vh] overflow-hidden">
            <img src={Image1} alt="" className="h-full w-full" />
            </Slide>
            
            
    </section>
}
export default RoomsAndSuites;