import { useEffect, useState } from "react";
import React from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";
const Confirm = () => {
  const router = useRouter();
  const { Pickup, Dropoff } = router.query;

  console.log("Pickup", Pickup);
  console.log("Dropoff", Dropoff);
  // to store some data
  //  PickupCoordinates:whatever inside the box
  //  setPickupCoordinates:whatever you put in the box

  const [PickupCoordinates, setPickupCoordinates] = useState(0, 0);
  const [DropoffCoordinates, setDropoffCoordinates] = useState(0, 0);

  // api fetch call
  const getPickupCoordinates = (Pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${Pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGVlcDE4cyIsImEiOiJjbGp0ejZqb2YwOTUyM2ptbGlvOWdnb3AzIn0.2Ma5LSjGmh0x1WmPWp19yQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        console.log("pickup");
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (Dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${Dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGVlcDE4cyIsImEiOiJjbGp0ejZqb2YwOTUyM2ptbGlvOWdnb3AzIn0.2Ma5LSjGmh0x1WmPWp19yQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Dropoff");
        console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(Pickup);
    getDropoffCoordinates(Dropoff);
  }, [Pickup, Dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/Search" >
        <BackButton src="/Images/backvector.svg" />
        </Link>
      </ButtonContainer>

      <Map
        PickupCoordinates={PickupCoordinates}
        DropoffCoordinates={DropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          PickupCoordinates={PickupCoordinates}
          DropoffCoordinates={DropoffCoordinates}
        />

        <ConfirmButtonContainer>
          <ConfirmButton>confirm booking</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex  flex-col h-screen`;

const RideContainer = tw.div`
flex flex-1  flex-col h-1/2`;

const URLSearchParamsf = tw.div``;

const ConfirmButtonContainer = tw.div`
   border-t-2`;

const ConfirmButton = tw.div`
 bg-black text-white my-4 mx-4 py-4 text-center text-xl`;

const ButtonContainer = tw.div`
rounded-full  absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`;

const BackButton = tw.img`
h-full object-contain z- -1 `
