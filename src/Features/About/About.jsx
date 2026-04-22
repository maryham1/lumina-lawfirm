import { FaBalanceScale, FaShieldAlt, FaUsers } from "react-icons/fa";
import { useComponent } from "../Context/ScrollContext";
import { useInView } from "react-intersection-observer";
import { Features } from "tailwindcss";

const features = [
  {
    id: 1,
    title: "legal excellence",
    description:
      "Meticulous legal analysis and strategy advocacy backed by experience integrity and in depth domain knowledege.",
    icon: <FaBalanceScale />,
  },
  {
    id: 2,
    title: "trusted advocacy",
    description:
      "A reputation built on discretion reliability and strong courtroom representation across complex legal matters.",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: "client first approach",
    description:
      "Personalized legal solutions focused on clarity transparency and long term trust with every client.",
    icon: <FaUsers />,
  },
];
function About() {
  const { aboutRef } = useComponent();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"
      }bg-[#ffe0cb]  w-full px-5 py-10  tablet:px-20 tablet:space-y-7 laptop:px-30 space-y-7 laptop:space-y-10  `}
      id="about"
      ref={ref}
    >
      <div
        className="flex flex-col items-center gap-7 tablet:gap-10 laptop:gap-10 scroll-mt-32"
        ref={aboutRef}
      >
        <button className="text-red-900 text-xl  laptop:text-2xl rounded-full border-2 font-semibold border-bg-red-900 px-4 py-1 w-[150px] text-center">
          About Us
        </button>
        <div className="text-center">
          <p className="text-md laptop:text-2xl">
            We are a full service Nigeria law firm providing strategy, ethical,
            and results-driven legal solutions. We specialize in real estate,
            corporate, and commercial law, with a focus on supporting new and
            growing businesses across Nigeria and abroad.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 justify-between w-full tablet:gap-7 tablet:flex-row tablet:items-center laptop:gap-0 laptop:flex-row laptop:items-start">
          {features.map((ftr, index) => (
            <div
              className={`${inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"} transition-all duration-700 ease-out bg-white w-[300px] p-5 h-auto rounded-4xl border-[1px] border-gray-400 space-y-5 laptop:w-[300px] tablet:w-auto`}
              key={ftr.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              ref={ref}
            >
              <div className="flex justify-center items-center gap-2">
                <figure className="text-lg laptop:text-xl">{ftr.icon}</figure>
                <h1 className="capitalize text-lg laptop:text-xl font-semibold">
                  {ftr.title}
                </h1>
              </div>
              <p className="text-center text-md laptop:text-lg">
                {ftr.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className=" border-b-3 border-red-900 w-auto"></p>
    </section>
  );
}

export default About;
