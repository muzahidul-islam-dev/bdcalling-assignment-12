import React from 'react'
import Experties from './../assets/expertise.png'
import AboutMe from './../assets/about-me.png'
import SocialIcon from './../assets/social-icon.png'
import Project from './../assets/project.png'
import StartImage from './../assets/start.png'
import Profile from './../assets/profile.png'
import Banner from './../assets/banner.png'
function Home() {
    return (
        <div>
            <header className="bg-[#f5fcff] pt-64 pb-48 px-5 md:px-20" id="home">
                <div
                    className="max-w-7xl mx-auto grid text-center xl:text-left gap-20 xl:flex xl:items-center justify-center xl:justify-between">
                    <div className="lg:max-w-2xl">
                        <p className="text-[#282938] font-semibold text-center xl:text-left text-xl mb-8">Hey, I am John</p>
                        <h1 className="text-[#282938] text-center xl:text-left font-normal text-2xl sm:text-5xl leading-tight mb-8">
                            <span className="font-bold">I create </span>
                            <span className="font-bold text-[#5e3bee]">product design </span>
                            <span className="font-bold">and brand experience</span>
                        </h1>
                        <p className="text-[#1c1e53] sm:text-2xl mx-auto sm:leading-9 mb-12 max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                            tristique.
                        </p>
                        <button className="bg-[#5e3bee] text-white px-11 py-5 rounded hover:bg-[#5e3bee]/90 transition-colors"
                            type="button">
                            Get In Touch
                        </button>
                    </div>
                    <div className="shrink-0">
                        <img src={Banner} alt="John - Professional headshot" className="w-auto h-auto lg:max-w-2xl" />
                    </div>
                </div>
            </header>
            <section className="py-36 px-5 md:px-20" id="skills">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl mb-28">
                        <p className="text-[#282938] font-semibold text-xl mb-5">My Skills</p>
                        <h2 className="text-[#282938] font-bold text-4xl md:text-6xl leading-tight" id="skills-[#282938]">My Expertise</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11">
                        <div className="bg-[#f5fcff] p-5 rounded-3xl border-b-4 border-[#5e3bee]">
                            <div className="bg-white p-3 rounded-3xl shadow-sm inline-block mb-8">
                                <img src={Experties} alt="" className="w-14 h-14" />
                            </div>
                            <h3 className="text-[#282938] font-bold text-[25px] mb-5">Strategy & Direction</h3>
                            <p className="text-[#1c1e53] text-lg leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique.
                            </p>
                        </div>
                        <div className="bg-[#f5fcff] p-5 rounded-3xl border-b-4 border-[#5e3bee]">
                            <div className="bg-white p-3 rounded-3xl shadow-sm inline-block mb-8">
                                <img src={Experties} alt="" className="w-14 h-14" />
                            </div>
                            <h3 className="text-[#282938] font-bold text-[25px] mb-5">Strategy & Direction</h3>
                            <p className="text-[#1c1e53] text-lg leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique.
                            </p>
                        </div>
                        <div className="bg-[#f5fcff] p-5 rounded-3xl border-b-4 border-[#5e3bee]">
                            <div className="bg-white p-3 rounded-3xl shadow-sm inline-block mb-8">
                                <img src={Experties} alt="" className="w-14 h-14" />
                            </div>
                            <h3 className="text-[#282938] font-bold text-[25px] mb-5">Strategy & Direction</h3>
                            <p className="text-[#1c1e53] text-lg leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique.
                            </p>
                        </div>
                        <div className="bg-[#f5fcff] p-5 rounded-3xl border-b-4 border-[#5e3bee]">
                            <div className="bg-white p-3 rounded-3xl shadow-sm inline-block mb-8">
                                <img src={Experties} alt="" className="w-14 h-14" />
                            </div>
                            <h3 className="text-[#282938] font-bold text-[25px] mb-5">Strategy & Direction</h3>
                            <p className="text-[#1c1e53] text-lg leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique.
                            </p>
                        </div>


                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-32  px-5 md:px-20" id="about">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-28">
                    <img src={AboutMe} alt="John - About me portrait" className="flex-shrink-0" />
                    <div className="max-w-3xl">
                        <p className="text-[#282938] font-semibold text-xl mb-3">About</p>
                        <h2 className="text-[#282938] font-bold text-3xl sm:text-5xl mb-8" id="about-[#282938]">About Me</h2>
                        <p className="text-[#1c1e53] sm:text-xl md:leading-9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet
                            augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
                            adipiscing velit non nulla in amet pellentesque.<br /><br />Sit turpis pretium eget maecenas. Vestibulum
                            dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-28  px-5 md:px-20" id="portfolio">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-start mb-20">
                        <div className="max-w-4xl">
                            <p className="text-[#282938] font-semibold text-base mb-5">Recent Projects</p>
                            <h2 className="text-[#282938] font-bold text-3xl md:text-5xl" id="portfolio-[#282938]">My Portfolio</h2>
                        </div>
                        <a href="#"
                            className="bg-pink-500 text-white px-5 py-3 rounded-3xl flex items-center gap-4 shadow-sm hover:bg-pink-600 transition-colors"
                        >
                            <img src={SocialIcon} alt="Dribbble icon" className="w-5 h-5 sm:w-8 sm:h-8" />
                            <span className="font-normal text-base">Visit My Dribbble</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={Project} alt="Ahuse project preview"
                                className="w-full h-96 object-cover rounded-t-lg" />
                            <div className="p-8">
                                <h3 className="text-[#282938] font-bold text-2xl mb-8">Ahuse</h3>
                                <p className="text-[#1c1e53] text-base leading-6 mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                                <div className="border-b border-[#5e3bee] pb-3">
                                    <a href="#"
                                        className="flex items-center gap-4 text-black font-semibold text-sm hover:text-[#5e3bee] transition-colors"
                                    >
                                        <span>View In Dribbble</span>
                                        <img src="./assets/arrow.svg" alt="" className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={Project} alt="Ahuse project preview"
                                className="w-full h-96 object-cover rounded-t-lg" />
                            <div className="p-8">
                                <h3 className="text-[#282938] font-bold text-2xl mb-8">Ahuse</h3>
                                <p className="text-[#1c1e53] text-base leading-6 mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                                <div className="border-b border-[#5e3bee] pb-3">
                                    <a href="#"
                                        className="flex items-center gap-4 text-black font-semibold text-sm hover:text-[#5e3bee] transition-colors"
                                    >
                                        <span>View In Dribbble</span>
                                        <img src="./assets/arrow.svg" alt="" className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={Project} alt="Ahuse project preview"
                                className="w-full h-96 object-cover rounded-t-lg" />
                            <div className="p-8">
                                <h3 className="text-[#282938] font-bold text-2xl mb-8">Ahuse</h3>
                                <p className="text-[#1c1e53] text-base leading-6 mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                                <div className="border-b border-[#5e3bee] pb-3">
                                    <a href="#"
                                        className="flex items-center gap-4 text-black font-semibold text-sm hover:text-[#5e3bee] transition-colors"
                                    >
                                        <span>View In Dribbble</span>
                                        <img src="./assets/arrow.svg" alt="" className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#f5fcff] py-36  px-5 md:px-20" id="testimonials">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-28">
                        <p className="text-[#282938] font-semibold text-base mb-5 max-w-3xl">Clients
                            Feedback</p>
                        <h2 className="text-[#282938] font-bold text-5xl max-w-3xl" id="testimonials-[#282938]">Customer testimonials
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
                        <div className="bg-white p-11 rounded-lg border border-teal-600">
                            <div className="mb-11">
                                <img src={StartImage} alt="5 stars" />
                            </div>
                            <blockquote className="text-[#1c1e53] text-base leading-6 mb-11">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra.
                            </blockquote>
                            <div className="flex items-center gap-5">
                                <img src={Profile} alt="Dianne Russell" className="w-19 h-19 rounded-full object-cover" />
                                <div>
                                    <cite className="text-[#282938] font-semibold text-base not-italic">Dianne Russell</cite>
                                    <p className="text-[#1c1e53] text-base">Starbucks</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-11 rounded-lg border border-teal-600">
                            <div className="mb-11">
                                <img src={StartImage} alt="5 stars" />
                            </div>
                            <blockquote className="text-[#1c1e53] text-base leading-6 mb-11">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra.
                            </blockquote>
                            <div className="flex items-center gap-5">
                                <img src={Profile} alt="Dianne Russell" className="w-19 h-19 rounded-full object-cover" />
                                <div>
                                    <cite className="text-[#282938] font-semibold text-base not-italic">Dianne Russell</cite>
                                    <p className="text-[#1c1e53] text-base">Starbucks</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-11 rounded-lg border border-teal-600">
                            <div className="mb-11">
                                <img src={StartImage} alt="5 stars" />
                            </div>
                            <blockquote className="text-[#1c1e53] text-base leading-6 mb-11">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra.
                            </blockquote>
                            <div className="flex items-center gap-5">
                                <img src={Profile} alt="Dianne Russell" className="w-19 h-19 rounded-full object-cover" />
                                <div>
                                    <cite className="text-[#282938] font-semibold text-base not-italic">Dianne Russell</cite>
                                    <p className="text-[#1c1e53] text-base">Starbucks</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-36  px-5 md:px-20" id="contact">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#282938] font-semibold text-base mb-5">Get In Touch</p>
                        <h2 className="text-[#282938] font-bold text-5xl mb-8" id="contact-[#282938]">Contact me</h2>
                        <p className="text-[#1c1e53] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <form className="max-w-4xl mx-auto space-y-8" novalidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label for="firstName" className="block text-[#282938] font-normal text-base">First name</label>
                                <input
                                    className="w-full h-16 px-4 bg-white border border-[#5e3bee] rounded-lg text-[#282938] text-base placeholder-[#282938] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="firstName" name="firstName" placeholder="First name" type="text" required aria-required="true" />
                            </div>
                            <div className="space-y-3">
                                <label for="lastName" className="block text-[#282938] font-normal text-base">Last name</label>
                                <input
                                    className="w-full h-16 px-4 bg-white border border-[#5e3bee] rounded-lg text-[#282938] text-base placeholder-[#282938] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="lastName" name="lastName" placeholder="Last name" type="text" required aria-required="true" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label for="email" className="block text-[#282938] font-normal text-base">Email</label>
                                <input
                                    className="w-full h-16 px-4 bg-white border border-[#5e3bee] rounded-lg text-[#282938] text-base placeholder-[#282938] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="email" name="email" placeholder="Email" type="email" required aria-required="true" />
                            </div>
                            <div className="space-y-3">
                                <label for="phone" className="block text-[#282938] font-normal text-base">Phone number</label>
                                <input
                                    className="w-full h-16 px-4 bg-white border border-[#5e3bee] rounded-lg text-[#282938] text-base placeholder-[#282938] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="phone" name="phone" placeholder="Phone number" type="tel" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label for="topic" className="block text-[#282938] font-normal text-base">Choose a topic</label>
                            <select
                                className="w-full h-16 px-4 bg-white border border-[#5e3bee] rounded-lg text-[#282938] text-base focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-no-repeat bg-right bg-[length:16px_16px]"
                                id="topic" name="topic" required aria-required="true">
                                <option value="" disabled selected>Select one...</option>
                                <option value="general">General Inquiry</option>
                                <option value="project">Project Discussion</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label for="message" className="block text-[#282938] font-normal text-base">Message</label>
                            <textarea
                                className="w-full min-h-60 p-4 bg-white border border-[#5e3bee] rounded-lg text-[#505050] text-base placeholder-[#505050] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                                id="message" name="message" placeholder="Type your message..." rows="8" required
                                aria-required="true"></textarea>
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="terms" name="terms"
                                className="w-5 h-5 bg-white border border-[#282938] rounded appearance-none checked:bg-[#5e3bee] checked:border-[#5e3bee] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                style={{ backgroundImage: `url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'white\' d=\'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z\'/%3e%3c/svg%3e')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                required aria-required="true" />
                            <label for="terms" className="text-[#282938] font-normal text-sm">I accept the terms</label>
                        </div>

                        <div className="text-center">
                            <button className="bg-[#5e3bee] text-white px-11 py-5 rounded-lg hover:bg-[#5e3bee]/90 transition-colors"
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Home
