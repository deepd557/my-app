import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGVlcDE4cyIsImEiOiJjbGp0ejZqb2YwOTUyM2ptbGlvOWdnb3AzIn0.2Ma5LSjGmh0x1WmPWp19yQ";

const Map = (props) => {
  // console.log(props);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-99.29011, 39.39172],
      zoom: 4,
    });

    if (props.PickupCoordinates) {
      addToMap(map, props.PickupCoordinates);
    }

    if (props.DropoffCoordinates) {
      addToMap(map, props.DropoffCoordinates);
    }
    if (props.PickupCoordinates && props.DropoffCoordinates) {
      map.fitBounds([props.DropoffCoordinates, props.PickupCoordinates], {
        padding: 40,
      });
    }
  }, [props.PickupCoordinates, props.DropoffCoordinates]);

  const addToMap = (map, Coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(Coordinates).addTo(map);
  };

  // pass props in useEffect
  // ❤️that part is not used
  // useEffect(() => {
  //   if (props.pickupCoordinates) {
  //     addToMap(map);
  //   }
  // }, [props.pickupCoordinates, props.dropoffCoordinates]);

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2`;
