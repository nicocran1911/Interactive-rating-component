import React from "react";
import Thanks from "./images/illustration-thank-you.svg";

export default function ThankYou() {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center card w-80 rounded-3xl h-84 p-7 bg-gradient-to-b from-slate-800 to-slate-950 text-white">
          <div className="rounded-full flex justify-center items-center">
            <img src={Thanks} alt="star" className="" />
          </div>
          <div className="flex justify-center items-center mt-5">
          <div className="bg-slate-800 rounded-3xl w-52 p-1 text-center">
            <p className="text-orange-500">You selected 4 our of 5</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mt-6"> Thank you!</h1>
          <div>
            <p className="text-sm text-center text-gray-400 mt-5 mb-6">
              We appreciate you taking time to give a rateing. if you ever need
              support, dont hesitate to get in touch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
