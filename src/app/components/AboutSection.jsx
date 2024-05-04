import React from 'react'

const AboutSection = () => {
  return (
    <section className="text-[#FFFFFC]">
        <div className="items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div>
                <h2 className="text-4xl font-bold mb-4">
                    About Me
                </h2>
                <p className="text-[#B7AD99] text-base lg:text-lg">
                    Deeply passionate about technology and its power to transform lives, I strive
                    to create, innovate, and improve products and services for the contemporary world. I am an incoming intern at InterSystems,
                    where I will apply my software engineering and communication skills to develop solutions for other companies.
               <br />
               <br />
                    Beyond the tech space, I am a foodie and avid traveler. Exploring the unknown has always felt natural to me, and I am always
                    up for a new adventure and good challenge.
                <br />
                <br />
                    Let's go on this journey of embracing uncertainty and creating a better world together!
               </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection