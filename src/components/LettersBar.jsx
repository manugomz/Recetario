import React from "react";

function LettersBar({ handleSelectLetter }) {
  let lettersArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <ul
      className="grid grid-cols-13 place-items-center 
        bg-green-300 w-full px-2
        md:flex md:justify-around"
    >
      {lettersArray.map((letter) => {
        return (
          <li
            className="text-white 
                            font-Inter text-xl"
            key={letter}
          >
            <button
              onClick={() => handleSelectLetter(letter)}
              className=" w-6 p-1 text-center
                        hover:bg-green-500 hover:shadow-light
                        hover:rounded-t-md hover:-translate-y-1 hover:duration-300 hover:scale-110
                        active:bg-green-700 active:shadow-none active:duration-0 
                        "
            >
              {letter}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default LettersBar;
