const links = [
  { linkName: "About", linkRef: "#about" },
  { linkName: "International Service", linkRef: "#intService" },
  { linkName: "NRI service", linkRef: "#NRIService" },
  { linkName: "Our Team", linkRef: "#team" },
  { linkName: "Contact Us ", linkRef: "#contact" },
];

function NavLink({ openSideBar, setOpenSideBar }) {
  return (
    <ul
      className={`${openSideBar ? "flex flex-col top-32 right-0 w-auto px-10 py-10 h-screen justify-around bg-red-900" : "hidden"}  absolute laptop:flex gap-10 laptop:relative laptop:flex-row`}
    >
      {links.map((lnk, index) => (
        <li
          className={
            index === links.length - 1
              ? "bg-white laptop:bg-red-950 px-5 py-2.5 text-center rounded-xl w-[160px] laptop:w-[180px]"
              : "bg-transparent w-auto"
          }
        >
          <a
            href={lnk.linkRef}
            className={`${index === links.length - 1 ? "text-red-900 laptop:text-white" : "text-white laptop:text-red-900 "} text-2xl laptop:text-2xl font-semibold`}
          >
            {lnk.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLink;
