import { FaWhatsapp } from "react-icons/fa";

function DirectContact() {
  return (
    <div className="bg-[#ffe0cb] p-5 w-[60px] h-[60px] laptop:w-[90px] laptop:h-[90px] flex items-center justify-center rounded-full fixed bottom-10 right-5 laptop:bottom-5 laptop:right-15 animate-radialColor ">
      <a href="https://wa.me/2349045808495">
        <FaWhatsapp className="text-red-950 text-3xl laptop:text-5xl animate-float1" />
      </a>
    </div>
  );
}

export default DirectContact;
