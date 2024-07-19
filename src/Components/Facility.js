import React from "react";
import SingleFacility from "./SingleFacility";
import Meeting from '../assets/images/Meeting Room.png'
import Restuarant from '../assets/images/Restaurant.png'
import Swimming from '../assets/images/Swimming Pool.png'
import Conference from '../assets/images/Conference.png'
import Movie from '../assets/images/Movie theater.png'
import Lounge from '../assets/images/Lounge.png'
import { Bounce } from "react-awesome-reveal";

const Facility =() =>{
    return(
        <section className="w-full flex justify-center items-center pb-40 mt-10 ">
         <div className="w-[90%] space-y-8">
          <h2 className="font-bold text-center text-2xl">Facilities</h2>
         <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Bounce cascade>
         <SingleFacility 
         img={Meeting}
         title={"Meeting Room"}
         description={"A 20-seater meeting room is on ground at the Kigamo for your business meetings and client negotiations."}

         />
         <SingleFacility 
         img={Restuarant} 
         title={"Restaurant"}
         description={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
         />
         
         <SingleFacility
          img={Swimming}
          title={"Swimming Pool"}
          description={"Classy master of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         />

         <SingleFacility
          img={Conference}
          title={"Conference Hall"}
          description={"Two 150-seater conference halls equipped with smart monitors for presentations for conferences and meet-ups."}
         />

         <SingleFacility
          img={Movie}
          title={"Movie Theater"}
          description={"Three 50-seater movie rooms with standard screens are available to visitors at Kigamo."}
         />

          <SingleFacility
          img={Lounge}
          title={"Lounge"}
          description={"Open lounge with a view of the game reserve and a bar for refreshments. The lounge also features a live band."}
         />
        
         </Bounce>
         </div>
         
         </div>
        </section>
    )
}
export default Facility;