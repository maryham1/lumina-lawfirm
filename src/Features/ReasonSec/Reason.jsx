import { useInView } from "react-intersection-observer";

const reasons = [
  {
    id: 1,
    title: "ethical & transparent pratice",
    description:
      "Strict adherence to the rules and ethical standard of Nigeria Bar Association, ensuring responsible and transparent legal representation without solicitation or misleadin assurance.",
  },
  {
    id: 2,
    title: "strong regional presence",
    description:
      "Extensive litigation and advisory experience across Lagos, Abuja, Port Harcourt, and other key regions in Nigeria.",
  },
  {
    id: 3,
    title: "client-centered legal solutions",
    description:
      "We provide personalized, responsive, and practice legal support, tailored to meet the unique needs of each client, ensuring client, efficiency and results at every steps.",
  },
  {
    id: 4,
    title: "strategic case handling",
    description:
      "Every matter is guided by structure legal analysis risk evaluation and outcome focused strategy.",
  },
];
function Reason() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"
      } bg-white scroll-mt-20 w-full py-10 px-5 tablet:px-20 laptop:px-30 `}
      ref={ref}
    >
      <div className="flex flex-col gap-5 items-center justify-center tablet:gap-10 laptop:gap-10">
        <div className="px-4 py-1 font-semibold border-2 border-red-900 rounded-full">
          <button className="text-red-900 text-xl laptop:text-2xl text-center capitalize">
            Why choose us
          </button>
        </div>
        <div className="text-center space-y-5 ">
          <h1 className="text-lg font-semibold capitalize tablet:xl laptop:text-2xl">
            guilding businesses with integrity, excellence, & innovation
          </h1>
          <p className="text-md laptop:text-xl tablet:lg">
            Our firm combines ethical responsibility regional legal insight and
            disciplined case strategy to deliver dependable legal representation
            in sensitive and complex matter.
          </p>
        </div>
        <div className="flex flex-col flex-nowrap gap-10  justify-center tablet:flex-row tablet:gap-20 tablet:flex-wrap laptop:gap-20 laptop:flex-row laptop:flex-wrap">
          {reasons.map((reason, index) => (
            <div
              className={`${inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"} transition-all duration-700 ease-out bg-white  w-auto  border-2 border-gray-400 rounded-3xl p-6 text-center laptop:w-[400px] tablet:w-[290px] `}
              key={reason.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              ref={ref}
            >
              <div className="space-y-5">
                <figure className="flex gap-2  justify-center">
                  <span className="text-lg laptop:text-xl font-bold">
                    {index + 1}.
                  </span>
                  <h1 className="text-lg laptop:text-xl font-bold capitalize">
                    {reason.title}
                  </h1>
                </figure>

                <p className="text-md laptop:text-xl">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reason;
