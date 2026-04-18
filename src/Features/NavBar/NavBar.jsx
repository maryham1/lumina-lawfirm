import { useState } from "react";
import Logo from "../../UI/Logo";
import MenuButton from "./MenuButton";
import NavLink from "./NavLink";

function NavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <nav className="bg-[#ffe0cb] flex flex-row px-5 py-5 w-full justify-between items-center h-auto laptop:py-5 laptop:px-30">
      <Logo />
      <MenuButton openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <NavLink openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
    </nav>
  );
}

export default NavBar;
