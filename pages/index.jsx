import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import React from "react";
import Map from "./components/Map";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

// import Image from "next/image";
export default function HomePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ name: user.displayName, photoURL: user.photoURL });
      } else {
        setUser(null);
        router.push("/Login");
      }
    });
  }, []);
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          <LogoImage
            src="/images/xotaxi.png"
            alt="Logo"
            width={180}
            height={180}
          />
          <Profiile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoURL}
              onClick={() => signOut(auth)}
            ></UserImage>
          </Profiile>
        </Header>
        <ActionButtons>
          <Link href="/Search">
            <ActionButton>
              <ActionButtonImage
                src="/images/ride2.png"
                alt="ride"
                width={180}
                height={180}
              />
              Ride
            </ActionButton>
          </Link>
          <Link href="/Search">
            <ActionButton>
              {" "}
              <ActionButtonImage
                src="/images/bikegreen.png"
                alt="ride"
                width={180}
                height={180}
              />
              wheels
            </ActionButton>
          </Link>
          <Link href="/Search">
            <ActionButton>
              {" "}
              <ActionButtonImage
                src="/images/calender.png"
                alt="ride"
                width={180}
                height={180}
              />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>where to go?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex  flex-col bg-grey-700 h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between item-center
`;
const Profiile = tw.div`
flex items-center
`;

const LogoImage = tw.img`
h-30 
`;

const Name = tw.div`
mr-4 w-20 text-small
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer`;

const ActionButtons = tw.div`
flex  justify-center
`;
const ActionButton = tw.div`

flex bg-gray-200 flex-1 m-5 h-32 items-center flex-col justify-center rounded-lg
transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5`;

const InputButton = tw.div`bg-gray-200 h-20 p-4 text-2xl flex items-center mt-8 rounded-lg
`;
