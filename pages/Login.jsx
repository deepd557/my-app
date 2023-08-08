import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Logo src="/images/xotaxi.png" />
      <Title> Log in to access your account</Title>
      <HeadImage src="/images/headerphoto.png" />

      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        {" "}
        sign in with google
      </SignInButton>
    </Wrapper>
  );
}

export default Login;

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4`;

const SignInButton = tw.div`
bg-black text-white py-4 mt-8 text-center w-full cursor-pointer`;

const Logo = tw.img`
h-28 w-auto object-contain self-start `;

const Title = tw.div`
text-5xl pt-4 text-gray-500`;

const HeadImage = tw.img` 
object-contain w-full `;
