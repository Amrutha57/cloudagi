"use client";

//import { ThemeTogglerButton } from "animate-ui";
import { AnimatedThemeToggler } from "../context/themetoggle"
import { InteractiveHoverButton } from "./components/interactive-hover"
import { TextAnimate } from "../app/components/text-animate"

import { SmoothCursor } from "./components/smooth-cursor"
//import { ThemeTogglerButton } from "animate-ui/components/buttons/theme-toggler";
import { useTheme } from "../context/themecontext";
import { Footer } from "../app/components/footer";
import { Header } from "@/app/components/header";
import { useState } from "react";
import ExpandableCards, { type Card } from "../app/components/ExpandableCards";

const demoCards: Card[] = [
  {
    id: 1,
    title: "web development",
    image:
      "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/summer-opening.webp",
    content:
      "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
    author: {
      name: "Eduardo Calvo",
      role: "CEO & Founder",
      image: ""
    },
  },
  {
    id: 2,
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/fashion.webp",
    content:
      "Explore the latest trends in fashion at our exclusive showcase, featuring renowned designers and unique styles.",
    author: {
      name: "Sarah Chen",
      role: "Head of Design",
      image: ""
    },
  },
  {
    id: 3,
    title: "Gallery Art",
    image:
      "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210809/smoothui/galleryart.webp",
    content:
      "Immerse yourself in the world of art at our gallery, showcasing stunning pieces from emerging and established artists.",
    author: {
      name: "Marcus Johnson",
      role: "Lead Developer",
      image: "",
    },
  },
  {
    id: 4,
    title: "Dreams",
    image:
      "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210809/smoothui/dreams.webp",
    content:
      "Join us on a journey through dreams, exploring the subconscious and the art of dreaming.",
    author: {
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: ""
    },
  },
];

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

      {/* Expandable Cards Below Video */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our Services</h2>
       
        <ExpandableCards
             cards={demoCards}
             selectedCard={selected}
             onSelect={setSelected}
           />
      </section>

      <Footer/>
    </>
  );
}
