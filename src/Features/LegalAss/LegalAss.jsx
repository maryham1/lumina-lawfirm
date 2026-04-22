import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useComponent } from "../Context/ScrollContext";
import { useInView } from "react-intersection-observer";
function LegalAss() {
  const { intServiceRef } = useComponent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"
      } py-10 px-5   tablet:px-20 laptop:px-30 w-full bg-red-950`}
      id="intService"
      ref={ref}
    >
      <div
        className="flex flex-col gap-10 scroll-mt-52  w-full tablet:flex-row tablet:justify-between laptop:justify-between laptop:flex-row "
        ref={intServiceRef}
      >
        <div className="w-auto  relative ">
          <LazyLoadImage
            effect="blur"
            src="\LuminaSite\Lumina\international.jpg "
            className="rounded-4xl  h-auto tablet:w-[300px] tablet:h-[550px] laptop:w-[420px] laptop:h-[470px] object-cover"
          />
          {/* <div className="absolute inset-0  h-auto rounded-4xl bg-red-500/35 laptop:h-[530px]"></div> */}
        </div>
        <div className="w-auto space-y-5 text-center text-white tablet:w-[500px] laptop:w-[500px] laptop:text-left">
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
          <div className="flex items-center justify-center grid grid-cols-2 grid-rows-2 gap-10 laptop:justify-normal">
            <figure className="bg-stone-100/20 p-6 text-sm text-lg text-yellow-500 rounded-xl w-aut0 laptop:p-4 laptop:w-[200px]">
              Property Assets and Protection
            </figure>
            <figure className="bg-stone-100/20 p-6 text-sm text-lg  text-yellow-500 rounded-xl w-auto laptop:p-4 laptop:w-[200px]">
              Power of Attornery and Documentation
            </figure>
            <figure className="bg-stone-100/20 p-6 text-sm text-lg  text-yellow-500 rounded-xl w-auto laptop:p-4 laptop:w-[200px]">
              Estate Assets and Succession Advisory
            </figure>
            <figure className="bg-stone-100/20 p-6 text-sm text-lg text-yellow-500 rounded-xl w-auto laptop:p-4 laptop:w-[200px]">
              Court Representation in Absence
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalAss;
