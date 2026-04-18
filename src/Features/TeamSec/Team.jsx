import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const team = [
  {
    name: "faith zekeri",
    role: "managing partner",
    image: "/LuminaSite/Team/faith.jpg",
  },
  {
    name: "adv. okoro joy",
    role: "corporate & commercial advisory",
    image: "/LuminaSite/Team/okoro.jpg",
  },
  {
    name: "adv. ajani yetunde",
    role: "real estate and transaction support.",
    image: "/LuminaSite/Team/ajani.jpg",
  },
];
function Team() {
  return (
    <>
      <section
        className="bg-[#ffe0cb] px-5 laptop:px-30 py-10 w-full"
        id="team"
      >
        <div className="flex flex-col gap-7 items-center justify-center">
          <div>
            <button className="border-2 border-red-950 text-center font-semibold text-red-950 px-4 py-1 rounded-full text-2xl capitalize">
              our legal team
            </button>
          </div>
          <div className="text-center space-y-5">
            <h1 className="font-semibold text-xl capitalize laptop:text-2xl">
              experienced legal counsel you can rely on
            </h1>
            <p className="text-lg laptop:text-xl">
              Our team consists of experienced advocates with deep courtroom
              exposure and subject-matter expertise across civil, criminal,
              families and NRI legal matters.
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-between items-center w-full laptop:flex-row">
            {team.map((tm) => (
              <div className="bg-[#c4aa98] rounded-4xl p-5 w-[300px] laptop:w-[350px] flex flex-col gap-2 items-center">
                <LazyLoadImage
                  effect="blur"
                  src={tm.image}
                  className="object-cover h-[100px] w-[100px] rounded-full"
                />
                <h4 className="text-xl font-semibold capitalize">{tm.name}</h4>
                <p className="capitalize text-stone-800 text-center ">
                  {tm.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-red-950 px-5 py-10 laptop:px-30 w-full ">
        <div className="flex flex-col gap-10 text-white items-center justify-center">
          <div>
            <button className="p-4 text-white border-2 text-2xl rounded-2xl border-yellow-500 text-center">
              confidential legal support
            </button>
          </div>
          <h4 className="text-lg text-center laptop:text-xl">
            We provide an intial consultation to understand your legal concern
            and guide you on the appropriate course of action. This is safe and
            confidencial space - not legal solicitation or advice
          </h4>
          <div className="flex flex-col gap-5 laptop:gap-10 laptop:flex-row">
            <button className="text-white bg-yellow-600 p-4 rounded-xl outline-0">
              Schedule a Legal Consultation
            </button>
            <button className="text-black bg-white p-4 rounded-xl ">
              Submit Your Legal Query
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
