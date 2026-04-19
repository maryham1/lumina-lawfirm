import { useComponent } from "../Context/ScrollContext";

function NavLink({ openSideBar, setOpenSideBar }) {
  const { aboutRef, NRIServiceRef, teamRef, contactRef, intServiceRef } =
    useComponent();
  const links = [
    { linkName: "About", linkRef: "#about", scrollRef: aboutRef },
    {
      linkName: "International Service",
      linkRef: "#intService",
      scrollRef: intServiceRef,
    },
    {
      linkName: "NRI service",
      linkRef: "#NRIService",
      scrollRef: NRIServiceRef,
    },
    { linkName: "Our Team", linkRef: "#team", scrollRef: teamRef },
    { linkName: "Contact Us ", linkRef: "#contact", scrollRef: contactRef },
  ];
  return (
    <ul
      className={` 
    ${
      openSideBar
        ? "flex flex-col absolute top-20 right-0 bg-red-950 p-10 w-full  shadow-lg "
        : "hidden "
    } 
    
    laptop:flex laptop:flex-row laptop:relative laptop:bg-transparent laptop:w-auto
    z-50 items-start laptop:items-center justify-between gap-5
  `}
    >
      {links.map((lnk, index) => (
        <li
          key={lnk.linkName}
          className={`
            ${index === links.length - 1 ? "bg-white  laptop:bg-red-900 text-center w-[150px] py-2.5 rounded-2xl" : "px-0 py-0"} 
              
          `}
        >
          <a
            onClick={(e) => {
              e.preventDefault();

              lnk.scrollRef.current.scrollIntoView({ behavior: "smooth" });
              setOpenSideBar(false);
            }}
            href={lnk.linkRef}
            className={`${index === links.length - 1 ? "text-red-900  laptop:text-white" : "text-white  laptop:text-red-900 "} text-md tablet:text-lg laptop:text-lg font-semibold`}
          >
            {lnk.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLink;
