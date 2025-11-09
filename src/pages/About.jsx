import React from 'react'
import AboutMe from './../assets/about-me.png'
function About() {
    return (
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
    )
}

export default About
