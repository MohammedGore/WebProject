import React from "react";
import Map from '../assets/images/Map.png'
import Direction from '../assets/images/Directions.png'
import { Slide } from "react-awesome-reveal";
import Logo from '../assets/images/Logo.png'
import Calendar from '../assets/images/Calendar.png'

const About = () =>{
    return(
    <section>

<nav className="w-full flex justify-center p-4">
            <div className="flex justify-between w-[90%] items-center">
                <img src={Logo} alt='' />

                <ul className="gap-12 hidden lg:flex text-black">
                    <li>Rooms</li>
                    <li>Facilities</li>
                    <li>Gallery</li>
                    <li className="font-bold">About Us</li>
                </ul>

                <button className="flex gap-4 py-2 px-6 text-white">
                        <img src={Calendar} alt='' />
                        Reservations
                    </button>
                </div>
                    </nav>

    <div className="flex flex-col md:flex-row space-y-20 p-10 pb-20 mt-5 gap-5">
          <div className="w-full md:w-1/2 h-[60vh] relative">
            <img src={Map} alt="" className="h-[70vh] w-full" />
            <img src={Direction} alt="" className="absolute bottom-50 right-20 bg-white h-10" />
            </div>

            <div className="w-full md:w-1/2  h-[50vh] flex flex-col 
            justify-center">
                 <Slide direction="right">
                 <div className="py-20 space-y-4 text-left">
            <h2 className="font-bold text-2xl">Be in the know.</h2>
            <p>Get the latest info on the best deals, offers and promotions.</p>
            <input className="w-[80%] py-2 px-4 bg-neutral-200" type="text" placeholder="*First Name" /> <br/>
            <input className="w-[80%] py-2 px-4  bg-neutral-200" type="email" placeholder="*Email Address"/><br/>
            <button className="text-white bg-orange-500 py-3 px-6">Get Email Updates</button>
        </div>
                 </Slide>
            </div>
            
          </div>  
    </section>
    )
}
export default About;