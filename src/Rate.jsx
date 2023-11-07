import React, { useState } from 'react';
import Star from "./images/icon-star.svg";

export default function Rate() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
  };


  return (
    <div className="flex items-center justify-center h-screen">
      {!showDiv && <div className="card w-80 rounded-3xl h-84 p-7 bg-gradient-to-b from-slate-800 to-slate-950 text-white">
        <div className="rounded-full w-8 h-8 bg-slate-700 flex justify-center items-center">
          <img src={Star} alt="star" className="w-3 h-3" />
        </div>
        <h1 className="font-bold mt-4">How did we do?</h1>
        <p className="mt-2 text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!{" "}
        </p>
        <div className="flex mt-5 justify-between px-2">
          <div className="w-9 h-9 bg-slate-800 rounded-full text-center pt-1.5 text-sm hover:bg-orange-500 hover:cursor-pointer">
            1
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-full text-center pt-1.5 text-sm hover:bg-orange-500 hover:cursor-pointer">
            2
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-full text-center pt-1.5 text-sm hover:bg-orange-500 hover:cursor-pointer">
            3
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-full text-center pt-1.5 text-sm hover:bg-orange-500 hover:cursor-pointer">
            4
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-full text-center pt-1.5 text-sm hover:bg-orange-500 hover:cursor-pointer">
            5
          </div>
        </div>
        <button className="p-2 rounded-3xl w-full bg-orange-500 mt-5 hover:bg-white hover:text-orange-500" onClick={handleClick}>
          SUBMIT
        </button>
      </div>}
    </div>
  );
}
