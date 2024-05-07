import React from "react";
import Link from "next/link";
import Header from "../homepageComponents/header";
import Footer from "../homepageComponents/footer";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import Image from "next/image";


const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="font-sans text-gray-800 p-4">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center">Tech Maestro</h2>
          <Image width={500}
      height={300} 
            src="https://media.licdn.com/dms/image/D5603AQESAGEJbJ0Qtg/profile-displayphoto-shrink_200_200/0/1706279532919?e=2147483647&v=beta&t=TIj9zW0WYaz7l9hgx3ZBr62hWho6EUa1yn3dtvQG4iI"
            className="rounded-full mt-4"
            alt="Team Member"
          />

          <div className="text-center bg-gray-50 text-gray-800 px-8 py-8 w-full rounded-lg">
            <h1 className="text-4xl font-extrabold">Nayeem Islam</h1>
            <p className="mt-4 text-sm text-gray-500 mb-2">
              Project Lead || Software Engineer || Generative AI Expert
            </p>
            <div className="github-data mt-4">
              {/* GitHub data will be fetched and displayed here */}
            </div>
            <Link href="https://github.com/NoManNayeem/" className="inline-flex items-center px-6 py-3 mt-6 rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 mx-2" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2" />
                Visit GitHub Profile
            </Link>
            <Link href="https://www.linkedin.com/in/nayeemislam60053" className="inline-flex items-center px-6 py-3 mt-2 rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 mx-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2" />
                Visit LinkedIn Profile
            </Link>
            <Link href="https://medium.com/@nomannayeem"className="inline-flex items-center px-6 py-3 mt-2 rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 mx-2" target="_blank" rel="noopener noreferrer">
                <FaMediumM className="mr-2" />
                Visit Medium Profile
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
