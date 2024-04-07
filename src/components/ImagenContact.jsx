import React from "react";

function ImagenContact() {
  return (
    <div className="relative w-60 h-96">
      <img
        className="absolute z-20 h-90 bottom-px"
        src="./images/Chef.png"
        alt="Chef"
      />
      <img
        className="absolute bottom-px"
        src="./images/Fondo.png"
        alt="Fondo"
      />
    </div>
  );
}

export default ImagenContact;
