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
    <div>
      <div>
        <span style={{ cursor: "pointer" }}>
          <img
            className="flex items-center w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            src="../../src/assets/images/icon_search.png"
            alt="Icono de búsqueda"
          />
        </span>
      </div>

      <div>
        <input
          type="text"
          value={textInput}
          onChange={handleChangeTexto}
          placeholder=" Ingredient"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBtn;
