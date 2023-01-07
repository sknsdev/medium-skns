import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SinglePost from "../components/SinglePost";
import TextBanner from "../components/TextBanner";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "./../types/Post.d";

interface IHomeProps {
  posts: Post[];
}

const Home = ({ posts }: IHomeProps) => {
  console.log(posts);
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TextBanner />
      <div className="grid md:grid-cols-3 max-w-4xl justify-center align-middle gap-3 mt-4">
      {posts.map((item: Post) => (
        <SinglePost {...item} />
      ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `
  *[_type=="post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
      slug,
      description,
      mainImage
  }
  `;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
