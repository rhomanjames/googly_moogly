import Head from 'next/head'
import Image from 'next/image'
import Avatar from "../components/Avatar"
import Footer from "../Footer"
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"
import { useRef } from "react";
import { useRouter } from "next/router"

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter()

  const Search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);

  }
  return (
    <div>
      <Head>
        <title>SafeSrch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}

      <header className="flex w-full justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center p-4 ml-2">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center p-2">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 transition rounded-full hover:bg-gray-100 text-gray-500 p-2" />
        
        {/* Avatar */}
          <Avatar url="https://boutiquephotographer.com/wp-content/uploads/2015/04/WORK_Headshot-Square.001_WEB.jpg"/>
        </div>
      </header>

      {/* Body */}
      <div className="h-96">
        <form className="flex flex-col mt-24 items-center flex-grow h-full">
          <Image 
            src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" 
            height={95} 
            width={284}
            alt="logo"
          />
        <div className="flex w-full max-w-md mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 p-3 items-center sm:max-w-md lg:max-w-xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input ref={searchInputRef} type="text" className=" flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5 text-blue-500 ml-4" />
        </div>

        <div className="mt-7 flex flex-col space-y-2 justify-center sm:flex-row sm:space-y-0 sm:space-x-4 items-center">
          <button onClick={Search} className="btn">Google Search</button>
          <button onClick={Search} className="btn">Surprise Me</button>
        </div>
        </form>
      </div>

      {/* Footer */} 
      <Footer />     
    </div>
  )
}
