import { FaBalanceScale, FaShieldAlt, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "legal excellence",
    description:
      "Meticulous legal analysis and strategy advocacy backed by experience integrity and in depth domain knowledege.",
    icon: <FaBalanceScale />,
  },
  {
    title: "trusted advocacy",
    description:
      "A reputation built on discretion reliability and strong courtroom representation across complex legal matters.",
    icon: <FaShieldAlt />,
  },
  {
    title: "client first approach",
    description:
      "Personalized legal solutions focused on clarity transparency and long term trust with every client.",
    icon: <FaUsers />,
  },
];
function About() {
  return (
    <section
      className="bg-[#ffe0cb] w-full px-5 py-10  laptop:px-30 space-y-7 laptop:space-y-10  "
      id="about"
    >
      <div className="flex flex-col items-center gap-7 laptop:gap-10 ">
        <button className="text-red-950 text-2xl rounded-full border-2 font-semibold border-black px-4 py-1 w-[150px] text-center">
          About Us
        </button>
        <div className="text-center">
          <p className="text-lg laptop:text-3xl">
            We are a full service Nigeria law firm providing strategy, ethical,
            and results-driven legal solutions. We specialize in real estate,
            corporate, and commercial law, with a focus on supporting new and
            growing businesses across Nigeria and abroad.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 justify-between w-full laptop:gap-0 laptop:flex-row laptop:items-start">
          {features.map((ftr) => (
            <div className="bg-white w-[300px] p-5 h-auto rounded-4xl border-[1px] border-gray-400 space-y-5 laptop:w-[300px]">
              <div className="flex justify-center items-center gap-2">
                <figure className="text-xl">{ftr.icon}</figure>
                <h1 className="capitalize text-xl font-semibold">
                  {ftr.title}
                </h1>
              </div>
              <p className="text-center text-xl">{ftr.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p className=" border-b-3 border-red-950 w-auto"></p>
    </section>
  );
}

export default About;
