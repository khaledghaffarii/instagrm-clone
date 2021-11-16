import Image from "next/image";
function Header() {
  return (
    <div>
      <div className=" flex  justify-between py-6 max-w-6xl ">
        {" "}
        <div className="relative h-24 w-24 hidden lg:inline-grid cursor-pointer ">
          {" "}
          <Image
            src="https://links.papareact.com/ocw "
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-10 w-10  lg:hidden flex-shrink-0 cursor-pointer">
          {" "}
          <Image
            src="https://links.papareact.com/jjm "
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
