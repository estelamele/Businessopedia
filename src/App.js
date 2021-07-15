import React from "react";
import * as s from "./App.styles";
import * as Palette from "./colors";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const backgroundImage = "https://i.pinimg.com/originals/b5/c3/14/b5c314ac9fc88cdb1236ded180f67468.jpg";
  const sidebarHeader = {
    fullName: "𝕻usinessopedia",
    shortName: "𝕻"
  };
  const menuItems = [
    { name: "Home", to: "/", icon: "/icons/home.svg", subMenuItems: [] },
    { name: "About", to: "/about", icon: "/icons/about.svg", subMenuItems: [] },
    {
      name: "Categories",
      to: "/Categories",
      icon: "/icons/blog.svg",
      subMenuItems: [
        { name: "Accessories", to: "/canada" },
        { name: "Arts & Culture", to: "/brazil" },
        { name: "Clothes", to: "/india" },
        { name: "Pets Services", to: "/australia" },
        { name: "Restaurants", to: "/kenya" }
      ]
    },
    { name: "Blog", to: "/blog", icon: "/icons/blog.svg", subMenuItems: [] },
    {
      name: "Services",
      to: "/services",
      icon: "/icons/services.svg",
      subMenuItems: []
    },
    {
      name: "Contacts",
      to: "/contacts",
      icon: "/icons/contacts.svg",
      subMenuItems: []
    }
  ];

  const fonts = {
    header: "ZCOOL KuaiLe",
    menu: "Poppins"
  };

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.dejaVu}
      />
      <MainView />
    </s.App>
  );
};

export default App;
