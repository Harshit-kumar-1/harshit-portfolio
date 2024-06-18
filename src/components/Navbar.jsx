import logo from "../assets/assets/harshitKumarLogo.png"

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return <nav className='mb-5 lg:mb-10 flex items-center justify-between py-3'>
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16" src={logo} alt="Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/harshit-kumar-me" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/Harshit-kumar-1" target="_blank"><FaGithub /></a>
            <a href="https://wa.me/+919405599743" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/mr.harshit.malviya?igsh=eGp1YmI0ZjVwenRu" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

    </nav>
}

export default Navbar
