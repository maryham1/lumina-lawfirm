import { useComponent } from "../Context/ScrollContext";
import SatisfiedClient from "./SatisfiedClient";

function HeroSection() {
  const { NRIServiceRef } = useComponent();
  return (
    <>
      <section className="bg-[url('/LuminaSite/Lumina/lumina-desktop-background.jpg')] px-5 pt-20 tablet:px-20 scroll-mt-20 laptop:px-30  relative text-white bg-cover bg-center w-full flex flex-col justify-center laptop:aspect-[16.5/8.9] aspect-[2.7/3.7] ">
        <div className="bg-black/50 inset-0 absolute"></div>
        <div className="w-[300px] laptop:w-[750px] tablet:w-[620px] space-y-5 laptop:space-y-10  tablet:space-y-10 relative">
          <h1 className="text-2xl laptop:text-6xl tablet:text-5xl capitalize">
            legal expert for business & individuals in Nigeria.
          </h1>
          <p className="text-sm tablet:text-2xl laptop:text-2xl tablet:w-auto w-[350px] laptop:w-auto">
            We provide strategic legal solution that protect your business and
            reduce risks, Responsible, Trusted Experts counsel across corporate,
            compliance and litigation needs.
          </p>
          <div className="flex flex-col gap-3 tablet:gap-5 tablet:flex-row laptop:gap-10 laptop:flex-row">
            <button className="bg-amber-500 py-3 px-3 capitalize  text-center rounded-4xl text-lg font-semibold w-[250px] tablet:w-[270px] laptop:w-auto laptop:text-xl tablet:px-6 laptop:px-6">
              <a href="https://wa.me/2349045808495" className="cursor-pointer">
                schedule consultation
              </a>
            </button>
            <button className="bg-[#ffe0cb] w-[250px] capitalize text-red-900 py-3 px-3 text-center rounded-4xl font-semibold text-lg tablet:w-[270px] laptop:w-auto laptop:text-xl tablet:px-6 laptop:px-6">
              <a
                className="cursor-pointer"
                href="#NRIService"
                onClick={(e) => {
                  e.preventDefault();
                  NRIServiceRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                view practice areas
              </a>
            </button>
          </div>
        </div>
      </section>
      <SatisfiedClient />
    </>
  );
}

export default HeroSection;
