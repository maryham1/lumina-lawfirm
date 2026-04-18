import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

function MenuButton({ openSideBar, setOpenSideBar }) {
  return (
    <button
      className="block laptop:hidden"
      onClick={() => setOpenSideBar(!openSideBar)}
    >
      <span>
        {openSideBar ? (
          <HiMiniXMark className="text-3xl text-red-900 font-bold" />
        ) : (
          <HiMiniBars3 className="text-3xl text-red-900 font-bold" />
        )}
      </span>
    </button>
  );
}

export default MenuButton;
