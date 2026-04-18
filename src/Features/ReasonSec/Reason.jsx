const reasons = [
  {
    title: "ethical & transparent pratice",
    description:
      "Strict adherence to the rules and ethical standard of Nigeria Bar Association, ensuring responsible and transparent legal representation without solicitation or misleadin assurance.",
  },
  {
    title: "strong regional presence",
    description:
      "Extensive litigation and advisory experience across Lagos, Abuja, Port Harcourt, and other key regions in Nigeria.",
  },
  {
    title: "client-centered legal solutions",
    description:
      "We provide personalized, responsive, and practice legal support, tailored to meet the unique needs of each client, ensuring client, efficiency and results at every steps.",
  },
  {
    title: "strategic case handling",
    description:
      "Every matter is guided by structure legal analysis risk evaluation and outcome focused strategy.",
  },
];
function Reason() {
  return (
    <section className="bg-white  w-full py-10 px-5 laptop:px-30 ">
      <div className="flex flex-col gap-5 items-center justify-center laptop:gap-10">
        <div className="px-4 py-1 font-semibold border-2 border-red-950 rounded-full">
          <button className="text-red-950 text-2xl text-center capitalize">
            Why choose us
          </button>
        </div>
        <div className="text-center space-y-5 ">
          <h1 className="text-xl font-semibold capitalize laptop:text-3xl">
            guilding businesses with integrity, excellence, & innovation
          </h1>
          <p className="text-md laptop:text-2xl">
            Our firm combines ethical responsibility regional legal insight and
            disciplined case strategy to deliver dependable legal representation
            in sensitive and complex matter.
          </p>
        </div>
        <div className="flex flex-col flex-no-wrap gap-10  justify-center laptop:gap-20 laptop:flex-row laptop:flex-wrap">
          {reasons.map((reason, index) => (
            <div className="bg-white  w-auto  border-2 border-gray-400 rounded-3xl p-6 text-center laptop:w-[500px] ">
              <div className="space-y-5">
                <figure className="flex gap-2  justify-center">
                  <span className="text-xl font-bold">{index + 1}.</span>
                  <h1 className="text-xl font-bold capitalize">
                    {reason.title}
                  </h1>
                </figure>

                <p className="text-xl">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reason;
