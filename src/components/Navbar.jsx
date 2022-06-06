import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import MyLogo from '../assets/Extras/Mylogo.png'
import { Link } from "react-scroll";
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
            <div className='relative w-[100px] '>
                <img className='w-[110px]' src={MyLogo} alt="" />
                <div>
                    <div className=' border-t-[50px] border-r-[50px] border-solid border-r-transparent border-t-white h-[50px] w-[50px] bottom-[-50px] left-[0px] absolute '></div>
                    <div className=' border-t-[50px] border-l-[50px] border-solid border-l-transparent border-t-white h-[50px] w-[50px] bottom-[-50px] right-[0px] absolute'></div>
                </div>
            </div>

            <ul className='hidden md:flex'>
                <li className='p-4'>

                    <Link
                        activeClass="active"
                        to="me"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        01. &nbsp;
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 hover:before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-white">ME</span>
                        </span></Link>
                </li>
                <li className='p-4'>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        02. &nbsp;
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 hover:before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-white">SKILLS</span>
                        </span>
                    </Link>
                </li>
                <li className='p-4'>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        03. &nbsp;
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 hover:before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-white">Projects</span>
                        </span>
                    </Link>
                </li>
                <li className='p-4'>
                    <Link
                        activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        04. &nbsp;
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-0 hover:before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-white">CONTACT</span>
                        </span>
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:fixed md:left-[-100%]' : 'fixed left-[-100%]'}>
                <div className='relative w-full bg-white '>
                </div>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-b-gray-600' >
                        <div className=' transition-width delay-100 duration-500 w-[40px] hover:w-full bg-[#00df9a]'>
                            <div className=' transition-width delay-200 duration-500 w-[40px] hover:w-full bg-blue-500'>
                                <button className=' transition-width delay-300 duration-500 w-[40px] hover:w-full hover:bg-pink-400 bg-pink-500  py-2 px-2 text-left '>
                                    <span className=" text-white">
                                        <Link
                                            activeClass="active"
                                            to="me"
                                            spy={true}
                                            smooth={true}
                                            duration={500} onClick={handleNav}
                                        >ME</Link></span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='p-4 border-b border-b-gray-600' >
                        <div className=' transition-width delay-100 duration-500 w-[65px] hover:w-full bg-[#00df9a]'>
                            <div className=' transition-width delay-200 duration-500 w-[65px] hover:w-full bg-blue-500'>
                                <button className=' transition-width delay-300 duration-500 w-[65px] hover:w-full hover:bg-pink-400 bg-pink-500  py-2 px-2 text-left '>
                                    <span className=" text-white">
                                        <Link
                                            activeClass="active"
                                            to="skills"
                                            spy={true}
                                            smooth={true}
                                            duration={500} onClick={handleNav}
                                        >SKILLS</Link></span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='p-4 border-b border-b-gray-600' >
                        <div className=' transition-width delay-100 duration-500 w-[70px] hover:w-full bg-[#00df9a]'>
                            <div className=' transition-width delay-200 duration-500 w-[70px] hover:w-full bg-blue-500'>
                                <button className=' transition-width delay-300 duration-500 w-[70px] hover:w-full hover:bg-pink-400 bg-pink-500  py-2 px-2 text-left '>
                                    <span className=" text-white">
                                        <Link
                                            activeClass="active"
                                            to="projects"
                                            spy={true}
                                            smooth={true}
                                            duration={500} onClick={handleNav}
                                        >Projects</Link>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='p-4'>
                        <div className=' transition-width delay-100 duration-500 w-[90px] hover:w-full bg-[#00df9a]'>
                            <div className=' transition-width delay-200 duration-500 w-[90px] hover:w-full bg-blue-500'>
                                <button className=' transition-width delay-300 duration-500 w-[90px] hover:w-full hover:bg-pink-400 bg-pink-500  py-2 px-2 text-left '>
                                    <span className=" text-white">
                                        <Link
                                            activeClass="active"
                                            to="contacts"
                                            spy={true}
                                            smooth={true}
                                            duration={500} onClick={handleNav}
                                        >Contact</Link>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
