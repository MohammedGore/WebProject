import React from "react";
import SingleFacility2 from "./SingleFacility2";
import Restuarant3 from '../assets/images/Restaurant3.png'
import Swimming3 from '../assets/images/Swimming Pool3.png'
import Movie3 from '../assets/images/Movie Theater3.png'
import Game from '../assets/images/Games Room.png'
import { Bounce } from "react-awesome-reveal";
import Logo from '../assets/images/Logo.png'
import Calendar from '../assets/images/Calendar.png'

const Facility2 =() =>{
    return(
        <section>
        
        <nav className="w-full flex justify-center p-4">
            <div className="flex justify-between w-[90%] items-center">
                <img src={Logo} alt='' />

                <ul className="gap-12 hidden lg:flex text-black">
                    <li>Rooms</li>
                    <li className="font-bold">Facilities</li>
                    <li>Gallery</li>
                    <li>About Us</li>
                </ul>

                <button className="flex gap-4 py-2 px-6 text-white">
                        <img src={Calendar} alt='' />
                        Reservations
                    </button>
                </div>
                    </nav>

        <div className="w-full flex justify-center items-center pb-40 space-y-20 ">
         <div className="w-[90%] space-y-8">
         <div className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Bounce cascade>
         <SingleFacility2 
         img={Restuarant3}
         title={"Restaurant"}
         description={"Enjoy delicious meals  and experience upscale fine dining at our 2-star Michelin restaurant and bar where we servie a variety of mouthwatering local and intercontinental dishes."}
         price={"From ₦ 40,000/night"}

         />
         <SingleFacility2 
         img={Swimming3} 
         title={"Swimming Pool"}
         description={"Have a relaxing time in any of our pools. Smash your body goals swimming while enjoying a breathtaking view of the park."}
         />
         
         <SingleFacility2
          img={Movie3}
          title={"Movie Theater"}
          description={"Our movie auditoriums come with standard screens with rows of comfortable padded seats, as well as a foyer area containing a box office for buying tickets."}
         />

<SingleFacility2
          img={Game}
          title={"Games Room"}
          description={"Our very own recreation room outfitted with game consoles, board and table games as well as a children’s KG and playpen so the little ones don’t feel left out."}
         />
        
         </Bounce>
         </div>
         
         </div>
         </div>
        </section>
    )
}
export default Facility2;