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

    if(onSearch===''){
      navigate('')
    }

    navigate(`/results?${onSearch}`, { // Navegar a la vista de resultados después de la búsqueda
      state: {
        meals: textInput,
      },
    });
  };

  return (
    <div className="flex flex-row justify-center lg:justify-end w-2/3 md:w-1/3 lg:w-1/4 xl:max-w-[30vw]">
      <input className="flex ring-green-300 ring-2 rounded-full 
                        w-[70%]
                        px-4 py-2"
        type="text"
        value={textInput}
        onChange={handleChangeTexto}
        placeholder=" Ingredient"
      />

      <button onClick={handleSearch}>
        <img
          className="flex items-center w-6 h-6 ml-2"
          src="./images/icon_search.png"
          alt="Ícono de búsqueda"
        />
      </button>
    </div>
  );
};

export default SearchBtn;
