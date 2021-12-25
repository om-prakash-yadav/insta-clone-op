import React from "react";
import { useSession } from "next-auth/react";

function Stories() {
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-red-400">
      {session ? (
        <div>
          <img
            className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
            src={session.user.image}
            alt="error"
          />
          <p className="text-xs w-14 truncate text-center">{session.user.username}</p>
        </div>
      ) : (
        <div>
          <img
            className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
  hover:scale-110 transition transform duration-200 ease-out"
            src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/Untitled.png"
            alt="error"
          />
          <p className="text-xs w-14 truncate text-center">om prakash</p>
        </div>
      )}

      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/harsh.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">harsh jha</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/monu.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Monu Paswan</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/akashraj.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Akash Raj</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/9.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">katrina</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/10.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">james</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/11.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">bheem</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/12.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">OGGY</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/13.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Chutki</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/14.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Motu</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/15.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Priya</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/16.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Xiang chi</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/17.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">Don</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/18.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">meena</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/19.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">sanjay</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/20.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">wakar</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/46.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">sultan</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/36.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">sita</p>
      </div>
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1px] border-red-500 border-[2.1px]  object-cover object-center cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out"
          src="https://leafac.github.io/fake-avatars/avatars/26.png"
          alt="error"
        />
        <p className="text-xs w-14 truncate text-center">geeta</p>
      </div>
    </div>
  );
}

export default Stories;
