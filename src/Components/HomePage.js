import React from "react";
import Logo from '../assets/images/Logo.png'
import Calendar from '../assets/images/Calendar.png'
import Slider from '../assets/images/Sliders.png'
import DOwnArrow from '../assets/images/Down Arrow.png'
import Background from '../assets/images/Background.png'
import Black from '../assets/images/Black Overlay.png'



const HomePage = () =>{
    return(
        <div className="relative bg-cover bg-blend-multiply bg-[#000000BF]" style={{backgroundImage: `url(${Background})`}}>
        <nav className="w-full flex justify-center p-4">
            <div className="flex justify-between w-[90%] items-center">
                <img src={Logo} alt='' />

                <ul className="gap-12 hidden lg:flex font-semibold text-white">
                    <li>Rooms</li>
                    <li>Facilities</li>
                    <li>Gallery</li>
                    <li>About Us</li>
                </ul>

                
                    <button className="flex gap-4 bg-orange-500 py-2 px-6 text-white">
                        <img src={Calendar} alt='' />
                        Reservations
                    </button>
                
            </div>
        </nav>
        <p className="uppercase text-white bg-stone-700 md:w-[18%] w-[23%] font-semibold mt-20 mb-20">Covid-19 information</p>
        <img className="absolute left-10 w-2 h-10"  src={Slider} alt=""/>
        <div className="justify-center items-center text-center text-white">
            <h2 className="text-sm font-semibold">Welcome to <br/><br/> <span className="uppercase text-3xl font-bold border-b-2">Kigoma</span></h2>
            <p className="text-sm mt-5 mb-5">ENJOY YOUR STAY</p>
            <img className="mx-auto w-5 mt-10 pb-10 cursor-pointer animate-bounce" src={DOwnArrow} alt=""/>
        </div>
        </div>
    )
}
export default HomePage;