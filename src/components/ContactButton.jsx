const ContactButton = () => {
  return (
    <button className="flex flex-row justify-center items-center
                    bg-green-300  rounded-full
                    px-6 py-2 
                    hover:bg-green-500 hover:shadow-light">
      <img className="w-5 h-5 
                        mr-2"
          src="./images/fi-rr-phone-call.png"/>
      <div className="text-white text-base md:text-lg lg:text-xl font-semibold">
        Contact
      </div>
    </button>
  );
};

export default ContactButton;
