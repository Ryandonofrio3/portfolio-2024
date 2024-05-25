import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/Ryandonofrio3" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400" />
          </Link>
          <Link href="www.linkedin.com/in/ryan-s-donofrio" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400" />
          </Link>
          <Link href="https://twitter.com/rsdgpt" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 Ryan D'Onofrio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
