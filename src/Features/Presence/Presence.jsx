import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const states = [
  { name: "abuja", image: "/LuminaSite/state/abuja.jpg" },
  { name: "kano", image: "/LuminaSite/state/kano.jpg" },
  { name: "lagos", image: "/LuminaSite/state/lagos.jpg" },
  { name: "ogun", image: "/LuminaSite/state/ogun.jpg" },
  { name: "oyo", image: "/LuminaSite/state/oyo.jpg" },
  { name: "river", image: "/LuminaSite/state/river.jpg" },
];
function Presence() {
  return (
    <section className="bg-[#ffe0cb] px-5 laptop:px-30 py-10 w-full">
      <div className="flex flex-col justify-center items-center gap-5 laptop:gap-10">
        <div>
          <button className="rounded-full text-2xl border-2 border-red-950 text-950 py-1 px-4">
            our presence
          </button>
        </div>
        <h4 className="text-xl text-center capitalize laptop:text-2xl">
          serving client across major nigerian state
        </h4>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {states.map((state) => (
            <div className="bg-white flex flex-col  justify-center items-center gap-2 p-4 rounded-2xl shadow-md laptop:w-[200px]">
              <LazyLoadImage
                effect="blur"
                src={state.image}
                className="w-[80px] h-[80px] laptop:h-[100px] laptop:w-[100px] rounded-full object-cover"
              />
              <p className="text-xl capitalize laptop:text-2xl">{state.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Presence;
