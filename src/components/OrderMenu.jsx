import React from 'react'
import CafeCard from './sub/CafeCard';
import FoodCard from './sub/FoodCard';

const OrderMenu = ({ cafe }) => {
  console.log("The cafe:",cafe)
    if (cafe === 'Maggi Hotspot') {
      return (
        <div className='font-Poppins p-12'>
        <CafeCard name={"Maggi Hotspot Order Menu"} color={"text-primary-red"} gradient={"from-red-200 to-red-300"}>  
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
        </CafeCard>
      </div>
      )
    }
    else if (cafe === "Southern Stories") {
      return (
      <div className='font-Poppins p-12'>
      <CafeCard name={"Southern Stories Order Menu"} color={"text-primary-beige"} gradient={"from-orange-100 to-orange-50"}>  
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      </CafeCard>
      </div>)
    }

    else if (cafe === "Kathi & COP") {
      return (
      <div className='font-Poppins p-12'>
      <CafeCard name={"Kathi & COP Order Menu"} color={"text-primary-orange"} gradient={"from-orange-300 to-orange-200"}>  
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Chole Bhature"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      </CafeCard>
      </div>)
    }

    else if (cafe === "Quench") {
      return(
      <div className='font-Poppins p-12'>  
      <CafeCard name={"Quench Order Menu"} color={"text-primary-green"} gradient={"from-green-300 to-green-200"}>  
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      </CafeCard>
      </div>
      )
    }
    
}

export default OrderMenu
