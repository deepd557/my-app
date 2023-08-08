import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carlist } from "../Data/Carlist";

const RideSelector = ({ PickupCoordinates, DropoffCoordinates }) => {
let [rideDuration, setRideDuration] = useState(0);
  // get ride durration from mapbox api
  // 1. pickupCoordinates
  // 2. dropoffCoordinates

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${PickupCoordinates[0]},${PickupCoordinates[1]};${DropoffCoordinates[0]},${DropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGVlcDE4cyIsImEiOiJjbGp0ejZqb2YwOTUyM2ptbGlvOWdnb3AzIn0.2Ma5LSjGmh0x1WmPWp19yQ`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      }); //templent litteeral
  }, [PickupCoordinates, DropoffCoordinates]);
  return (
    <Wrapper> 
      <Titel>chose a ride or sipe up for more</Titel>

      <CarList>
        {carlist.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <Cardetails>
              <Service>{car.Service}</Service>
              <Time>5 min away</Time>
            </Cardetails>
            <Price>{'₹' +(rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Price = tw.div`
text-xs`;

const Time = tw.div`
text-xs text-blue-500`;

const Service = tw.div`
font-medium`;

const Cardetails = tw.div`
flex-1 `;

const CarImage = tw.img`    
h-14 mr-4`;

const Car = tw.div`
flex p-4 items-center `;

const CarList = tw.div`
overflow-y-scroll`;

const Titel = tw.div`
text-gray-500 text-center text-xs py-2 border-b`;

const Wrapper = tw.div`
 flex-1  overflow-y-scroll flex flex-col `;

const Backbutton = tw.div``;
