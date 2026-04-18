import CountUpLib from "react-countup";
const CountUp = CountUpLib.default || CountUpLib;

function SatisfiedClient() {
  return (
    <div className="bg-red-950 text-white py-10 px-5 w-full flex flex-col gap-12 justify-between items-start laptop:items-center laptop:gap-0 laptop:flex-row laptop:px-30">
      <div className="space-y-2">
        <p className="text-xl">Trusted by our customer</p>
        <div className="flex items-center space-x-2">
          <div className="flex">
            <img
              src="\LuminaSite\Client\third-client.jpg"
              className="rounded-full w-[40px] h-[40px] laptop:w-[50px] laptop:h-[50px]  object-cover"
            />
            <img
              src="\LuminaSite\Client\fouth-client.jpg"
              className="rounded-full w-[40px] h-[40px] laptop:w-[50px] laptop:h-[50px] ml-[-15px] object-cover"
            />
            <img
              src="\LuminaSite\Client\second-client.jpg"
              className="rounded-full w-[40px] h-[40px] laptop:w-[50px] laptop:h-[50px] ml-[-15px] object-cover"
            />
            <img
              src="\LuminaSite\Client\first-client.jpg"
              className="rounded-full w-[40px] h-[40px] laptop:w-[50px] laptop:h-[50px] ml-[-15px] object-cover"
            />
          </div>
          <div>
            <p className="text-2xl">
              <CountUp
                start={1}
                end={1000}
                duration={5}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </p>
            <p className="text-sm">Client Satisfied</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[350px] text-[#ffe0cb] laptop:w-[600px]">
        <div>
          <p className="text-2xl font-semibold laptop:text-4xl">
            <CountUp
              start={1}
              end={15}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
            />
            k+
          </p>
          <span className="capitalize text-sm laptop:text-lg">
            legal matter resolved
          </span>
        </div>
        <p className="hidden border border-[#ffe0cb]  border-r-4 border-b-0 border-t-0 border-l-0 h-[60px] laptop:block"></p>
        <div>
          <p className="text-2xl font-semibold laptop:text-4xl">
            <CountUp
              start={1}
              end={13}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
            />
            k+
          </p>
          <span className="capitalize text-sm laptop:text-lg">
            years of experience
          </span>
        </div>
        <p className="hidden border border-[#ffe0cb]  border-r-4 border-b-0 border-t-0 border-l-0 h-[60px] laptop:block"></p>
        <div>
          <p className="text-2xl font-semibold laptop:text-4xl">
            <CountUp
              start={1}
              end={10}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
            />
            k+
          </p>
          <span className="capitalize text-sm laptop:text-lg">
            Satisfied client
          </span>
        </div>
      </div>
    </div>
  );
}

export default SatisfiedClient;
