import React from "react";

function ImagenContact() {
  return (
        <div className="relative w-60 h-96">
            <img
                className="absolute z-20 h-90 bottom-px"
                src="../../src/assets/images/Chef.png"
                alt="Chef"
            />
            <img
                className="absolute bottom-px"
                src="../../src/assets/images/Fondo.png"
                alt="Fondo"
            />
        </div>
  );
}

export default ImagenContact;
