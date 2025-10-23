


"use client"
import { Footer } from "../components/footer";
import { TeamGrid } from "./teamgrid";
import { useState } from "react"
import { Header } from "@/app/components/header";
import { TextAnimate } from "../components/text-animate"
import ExpandableCards, {
  type Card,
} from "../components/ExpandableCards"
//import { getAllPeople, getAvatarUrl } from "@/app/doc/data/peopleData"

const ExpandableCardsDemo = () => {
  const [selected, setSelected] = useState<number | null>(null)
  //const people = getAllPeople()

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

  return (<>
   <>
  <Header />
  <div className="max-w-4xl mx-auto my-16 px-6 text-center">
    <h2 className="text-4xl font-semibold mb-6">
  <TextAnimate animation="slideLeft" by="character" as="span">
    Our Services
  </TextAnimate>
</h2>

<p className="text-2xl font-light leading-relaxed text-gray-700 max-w-3xl mx-auto">
  <TextAnimate animation="blurIn" as="span">
    We provide cutting-edge AI solutions and intelligent agents that automate processes,
    enhance decision-making, and drive innovation. From custom AI tools to full-scale
    integrations, our services help you stay ahead in a fast-changing world.
  </TextAnimate>
</p>

  </div>

  <div>
    <ExpandableCards
      cards={demoCards}
      selectedCard={selected}
      onSelect={setSelected}
    />
  </div>


   <TeamGrid />
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


   <Footer />
</>
</>
  )
}

export default ExpandableCardsDemo

