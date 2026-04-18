import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function LegalAss() {
  return (
    <section
      className="py-10 px-5 laptop:px-30 w-full bg-red-950"
      id="intService"
    >
      <div className="flex flex-col gap-10  laptop:justify-between laptop:flex-row laptop:gap-0">
        <div className="w-auto  relative laptop:w-[600px]">
          <LazyLoadImage
            effect="blur"
            src="\LuminaSite\Lumina\international.jpg "
            className="rounded-4xl h-auto laptop:h-[530px] object-cover"
          />
          <div className="absolute inset-0 rounded-4xl bg-red-500/35"></div>
        </div>
        <div className="w-auto space-y-5 text-center text-white laptop:w-[500px] laptop:text-left">
          <button className="text-xl laptop:text-2xl text-yellow-500 rounded-2xl border-2 border-yellow-500 px-4 py-2 capitalize">
            International legal assistance
          </button>
          <h1 className="text-xl capitalize laptop:text-2xl">
            International legal solution for individual and businesses
          </h1>
          <p className="text-lg laptop:text-xl">
            We offer structured, end-to-end cross border legal support, enabling
            efficient representationacross jurisdictions while minimizing
            theneed for travel.
          </p>
          <div className="flex items-center justify-center flex-row flex-wrap gap-10 laptop:justify-normal">
            <figure className="bg-stone-100/20 p-4  text-yellow-500 rounded-xl w-[140px] laptop:p-4 laptop:w-[200px]">
              Property Assets and Protection
            </figure>
            <figure className="bg-stone-100/20 p-4   text-yellow-500 rounded-xl w-[140px] laptop:p-4 laptop:w-[200px]">
              Power of Attornery and Documentation
            </figure>
            <figure className="bg-stone-100/20 p-4  text-yellow-500 rounded-xl w-[140px] laptop:p-4 laptop:w-[200px]">
              Estate Assets and Succession Advisory
            </figure>
            <figure className="bg-stone-100/20 p-4  text-yellow-500 rounded-xl w-[140px] laptop:p-4 laptop:w-[200px]">
              Court Representation in Absence
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalAss;
