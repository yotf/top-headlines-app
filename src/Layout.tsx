import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import autoAnimate from "@formkit/auto-animate";

const Layout = () => {
  const [selectedCountry, setSelectedCountry] = useState<"us" | "gb">("us");
  const handleCountryChange = (country: "us" | "gb") => {
    setSelectedCountry(country);
  };
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent}>
      <Header
        handleCountryChange={handleCountryChange}
        selectedCountry={selectedCountry}
      />
      <Outlet context={selectedCountry} />
    </div>
  );
};

export default Layout;
