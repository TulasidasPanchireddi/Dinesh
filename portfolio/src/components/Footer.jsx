import React from 'react'
import { CiMail } from "react-icons/ci"
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-2 p-6  bg-red-400 ">
      <div className="flex justify-around text-white">
        <p className="flex items-center gap-2"> <CiMail className="text-xl" /> panchireddi01@gmail.com</p>
        <p className="flex items-center gap-2"><FaPhoneAlt /> +91 7093193866</p>
        <p className="flex items-center gap-2"><FaMapMarkerAlt /> Srikakulam, AP</p>
        <p className="flex items-center gap-2"><FaGithub /><a  href="https://github.com/TulasidasPanchireddi"> github.com/TulasiDas</a></p>

        <p className="flex items-center gap-2"><FaLinkedin /><a className="foot-a" href="https:/www.linkedin.com/in/panchireddi-tulasidas-2546a0270/">
            linkedin.com/in/tulasi-das</a></p>

      </div>
    </footer>
  )
}

export default Footer
