import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-[800px] min-h-[88vh] mx-auto font-mono flex p-4 ">
        <motion.div
          className="h-[80vh] place-content-center flex flex-col"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
        >
          <div>
            <h1 className="text-[4rem]  my-auto font-black">
              Prevent.
              <br /> Evolve. <span className="text-yellow-300 ">Secure.</span>
            </h1>
            <p className="text-[1.3rem] md:my-10 my-8 opacity-70">
              Korok is a security collective built around highly
              <br /> collaborative and informative exploit disclosure.
            </p>
            <Link href="/about">
              <a className="mr-5 duration-300 underline underline-offset-4 tracking-wide hover:text-yellow-300">
                Get In Contact
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
