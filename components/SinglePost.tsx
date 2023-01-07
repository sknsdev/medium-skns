import Image from "next/image";
import React from "react";
import { Post } from "./../types/Post.d";
import { urlFor } from "./../sanity";
import Link from "next/link";

export default function SinglePost(props: Post) {
  return (
    <>
      <Link
        href={`/posts/${props.slug.current}`}
        className=" hover:border-slate-500 block flex-col max-w-xs border-2 rounded-md border-slate-300 overflow-hidden transition-all"
        key={props?._id}
      >
        {props.mainImage && (
          <Image
            src={urlFor(props.mainImage).url()}
            alt="s"
            width={350}
            height={350}
            
          />
        )}

        <div className="flex flex-row justify-between items-center py-2 px-1">
          <div className="flex flex-col gap-1 align-baseline">
            <p>{props.title}</p>
            <p>{props.description}</p>
          </div>
          <div className="">
            <Image
              src={urlFor(props.author.image).url()!}
              alt={props.author.name}
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
