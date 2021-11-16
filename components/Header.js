import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <div classNam="shadow-sm border-b bg-white sticky top-0 z-50 ">
      <div className=" flex  justify-between py-6 max-w-6xl mx-5 xl:mx-auto">
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer ">
          <Image
            src="https://links.papareact.com/ocw "
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative  w-10 m-2 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm "
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 block-w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
            {" "}
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center animate-pulse text-white justify-center">
              3
            </div>
          </div>

          <MenuIcon className="h-6 md:hidden cursor-pointer " />
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            className="h-10 w-10 rounded-full cursor-pointer hover:scale-125"
            alt=" profile pic"
            src="https://avatars.githubusercontent.com/u/75438046?s=400&u=4ad31515204e1d0d63e7940b107a25b85382a77c&v=4"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
