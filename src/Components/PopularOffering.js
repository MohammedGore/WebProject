import React from "react";
import SinglePopularOffering from "./SinglePopularOffering";
import Gardern from '../assets/images/Garden Premier.png'
import Family from '../assets/images/Family Suite.png'
import Govenor from '../assets/images/Governors Suite.png'
import { Bounce } from "react-awesome-reveal";

const PopularOffering =() =>{
    return(
        <section className="w-full flex justify-center items-center pb-40 ">
         <div className="w-[90%] space-y-8">
          <h2 className="font-bold text-center text-2xl">Popular Offerings</h2>
         <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Bounce cascade>
         <SinglePopularOffering 
         img={Gardern}
         title={"Garden Premier"}
         description={"Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"}
         price={"From ₦ 40,000/night"}

         />
         <SinglePopularOffering 
         img={Family} 
         title={"Family Suite"}
         description={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
         price={"From ₦ 50,000/night"}/>
         
         <SinglePopularOffering
          img={Govenor}
          title={"Governor’s Suite"}
          description={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         price={"From ₦ 170,000/night"}/>
        
         </Bounce>
         </div>
         
         </div>
        </section>
    )
}
export default PopularOffering;