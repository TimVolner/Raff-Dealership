import React, { useState, useRef, useEffect } from 'react';
import Truck1 from './ford.jpg';
import Truck2 from './Toyota_truck.jpg';
import Truck3 from './dodge.jpg';
import Truck4 from './dodge2.jpg';
import Truck5 from './ram.jpg';
import Jeep1 from './jeepc.jpg';
import Jeep2 from './jeepr.jpg';
import Jeep3 from './jeepw.jpg';
import Jeep4 from './jeepl.jpg';
import Jeep5 from './jeeps.jpg';
import Car1 from './cart.jpg';
import Car2 from './carc.jpg';
import Car3 from './carr.jpg';
import Car4 from './carff.jpg';
import Car5 from './fordff.jpg';
import Suv1 from './suvv.jpg';
import Suv2 from './suvh.jpg';
import Suv3 from './suvf.jpg';
import Suv4 from './suvo.jpg';
import Suv5 from './suva.jpg';
import Van1 from './vans.jpg';
import Van2 from './vanss.jpg';
import Van3 from './vanf.jpg';
import Van4 from './vanb.jpg';
import Van5 from './vanc.jpg';
import SC1 from './scf.jpg';
import SC2 from './scff.jpg';
import SC3 from './sct.jpg';
import SC4 from './scp.jpg';
import SC5 from './scc.jpg';
import FordI from './fordI.jpg';
import FordI2 from './fordI2.jpg';
import FordI3 from './fordI3.jpg';
import TacomaI from './ti.jpg';
import TacomaI2 from './ti2.jpg';
import TacomaI3 from './ti3.jpg';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: TacomaI,
    thumbnail: TacomaI,
  },

  {
    original: TacomaI2,
    thumbnail: TacomaI2,
  },

   {
    original: TacomaI3,
    thumbnail: TacomaI3,
  },

 ];





function Car() {
 const  [truckDropDown, setTruckDropDown] = useState(false)
  const [jeepDropDown, setJeepDropDown] = useState(false)
  const [carDropDown, setCarDropDown] = useState(false)
  const [suvDropDown, setSuvDropDown] = useState(false)
  const [vanDropDown, setVanDropDown] = useState(false)
  const [scarDropDown, setScarDropDown] = useState(false)
  const  [showPopUp, setShowPopUp] = useState(false)
  const  [selectedPopUp, setSelectedPopUp] = useState("")

 function handleShowPopUp(e) {
 e.preventDefault()
 console.log(e)
 setSelectedPopUp(e.target.id)
 setShowPopUp(true)
 }
const ref = useRef(null);

useEffect(() => {

       function handleClickOutside(event) {
           if (ref.current && !ref.current.contains(event.target)) {
               setSelectedPopUp("")
               setShowPopUp(false);
           }
       }

       // Bind the event listener
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
           // Unbind the event listener on clean up
           document.removeEventListener("mousedown", handleClickOutside);
       };
   },
   [ref]);
 const popUp = (
 <div className="pop-up-wrapper">
    <div className="pop-up-body" ref={ref}>


       {chooseImage()}

    </div>
</div>
)



function chooseImage () {
    if (selectedPopUp === "toyota_truck") {
        return(<div className="img-gallery">
       <ImageGallery items={images} /></div>)
    } else if (selectedPopUp === "ford") {
        return(<div><img src ={FordI}className="fordI" /> <img src ={FordI2}className="fordI2" /> <img src ={FordI3}className="fordI3" ></img></div>)
    } else if (selectedPopUp === "dodge") {
        return(<img src={"dodge"}></img>)
}
}


  const truckMenu = () => {
  return (<div><h1>Truck list - Ford F-150 Raptor</h1><img onClick={(e)=>handleShowPopUp(e)} id="ford" src ={Truck1}className="ford"/>

  <h1>Truck list - Toyota Tacoma</h1><img onClick={(e)=>handleShowPopUp(e)} id="toyota_truck" src ={Truck2}className="toyota_truck"/>
  <h1>Truck list -  Dodge Cummins 2500/3500</h1><img onClick={(e)=>handleShowPopUp(e)} id="dodge" src ={Truck3}className="dodge"/>
  <h1>Truck list -  1st Gen Dodge Cummins</h1><img src ={Truck4}className="dodge2"/>
  <h1>Truck list -  Ram 1500 EcoDiesel</h1><img src ={Truck5}className="ram"/></div>)

}
const jeepMenu = () => {
  return (<div><h1>Jeep list - Jeep Compass 2018</h1><img src ={Jeep1}className="jeepc"/>
  <h1>Jeep list - V8-Powered Jeep Wrangler Rubicon 392</h1><img src ={Jeep2}className="jeepr"/>
  <h1>Jeep list - 2020 Jeep Wrangler Rubicon Unlimited EcoDiesel</h1><img src ={Jeep3}className="jeepw"/>
  <h1>Jeep list - 2011 Jeep Liberty</h1><img src ={Jeep4}className="jeepl"/>
  <h1>Jeep list - 2019 Jeep Wrangler Unlimited Sahara</h1><img src ={Jeep5}className="jeeps"/></div>)
}

