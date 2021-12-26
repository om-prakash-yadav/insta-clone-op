import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon  } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open , setOpen] = useRecoilState(modalState);

  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl  mx-2 lg:mx-auto ">
        {/* left */}
        <div className="relative w-32 hidden lg:flex">
          <Image onClick={() => router.push('/')}
            src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/instagram-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden items-center  flex-shrink-0">
          <Image onClick={() => router.push('/')}
            src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/insta-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className=" relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex  items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5  text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block h-8 w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4 ml-6">
          <HomeIcon onClick={() => router.push('/')} className="navBtn hidden md:inline-flex" />
          

          {session ? (
            <>
              {" "}
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute  bg-red-500 rounded-full -top-1 -right-1 flex items-center text-xs w-4 h-4 justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={()=>setOpen(true)} className="navbtn h-6  cursor-pointer flex-shrink-0" />
              <UserGroupIcon className="navBtn hidden md:inline-flex" />
              <HeartIcon className="navBtn hidden md:inline-flex" />
              {/* profile picture with login and logout functionality */}
              <img onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="rounded-full h-10 w-10 cursor-pointer object-center object-cover"
              />
            </>
          ) : (<>
            <UserCircleIcon onClick={signIn}  className=" md:hidden h-8 cursor-pointer flex-shrink-0 text-gray-600" />
            <p onClick={signIn} className="hidden md:flex text-xl font-semibold cursor-pointer">Sign In</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
