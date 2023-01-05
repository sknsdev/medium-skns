import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="md:px-6 flex justify-between w-full py-2 px-1 mx-auto ">
        <div className="flex flex-row gap-4 items-center">
          <Link href="/">
            <Image
              className="md:scale-100 scale-90 w-44 object-contain cursor-pointer"
              src="/Medium_logo.png"
              alt="logo"
              width={150}
              height={25}
            />
          </Link>
          <div className="hidden md:flex flex-row items-center space-x-5">
            <h3 className="hover:opacity-75">
              <Link href="/about">О нас</Link>
            </h3>
            <h3 className="hover:opacity-75">
              <Link href="/contact">Связаться</Link>
            </h3>
            <h3 className="px-3 py-1 rounded-xl bg-blue-600 text-white hover:opacity-75">
              <Link href="/follow">Следить за нами</Link>
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5 text-blue-500 flex-nowrap ">
          <h3>
            <Link href="/">Войти</Link>
          </h3>
          <h3 className="flex border-[1px] border-blue-500 rounded-md py-1 px-2 cursor-pointer">
            <Link href="/">Зарегистрироваться</Link>
          </h3>
        </div>
      </header>
    </>
  );
}

export default Header;
