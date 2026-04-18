import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <footer className="bg-red-950 px-5 py-10 laptop:px-30 w-full" id="contact">
      <div className="flex flex-col gap-10 justify-normal items-start laptop:justify-between laptop:flex-row laptop:items-center w-full text-white">
        <div className="w-auto laptop:w-[500px]">
          <h4 className="text-xl">LexTrustLaw</h4>
          <p>
            A full service law firm providing strategic, complaint and
            confidential legal representation across India and international
            jurisdictions.
          </p>
        </div>
        <div className="">
          <h4 className="text-yellow-500 text-xl">Contact us</h4>
          <figure className="flex gap-2">
            <span>
              <FaPhone />
            </span>
            <a href="tel:+2349045808495">+234 9045808495</a>
          </figure>
          <figure className="flex gap-2">
            <span>
              <MdEmail />
            </span>
            <a href="mailto:maryham4real@gmail.com">maryham4real@gmail.com</a>
          </figure>
          <figure className="flex gap-2">
            <span>
              <FiMapPin />
            </span>
            <a href="">Nigeria</a>
          </figure>
        </div>
        <div className="w-auto laptop:w-[500px]">
          <h4 className="text-xl text-yellow-500">Legal Disclaimer</h4>
          <p>
            As per the bar council of India rules, LexTrust does not solicit
            work or advertise. This website is for informational purposes only
            and does not constitute legal advice or create a lawyer client
            relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