const carMenu = () => {
  return (<div><h1>Sedan list - 2020 Toyota Camry Hybrid</h1><img src ={Car1}className="cart"/>
  <h1>Sedan list - 1997 Toyota Corolla</h1><img src ={Car2}className="carc"/>
  <h1>Sedan list - 2020 Toyota Camry TRD</h1><img src ={Car3}className="carr"/>
  <h1>Sedan list - 2017 Ford Fusion Hybrid</h1><img src ={Car4}className="carff"/>
  <h1>Sedan list - 2012 Ford Focus SE</h1><img src ={Car5}className="fordff"/></div>)
}

const suvMenu = () => {
  return (<div><h1>Suv list - 2020 Honda CRV</h1><img src ={Suv1}className="suvv"/>
  <h1>Suv list - 2019 Honda CRV</h1><img src ={Suv2}className="Suvh"/>
  <h1>Suv list -2020 Subaru Outback</h1><img src ={Suv3}className="suva"/>
  <h1>Suv list - 2020 Subaru Forester</h1><img src ={Suv4}className="suvf"/>
  <h1>Suv list - 2021 Subaru Accent</h1><img src ={Suv5}className="suvo"/></div>)
}

const vanMenu = () => {
  return (<div><h1>Van list - 2020 Lexus MiniVan</h1><img src ={Van1}className="vans"/>
  <h1>Van list - 2006 Ford Transit Van</h1><img src ={Van2}className="vanss"/>
  <h1>Van list - 2007 Ford MiniVan</h1><img src ={Van3}className="vanc"/>
  <h1>Van list - 2020 Ford Van Eco</h1><img src ={Van4}className="vanf"/>
  <h1>Van list - 2002 Chevrolet Express Van</h1><img src ={Van5}className="vanb"/></div>)
}

const scarMenu = () => {
  return (<div><h1>Sports car list - 2021 Ferrari F8 Topless </h1><img src ={SC1}className="scf"/>
  <h1>Sports car list - 2021 Ferrari J50</h1><img src ={SC2}className="scff"/>
  <h1>Sports car list - 2020 Ferrari F8 Tributo</h1><img src ={SC3}className="sct"/>
  <h1>Sports car list - 1999 Ferrari Porchse  </h1><img src ={SC4}className="scp"/>
  <h1>Sports car list - 2019 Ferrari 250 GTO</h1><img src ={SC5}className="scc"/></div>)
}

function handleOnClick (e) {
    if (e.target.id === "truck") {
        if (truckDropDown === true) {
            setTruckDropDown(false)
        } else {
            setTruckDropDown(true)
        }
    } else if (e.target.id === "jeep") {
        if (jeepDropDown === true) {
            setJeepDropDown(false)
        } else {
            setJeepDropDown(true)
        }
      } else if (e.target.id === "car") {
          if (carDropDown === true) {
              setCarDropDown(false)
          } else {
              setCarDropDown(true)
          }
      } else if (e.target.id === "suv") {
          if (suvDropDown === true) {
              setSuvDropDown(false)
          } else {
              setSuvDropDown(true)
          }
      } else if (e.target.id === "van") {
          if (vanDropDown === true) {
              setVanDropDown(false)
          } else {
              setVanDropDown(true)
          }
      } else if (e.target.id === "scar") {
          if (scarDropDown === true) {
              setScarDropDown(false)
          } else {
              setScarDropDown(true)
            }

    }

}

  return (
      <div className="car">
      {(showPopUp === true) ? popUp : <div />}
      <h1>List of cars please take a good look around!!</h1>
      <button className="custom-button" id="truck" onClick={(e) => handleOnClick(e)}>Trucks</button>
      {(truckDropDown === true)? truckMenu() : <div /> }
      <button className="custom-button" id="jeep" onClick={(e) => handleOnClick(e)}>Jeeps</button>
      {(jeepDropDown === true)? jeepMenu() : <div /> }
      <button className="custom-button" id="car" onClick={(e) => handleOnClick(e)}>Cars</button>
      {(carDropDown === true)? carMenu() : <div /> }
      <button className="custom-button" id="suv" onClick={(e) => handleOnClick(e)}>Suv</button>
      {(suvDropDown === true)? suvMenu() : <div /> }
      <button className="custom-button" id="van" onClick={(e) => handleOnClick(e)}>Van</button>
      {(vanDropDown === true)? vanMenu() : <div /> }
      <button className="custom-button" id="scar" onClick={(e) => handleOnClick(e)}>Sport cars</button>
      {(scarDropDown === true)? scarMenu() : <div /> }
      </div>





  );
}

export default Car;
