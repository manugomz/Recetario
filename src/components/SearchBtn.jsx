import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBtn = ({ onSearch }) => {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();

  const handleChangeTexto = (event) => {
    setTextInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch = textInput.trim();
    // Navegar a la vista de resultados después de la búsqueda
    navigate("/results", {
      state: {
        meals: textInput,
      },
    });
  };

  return (
    <div className="flex w-11/12 items-center gap-2" >
      

      <input className="flex w-4/5 ring-green-300 ring-2 rounded-full px-4 py-2"
        type="text"
        value={textInput}
        onChange={handleChangeTexto}
        placeholder=" Ingredient"
      />

      <button className="flex" onClick={handleSearch}>
      <span style={{ cursor: "pointer" }}>
        <img
          className="flex items-center w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          src="../../src/assets/images/icon_search.png"
          alt="Icono de búsqueda"
        />
      </span>
      </button>
    </div>
  );
};

export default SearchBtn;
