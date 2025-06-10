"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"

const ContactSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        if (!e.target.email.value || !e.target.subject.value || !e.target.message.value) {
        setError("All fields are required");
        setIsSubmitting(false);
        return;
        }   

        try {
            const data = {
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value.replace(/\n/g, "<br>"),
            };

            const JSONdata = JSON.stringify(data)
            const endpoint = "/api/send"

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSONdata,
            };

            const response = await fetch(endpoint, options)
            const resData = await response.json()

            if (response.status === 200) {
                setEmailSubmitted(true)
                e.target.reset();
            } else {
                console.error("Failed to send email:", resData.message)
                setError(resData.message || "Failed to send email. Please try again.")
            }
        } catch (error) {
            console.error("Network error:", error)
            setError("Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNewEmail = () => {
        setEmailSubmitted(false)
        setError("")
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 lg:pt-20 px-4 xl:px-16 py-4 pb-20 gap-4 relative"
        >
            <div>
                <h5 className="text-xl font-bold text-[#FF4365] my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] text-base mb-4 max-w-md">
                    I&apos;m always down to chat about anything under the sun.
                    Reach out to me via this contact form or directly through
                    julesrobins.2021@scis.smu.edu.sg or LinkedIn!
                </p>
                <div className="socials flex flex-row gap-2 lg:pb-24">
                    <Link href="https://github.com/robinsjules">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/robinsjules/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center h-full">
                    {emailSubmitted ? (
                        <>
                            <p className="text-green-500 text-sm mt-2 mb-4">
                                Message Sent Successfully!
                            </p>
                            <button
                                onClick={handleNewEmail}
                                className="bg-[#FF4365] hover:bg-white text-[#051014] font-medium py-2.5 px-5 rounded-lg transition-colors"
                            >
                                Send New Message
                            </button>
                        </>
                    ) : (
                        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                            {error && (
                                <div className="mb-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg">
                                    <p className="text-red-400 text-sm">{error}</p>
                                </div>
                            )}
                            
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Your Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    disabled={isSubmitting}
                                    className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    disabled={isSubmitting}
                                    className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    disabled={isSubmitting}
                                    rows="4"
                                    className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 resize-vertical"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#FF4365] hover:bg-white text-[#051014] font-medium py-2.5 px-5 rounded-lg w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ContactSection