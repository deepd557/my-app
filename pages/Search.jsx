import { useState } from "react";
import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  const [Pickup, setPickup] = useState("");
  const [Dropoff, setDropoff] = useState("");
  console.log(Pickup);
  console.log(Dropoff);

  return (
    <Wrapper>
      <Link href="/">
        <ButtonContainer>
          <BackButton src="/images/backarrow.svg" />
        </ButtonContainer>
      </Link>
      <InputContainer>
        <FromToIcons>
          <Start src="/images/start.png" />
          <Line src="/images/line.png" />
          <End src="/images/end.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            type="text"
            className="start"
            placeholder="Enter  pickup location"
            value={Pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            type="text"
            className="end"
            placeholder="where to?"
            value={Dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="/images/plusicon.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="/images/staricon.svg " />
        Saved Places
      </SavedPlaces>

      {/* pass query parameter  for locations*/}
      <Link
        href={{
          pathname: "/Conform",
          query: {
            Pickup: Pickup,
            Dropoff: Dropoff,
          },
        }}
      >
        <ConfirmButton type="button">Confirm Location</ConfirmButton>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen`;

const BackButton = tw.img` h-10 mx-3`;

const ButtonContainer = tw.div`
bg-white px-4`;

const InputContainer = tw.div`
bg-white flex items-center px-4    `;

const FromToIcons = tw.div`
w-14 m-2 flex flex-col  items-center`;

const Start = tw.img`
h-10    w- 10px-5 `;

const Line = tw.img`
h-5 w-15 px-3.5`;

const End = tw.img`
h-12 w- 10px-2.5`;

const InputBoxes = tw.div`
flex flex-col flex-1 `;

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-non rounded-xl`;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full my-2 mx-1 ml-3`;

const SavedPlaces = tw.div`
text-xl  flex items-center bg-white  mx-1  my-3 px-4 py-2`;

const StarIcon = tw.img` 
bg-gray-400 w-10 h-10 p-2 rounded-full   mx-4  mr-2 my-2`;

const ConfirmButton = tw.div`
  justify-self: center
  flex items-center justify-center // Add this line to center the content
  bg-black hover:bg-gray-800
  text-white font-bold
  cursor-pointer
  text-2xl
  py-2 px-4
  mx-4
  my-3
  rounded-xl
`;
