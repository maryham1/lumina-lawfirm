import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useComponent } from "../Context/ScrollContext";
import { useInView } from "react-intersection-observer";
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
  const { teamRef } = useComponent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <>
      <section
        className={`transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"
        } bg-[#ffe0cb] scroll-mt-20 px-5 tablet:px-20 laptop:px-30 py-10 w-full`}
        id="team"
        ref={ref}
      >
        <div
          className="flex flex-col gap-7 items-center justify-center"
          ref={teamRef}
        >
          <div>
            <button className="border-2 border-red-900 text-center font-semibold text-red-900 px-4 py-1 rounded-full text-xl laptop:text-2xl capitalize">
              our legal team
            </button>
          </div>
          <div className="text-center space-y-5">
            <h1 className="font-semibold text-lg capitalize laptop:text-2xl">
              experienced legal counsel you can rely on
            </h1>
            <p className="text-md laptop:text-xl">
              Our team consists of experienced advocates with deep courtroom
              exposure and subject-matter expertise across civil, criminal,
              families and NRI legal matters.
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-between items-center w-full tablet:flex-row tablet:gap-10 tablet:items-center laptop:flex-row laptop:gap-10 laptop:items-start">
            {team.map((tm, index) => (
              <div
                className={` transition-all duration-700 ease-out ${
                  inView
                    ? "opacity-100 translate-y-0 "
                    : "opacity-0 translate-y-20"
                } bg-[#c4aa98] rounded-4xl p-5 w-[300px]  laptop:w-[350px] flex flex-col gap-2 items-center`}
                key={tm.name}
                ref={ref}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <LazyLoadImage
                  effect="blur"
                  src={tm.image}
                  className="object-cover h-[100px] w-[100px] rounded-full"
                />
                <h4 className="text-md laptop:text-xl font-semibold capitalize">
                  {tm.name}
                </h4>
                <p className="capitalize text-stone-800 text-center ">
                  {tm.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-red-900 px-5 py-10 tablet:px-20 laptop:px-30 w-full ">
        <div className="flex flex-col gap-10 text-white items-center justify-center">
          <div>
            <button className="p-4 text-white border-2 text-xl laptop:text-2xl rounded-2xl border-yellow-500 text-center">
              confidential legal support
            </button>
          </div>
          <h4 className="text-md text-center laptop:text-xl">
            We provide an intial consultation to understand your legal concern
            and guide you on the appropriate course of action. This is safe and
            confidencial space - not legal solicitation or advice
          </h4>
          <div className="flex flex-col gap-5 laptop:gap-10 tablet:flex-row laptop:flex-row">
            <button className="text-white bg-yellow-600 p-4 rounded-xl outline-0">
              <a href="https://wa.me/2349045808495" className="cursor-pointer">
                Schedule a Legal Consultation
              </a>
            </button>
            <button className="text-black bg-white p-4 rounded-xl ">
              <a href="https://wa.me/2349045808495" className="cursor-pointer">
                ubmit Your Legal Query
              </a>{" "}
              S
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
