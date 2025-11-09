import React from 'react'
import SocialIcon from './../assets/social-icon.png'
import Project from './../assets/project.png'
function Portfolio() {
    return (
        <section className="py-28 my-20 px-5 md:px-20" id="portfolio">
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
    )
}

export default Portfolio
