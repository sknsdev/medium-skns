import Link from "next/link";
import React from "react";

function TextBanner() {
  return (
    <>
      <section className="flex flex-row justify-around min-h-[325px] max-w-7xl bg-blue-600 text-white py-2 px-3 md:max-w-9xl w-full mx-auto mt-4 items-center overflow-hidden border-y">
        <div className="flex flex-row md:max-w-[50%]">
          <div className="flex justify-center flex-col gap-4">
            <h1 className="text-4xl max-w-xl font-serif">
              Оставайтесь{" "}
              <span className="underline underline-offset-2">любопытными</span>.
            </h1>
            <h2 className="font-light text-xl">
              Откройте для себя истории, размышления <br />и опыт авторов на
              любую тему.
            </h2>
            <Link className="border flex rounded-full font-medium hover:contrast-150 hover:scale-[105%] transition-all bg-white text-blue-600 w-fit px-2 py-1" href="/read">Начните читать</Link>
          </div>
        </div>
        <div className="hidden md:flex flex-row h-32 justify-center items-center text-9xl">
          M
        </div>
      </section>
    </>
  );
}

export default TextBanner;
