import React from "react";
import ImagenContact from "../components/ImagenContact";
import Forms from "../components/Form";

function ContactUs() {
  return (
    <section className="anantialiased">
        <h1
          className="font-Inter font-extrabold text-3xl 
                    text-center 
                    lg:text-3xl
                    2xl:text-6xl"
        >
          CONTACT US
        </h1>

      <div
        className="flex flex-col md:flex-row md:items-center md:justify-center
                    rounded-xl shadow-xl justify-around md:gap-14
                    px-8"
      >
        <div className="md:p-8 self-center md:mb-14">
          <ImagenContact />
        </div>
        <div className="flex flex-col p-8">
          <Forms />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
