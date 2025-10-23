"use client";

import { LogoCloudAnimated } from "./components/logoanimated";

import { InteractiveHoverButton } from "./components/interactive-hover"
import { TextAnimate } from "../app/components/text-animate"

import { SmoothCursor } from "./components/smooth-cursor"

import { Footer } from "../app/components/footer";
import { StatsCards } from "../app/components/stats";
import { Header } from "@/app/components/header";
import { useState } from "react";
import ExpandableCards, { type Card } from "../app/components/ExpandableCards";
 const demoCards: Card[] = [
    {
      id: 1,
      title: "AI Development Services",
      image:
        "/aidev.png",
      content:
        "Help businesses define AI adoption strategies and roadmap aligned with their goals.",
      author: {
        name:  "Amrutha",
        role: "CEO & Founder",
        image: "/aidev.png"
      },
    },
    {
      id: 2,
      title: "AI Integration & Automation",
      image:
        "/aiinte.png",
      content:
        "Integrate AI agents to automate repetitive business workflows and improve operational efficiency.",
      author: {
        name:  "Sarah Chen",
        role:  "Head of Design",
        image: "/aiinte.png"
      },
    },
    {
      id: 3,
      title: "AI Consulting & Research",
      image:
        "/airesearch.png",
      content:
        "AI models tailored to specific business needs, such as recommendation systems, fraud detection, or predictive analytics.",
      author: {
        name: "Marcus Johnson",
        role: "Lead Developer",
        image: "/airesearch.png",
      },
    },
    {
      id: 4,
      title: "Emerging AI Technologies",
      image:
        "/eco.png",
      content:
        "Build solutions with generative models for content creation, design, code generation, and more.",
      author: {
        name:  "Emily Rodriguez",
        role:  "Product Manager",
        image: "/eco.png"
      },
    },
  ]

export default function Page() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
    <SmoothCursor />
      <Header />

      <div className="relative w-full" style={{ height: "90vh" }}>
        <video
          src="/homevideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full"
          style={{ height: "75vh", objectFit: "cover" }}
        />
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-start items-center text-white p-4 pt-8">
          <div className="max-w-3xl mx-auto my-20 px-4 text-center">
            <h3 className="text-gray-500 text-xl">Innovating Today, Impacting Tomorrow</h3>
            <h1 className="text-6xl font-bold mb-4 relative inline-block">
              <TextAnimate animation="slideLeft" by="word">Building the Future with AI</TextAnimate> 
              
            </h1>
            <h2 className="text-2xl mb-4">
           <TextAnimate animation="blurInUp" by="character" duration={5}>We design and develop cutting-edge AI solutions and intelligent agents that power
              real-world transformation. From startups to enterprises, we help you move faster,
              smarter, and with purpose.</TextAnimate>   
            </h2>
<InteractiveHoverButton>Schedule Call</InteractiveHoverButton>
          </div>
        </div>
        
      </div>

      <LogoCloudAnimated />

      {/* Expandable Cards Below Video */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our Services</h2>
       
        <ExpandableCards
             cards={demoCards}
             selectedCard={selected}
             onSelect={setSelected}
           />
      </section>
       <StatsCards />

  <section className="flex justify-center py-20 px-6 bg-gray-100 dark:bg-gray-900">
  <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12 text-center">
    <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
      Ready to transform your business?
    </h2>

    <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
      Partner with us to build innovative AI solutions that drive growth and success.
    </p>

    {/* Floating Buttons */}
    <div className="flex justify-center gap-8 absolute left-1/2 -bottom-10 transform -translate-x-1/2">
      <a
        href="https://labfox.studio/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition font-semibold"
      >
        Contact Us
      </a>
      <a
        href="https://calendly.com/founders-labfox/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-900 dark:hover:bg-gray-800 transition font-semibold"
      >
        Schedule Call
      </a>
    </div>
  </div>
</section>
      <Footer/>
    </>
  );
}
