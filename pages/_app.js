import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import tw from "tailwind-styled-components";
import "mapbox-gl/dist/mapbox-gl.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
