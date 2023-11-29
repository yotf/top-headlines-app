import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  const [selectedCountry, setSelectedCountry] = useState<"us" | "gb">("us");
  const handleCountryChange = (country: "us" | "gb") => {
    setSelectedCountry(country);
  };
  return (
    <>
      <Header
        handleCountryChange={handleCountryChange}
        selectedCountry={selectedCountry}
      />
      <Outlet />
    </>
  );
};

export default Layout;
