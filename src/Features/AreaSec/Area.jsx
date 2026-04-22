import { useState } from "react";
import { useComponent } from "../Context/ScrollContext";
import { useInView } from "react-intersection-observer";

const practiceAreas = [
  {
    id: 1,
    title: "Real Estate Due Diligence",
    shortDescription:
      "Title verification, ownership validation and risk analysis for secure property transactions.",
    details: {
      overview:
        "We provide thorough legal verification of property ownership and documentation to ensure your transaction is secure and risk-free.",
      services: [
        "Title verification and land registry checks",
        "Review of property documents and agreements",
        "Identification of legal encumbrances or disputes",
        "Advisory on safe property acquisition",
      ],
      importance:
        "Avoid costly mistakes, fraud, or disputes when buying or investing in property.",
    },
  },
  {
    id: 2,
    title: "Nigerians Abroad Legal Services",
    shortDescription:
      "Comprehensive legal representation and property management for clients living abroad.",
    details: {
      overview:
        "We represent and support Nigerians living abroad in handling legal matters back home without needing to travel.",
      services: [
        "Property management and verification",
        "Legal representation in courts and agencies",
        "Documentation and contract handling",
        "Business and investment advisory in Nigeria",
      ],
      importance:
        "Stay legally protected and in control of your affairs in Nigeria from anywhere in the world.",
    },
  },
  {
    id: 3,
    title: "Criminal Law and Bail",
    shortDescription:
      "Defense strategy and bail advocacy across courts and law enforcement agencies.",
    details: {
      overview:
        "We provide strong legal defense and assist clients in securing bail and navigating criminal proceedings.",
      services: [
        "Bail application and processing",
        "Legal representation in criminal cases",
        "Police station and court intervention",
        "Case strategy and defense planning",
      ],
      importance:
        "Ensure your rights are protected and receive fair treatment under the law.",
    },
  },
  {
    id: 4,
    title: "Cheque Bounce Matters",
    shortDescription:
      "Legal support for dishonoured cheque disputes and financial recovery processes.",
    details: {
      overview:
        "We handle disputes arising from dishonoured cheques and help enforce financial accountability.",
      services: [
        "Legal action for bounced cheques",
        "Defense against wrongful claims",
        "Negotiation and settlement support",
        "Court representation",
      ],
      importance:
        "Protect your financial interests and resolve disputes efficiently.",
    },
  },
  {
    id: 5,
    title: "RERA and Builder Disputes",
    shortDescription:
      "Legal assistance for disputes with developers, delayed projects, and contract issues.",
    details: {
      overview:
        "We assist clients in resolving conflicts with developers, builders, and real estate projects.",
      services: [
        "Filing complaints with regulatory authorities",
        "Legal representation in property disputes",
        "Delay compensation claims",
        "Contract review and enforcement",
      ],
      importance:
        "Ensure developers fulfill their obligations and protect your investment.",
    },
  },
  {
    id: 6,
    title: "Family and Matrimonial Law",
    shortDescription:
      "Legal guidance for divorce, custody, and family-related matters.",
    details: {
      overview:
        "We provide compassionate and strategic legal support for family-related matters.",
      services: [
        "Divorce and separation proceedings",
        "Child custody and support",
        "Alimony and settlements",
        "Mediation and dispute resolution",
      ],
      importance:
        "Handle sensitive family issues with dignity, fairness, and legal clarity.",
    },
  },
  {
    id: 7,
    title: "Cyber Crime and Fraud",
    shortDescription:
      "Legal action and advisory for online fraud, identity theft, and cyber offenses.",
    details: {
      overview:
        "We help individuals and businesses tackle digital fraud, identity theft, and cyber-related offenses.",
      services: [
        "Legal action against online fraudsters",
        "Advisory on cybercrime laws",
        "Representation in cybercrime cases",
        "Digital evidence handling",
      ],
      importance:
        "Protect your identity, finances, and digital assets in an increasingly online world.",
    },
  },
  {
    id: 8,
    title: "Property Disputes and Recovery",
    shortDescription:
      "Resolution of ownership disputes and recovery of unlawfully occupied property.",
    details: {
      overview:
        "We resolve disputes involving ownership, possession, and recovery of property.",
      services: [
        "Land and property litigation",
        "Recovery of unlawfully occupied property",
        "Injunctions and legal notices",
        "Dispute resolution and negotiation",
      ],
      importance:
        "Secure your property rights and reclaim what legally belongs to you.",
    },
  },
];
function Area() {
  const { NRIServiceRef } = useComponent();
  const [view, setView] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-20"
      } bg-[#ffe0cb]  w-full py-10 px-5 tablet:px-20 laptop:px-30  `}
      id="NRIService"
      ref={ref}
    >
      <div
        className="flex flex-col gap-5 items-center justify-center scroll-mt-52 laptop:gap-10 laptop:gap-10"
        ref={NRIServiceRef}
      >
        <div className="px-4 py-1 font-semibold border-2 border-red-900 rounded-full">
          <button className="text-red-900 text-xl tablet:2xl text-center capitalize laptop:text-2xl ">
            practice area
          </button>
        </div>
        <div className="text-center space-y-3 laptop:space-y-5">
          <h1 className="text-xl tablet:2xl font-semibold laptop:text-3xl">
            Areas of Legal Practice
          </h1>
          <p className="text-md laptop:text-2xl">
            Our firms present individuals, families and institution across a
            broad spectrum of civil and criminal matters with clarity, strategy,
            and discretion.
          </p>
        </div>
        <div className="flex flex-col gap-5 tablet:gap-10 laptop:gap-10">
          {practiceAreas.map((area, index) => (
            <div
              className={`transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-y-0 "
                  : "opacity-0 translate-y-20"
              } bg-white rounded-3xl p-5 border-2 border-gray-400`}
              key={area.id}
              style={{ transitionDelay: `${index * 150}ms` }}
              ref={ref}
            >
              <div>
                <figure className="flex gap-2 text-lg laptop:text-xl capitalize font-semibold">
                  <span>{area.id}.</span>
                  <h1>{area.title}</h1>
                </figure>
              </div>
              <p className="text-stone-700 text-md laptop:text-xl">
                {area.shortDescription}
              </p>
              <button
                className={`${view ? "text-stone-900" : "text-stone-700"}  font-bold text-md capitalize  cursor-pointer laptop:text-xl`}
                onClick={() => setView(view === area.id ? null : area.id)}
              >
                {view === area.id
                  ? "hide details \u2190"
                  : `view details \u2192`}
              </button>

              {view === area.id && (
                <div
                  className={`  px-7 py-3 space-y-3 laptop:px-10 laptop:py-5 `}
                >
                  {/* overview */}
                  <div>
                    <h4 className="font-semibold text-lg laptop:text-2xl">
                      Overview
                    </h4>
                    <p className="text-md laptop:text-lg">
                      {area.details.overview}
                    </p>
                  </div>
                  {/* services */}
                  <div>
                    <h4 className="font-semibold text-lg laptop:text-xl ">
                      Key Services
                    </h4>
                    <ul className="px-8 py-2 list-disc">
                      {area.details.services.map((service) => (
                        <li>{service}</li>
                      ))}
                    </ul>
                  </div>
                  {/* importance */}
                  <div>
                    <h4 className="font-semibold text-md capitalize laptop:text-xl">
                      why this matters
                    </h4>
                    <p className="text-sm laptop:text-lg">
                      {area.details.importance}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Area;
