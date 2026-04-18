import SatisfiedClient from "./SatisfiedClient";

function HeroSection() {
  return (
    <>
      <section className="bg-[url('/LuminaSite/Lumina/lumina-desktop-background.jpg')] px-5 laptop:px-30  relative text-white bg-cover bg-center w-full flex flex-col justify-center laptop:aspect-[16.5/8.9] aspect-[2.7/3.7] ">
        <div className="bg-black/50 inset-0 absolute"></div>
        <div className="w-[300px] laptop:w-[750px] space-y-5 laptop:space-y-10 relative">
          <h1 className="text-2xl laptop:text-6xl capitalize">
            legal expert for business & individuals in Nigeria.
          </h1>
          <p className="text-sm laptop:text-2xl w-[350px] laptop:w-auto">
            We provide strategic legal solution that protect your business and
            reduce risks, Responsible, Trusted Experts counsel across corporate,
            compliance and litigation needs.
          </p>
          <div className="flex flex-col gap-3 laptop:gap-10 laptop:flex-row">
            <button className="bg-amber-500 py-3 px-3 capitalize  text-center rounded-4xl text-lg font-semibold w-[250px] laptop:w-auto laptop:text-xl laptop:px-6">
              schedule consultation
            </button>
            <button className="bg-[#ffe0cb] w-[250px] capitalize text-red-900 py-3 px-3 text-center rounded-4xl font-semibold text-lg laptop:w-auto laptop:text-xl laptop:px-6">
              view practice areas
            </button>
          </div>
        </div>
      </section>
      <SatisfiedClient />
    </>
  );
}

export default HeroSection;
