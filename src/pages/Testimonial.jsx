import React from 'react'
import StartImage from './../assets/start.png'
import Profile from './../assets/profile.png'
function Testimonial() {
    return (
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
    )
}

export default Testimonial
