import React from "react";

function Suggestions() {
  return (
    <div className="mt-4 ml-10 ">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <img
          className="h-10 w-10 border rounded-full p-[2px]"
          src="https://leafac.github.io/fake-avatars/avatars/6.png"
          alt=""
        />

        <div className="flex-1 ml-4 ">
          <h2 className="font-semibold text-sm">James Desouza</h2>
          <h3 className="text-xs">Works at Microsoft</h3>
        </div>
        <button className="text-sm font-bold text-blue-400">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          className="h-10 w-10 border rounded-full p-[2px]"
          src="https://leafac.github.io/fake-avatars/avatars/7.png"
          alt=""
        />

        <div className="flex-1 ml-4 ">
          <h2 className="font-semibold text-sm"> andrew sen</h2>
          <h3 className="text-xs">Works at Amazon</h3>
        </div>
        <button className="text-sm font-bold text-blue-400">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          className="h-10 w-10 border rounded-full p-[2px]"
          src="https://leafac.github.io/fake-avatars/avatars/13.png"
          alt=""
        />

        <div className="flex-1 ml-4 ">
          <h2 className="font-semibold text-sm">Linda H</h2>
          <h3 className="text-xs">Works at Apple</h3>
        </div>
        <button className="text-sm font-bold text-blue-400">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          className="h-10 w-10 border rounded-full p-[2px]"
          src="https://leafac.github.io/fake-avatars/avatars/6.png"
          alt=""
        />

        <div className="flex-1 ml-4 ">
          <h2 className="font-semibold text-sm">James Desouza</h2>
          <h3 className="text-xs">Works at Microsoft</h3>
        </div>
        <button className="text-sm font-bold text-blue-400">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          className="h-10 w-10 border rounded-full p-[2px]"
          src="https://leafac.github.io/fake-avatars/avatars/6.png"
          alt=""
        />

        <div className="flex-1 ml-4 ">
          <h2 className="font-semibold text-sm">James Desouza</h2>
          <h3 className="text-xs">Works at Microsoft</h3>
        </div>
        <button className="text-sm font-bold text-blue-400">Follow</button>
      </div>
    </div>
  );
}

export default Suggestions;
