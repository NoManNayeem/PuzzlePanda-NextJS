import React from "react";
import Link from "next/link";
import Header from "../homepageComponents/header";
import Footer from "../homepageComponents/footer";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import Image from "next/image";
import profileImage from '../../../public/ProfilePhoto.jpg';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="font-sans text-gray-800 p-4">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8">Tech Maestro</h2>
          <div className="relative w-96 h-96  rounded-full overflow-hidden shadow-lg mb-8 hover:scale-105 transition-all duration-500 cursor-pointer">
            
          <Link href="https://www.linkedin.com/in/nayeemislam60053" className="bg-white" target="_blank" rel="noopener noreferrer">
            <Image
              src={profileImage}
              alt="Picture of the Engineer"
              layout="fit"
              style={{ objectFit: 'cover' }} 
            />
            </Link>
          </div>
          <div className="text-center bg-gray-50 text-gray-800 px-8 py-8 w-full rounded-lg">
            <h1 className="text-4xl font-extrabold mb-4">Nayeem Islam</h1>
            <p className="text-lg text-gray-500 mb-4">
              Project Lead || Software Engineer || Generative AI Expert
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/NoManNayeem/" className="inline-flex items-center px-6 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" />
                  GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/nayeemislam60053" className="inline-flex items-center px-6 py-3 rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2" />
                  LinkedIn
              </Link>
              <Link href="https://medium.com/@nomannayeem"className="inline-flex items-center px-6 py-3 rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" target="_blank" rel="noopener noreferrer">
                  <FaMediumM className="mr-2" />
                  Medium
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;