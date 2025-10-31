"use client";
import { TextAnimate } from "../components/text-animate";
import Image from "next/image";
import { Footer } from "../components/footer";
import { Header } from "@/app/components/header";
import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaClock, FaArrowRight, FaSearch } from "react-icons/fa";
//import VibeCodingBlog from "../bloglinks/page"

// Card data array declared outside the component
const cardData = [
  {
    id: 1,
    image: "/aidev.png",
    title: "Card Title 1",
    description: "Short summary goes here for card 1.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/bloglinks",
  },
  {
    id: 2,
    image: "/aiinte.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
  // Add all 16 card objects here similarly...
   {
    id: 3,
    image: "/airesearch.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 4,
    image: "/eco.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
];

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "what-is", label: "What Is Vibe Coding?" },
  { id: "when-to-vibe", label: "When to Vibe Code" },
  { id: "when-not-to-vibe", label: "When Not to Vibe Code" },
  { id: "real-risks", label: "Real-World Risks" },
  { id: "tips", label: "Tips for Responsible Vibe Coding" },
  { id: "conclusion", label: "Conclusion" },
];

const VibeCodingBlog = () => {
  // Optional: highlight active section logic can be added

  return (
    <>
      <Header />


      <div className="max-w-4xl mx-auto my-16 px-6 text-center ">
        <h2 className="text-4xl font-semibold mb-6">
      <TextAnimate animation="slideLeft" by="character" as="span">
Vibe Coding Isn’t Magic—Here’s How to Make  It  Work for You
      </TextAnimate>
    </h2>
      </div >
      <div className="max-w-8xl mx-auto my-24 px-8 flex gap-18">
        {/* Sidebar */}
        <nav className="hidden md:block w-1/4 sticky top-30 self-start bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-14 font-bold mb-6">Contents</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <article className="w-full md:w-3/4 prose prose-indigo dark:prose-invert">
         

          <section id="intro">
              <h3  className="text-3xl font-semibold mb-6">Intro</h3>
            <p className="text-2xl mb-6">
              The term vibe coding originated as a playful remark from AI expert
              Andrej Karpathy, describing the state of fully trusting the flow—
              letting AI autocomplete wherever possible, and almost forgetting
              there’s actual code behind the scenes. It’s that feeling when
              programming seems effortless, guided by intuition and smart
              automation.
              <br />
              <br />
              However, relying too much on this vibe can be misleading. Many
              developers have embraced autocomplete or AI suggestions without
              fully grasping the underlying code or architecture, hoping
              everything will just work. But vibe coding is not about bypassing
              software craftsmanship or skipping core principles.
              <br />
              <br />
              At CloudAGI, where we specialize in building AI agents and crafting
              AI projects for clients, we’ve observed that vibe coding is a
              powerful accelerator—if used wisely. Overdependence without solid
              knowledge leads to fragile, insecure, or hard-to-maintain
              solutions.
            </p>
            <Image
              src="/vibecoding.webp"
              alt="Vibe coding illustration"
              width={700}
              height={400}
              className="mb-6 rounded-lg object-cover"
              priority={false}
            />
          </section>

          {/* Add other sections with matching id for anchor navigation */}
          <section id="what-is">
             <h3  className="text-3xl font-semibold mb-6">What Is Vibe Coding?</h3>
           
            <p className="text-2xl mb-6">
             Vibe coding, popularized by Andrej Karpathy, is a new way of developing software where developers guide AI assistants through natural language prompts to generate and refine code. It’s about focusing on the app’s goals and letting AI handle the repetitive coding details.
             <br></br> <br></br>
             Karpathy described it as “fully giving in to the vibes, embracing exponentials, and forgetting that the code even exists.” At CloudAGI, we view vibe coding as a powerful tool for quick prototyping and building simple apps, but one that still requires a solid understanding of software fundamentals to avoid fragile or insecure solutions.
             <br></br> <br></br>
             In essence, vibe coding transforms programming into a creative collaboration with AI, rather than replacing the need for skilled development.



            </p>
            
<video
  width={700}
  height={400}
  controls
  className="mb-6 rounded-lg object-cover"
>
  <source src="/vibe.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
          </section>

          <section id="when-to-vibe">
            <h3 className="text-3xl font-semibold mb-6">When to Vibe Code</h3>
            <p className="text-2xl mb-6">Vibe coding works best when the risks are low, and speed is more important than perfection. Ideal scenarios include:

Personal scripts and automation: Quick tasks like file organization or batch renaming.<br></br><br></br>

<b>Static websites:</b> Portfolio pages, simple blogs, and landing pages with predictable content.<br></br><br></br>

<b>Learning projects:</b> Tools like todo lists or calculators that help build skills.<br></br><br></br>

<b>Prototypes and MVPs: </b>Fast demos and proofs of concept meant to evolve over time.<br></br><br></br>

<b>Data visualization: </b>Simple charts and dashboards where aesthetics matter more than complex logic.<br></br><br></br>

<b>CLI and developer tools:</b> Utilities with limited scope and easy to test.</p>

          </section>

          <section id="when-not-to-vibe">
            <h3 className="text-3xl font-semibold mb-6">When Not to Vibe Code</h3>
            <p className="text-2xl mb-6">While vibe coding can speed up development in many cases, it’s important to avoid it in situations where correctness, security, and reliability are critical. Avoid vibe coding for:

Payment and financial systems: Handling sensitive transactions requires secure, tested code to prevent fraud and data breaches.

<br></br><br></br><b>Authentication and user management:</b> Login flows and password handling must be airtight, with proper encryption and session control.

<br></br><br></br><b>Real-time, concurrent applications:</b> Features like WebSockets and data synchronization require precise control to avoid race conditions and memory leaks.

  <iframe
  width="600"
  height="315"
  src="https://www.youtube.com/embed/-LFB8D9WV-g"
  title="Vibe Coding Explained"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  loading="lazy"
></iframe>
<br></br><br></br><b>Healthcare and regulatory applications:</b> Compliance with regulations like HIPAA demands thorough validation and secure coding.

<br></br><br></br><b>Production-grade APIs and services:</b> These need error handling, rate limiting, and caching strategies beyond quick AI-generated code.

<br></br><br></br><b>Multi-tenant SaaS platforms:</b> Data isolation and permissions must be managed properly to avoid cross-tenant data leaks.

<br></br><br></br>Using vibe coding in these areas risks your app’s integrity, security, and user trust. For mission-critical projects, solid architecture and experienced development are non-negotiable.</p>
          </section>

          <section id="real-risks">
            <h3 className="text-3xl font-semibold mb-6">Real-World Risks</h3>
            <p className="text-2xl mb-6">Vibe coding can be tempting, but it carries real risks if used carelessly. AI-generated code often lacks awareness of security, scalability, and maintainability:

<br></br><br></br><b>Security vulnerabilities: </b>Common issues include SQL injection flaws, storing passwords in plain text, and exposing sensitive data in local storage—problems that AI may introduce when coding without proper context.

<br></br><br></br><b>Fragile architecture: </b>Relying heavily on AI can create convoluted codebases with inconsistent patterns and hidden bugs, making debugging and scaling difficult.

<br></br><br></br><b>Performance problems:</b> Naively generated code may cause excessive API calls or resource-heavy operations, leading to slowdowns or crashes under load.

<br></br><br></br><b>Compliance failures: </b>In regulated industries like healthcare and finance, inadequate code risks legal consequences due to data breaches or non-compliance.

<br></br><br></br>At CloudAGI, we emphasize blending AI assistance with solid development practices to mitigate these risks and build secure, reliable AI-driven systems.</p>
          </section>
<section>
  <iframe
  width="600"
  height="315"
  src="https://www.youtube.com/embed/5kWLPYAL8f0"
  title="Vibe Coding Explained"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  loading="lazy"
></iframe>
</section>
          <section id="tips">
            <h3 className="text-3xl font-semibold mb-6">Tips for Responsible Vibe Coding</h3>
            <p className="text-2xl mb-6"> To harness the power of vibe coding while avoiding common pitfalls, follow these best practices:

<br></br><br></br><b>Break work into small, testable units: </b>Ask AI for focused tasks rather than entire applications to keep control and simplify debugging.

<br></br><br></br><b>Use popular and well-documented tech stacks:</b> AI models generate higher-quality code for widely adopted frameworks like React, TypeScript, and Node.js.

<br></br><br></br><b>Build reusable components early:</b> Maintain consistency and reduce duplication by defining common UI and logic components upfront.

<br></br><br></br><b>Write clear and specific prompts:</b> Detailed instructions help AI produce relevant, secure, and maintainable code.

<br></br><br></br><b>Validate and test AI-generated code thoroughly:</b> Always add input validation, error handling, and unit tests to catch issues early.

<br></br><br></br><b>Commit frequently: </b>Use version control to track changes and easily roll back if AI-generated code breaks your build.

<br></br><br></br><b>Document AI-assisted code: </b>Annotate generated code with context and known limitations to aid future maintenance.

<br></br><br></br>At CloudAGI, we integrate these principles to deliver robust AI projects that scale securely and reliably.</p>
          </section>

          <section id="conclusion">
            <h3 className="text-3xl font-semibold mb-6">Conclusion</h3>
            <p className="text-2xl mb-6">Vibe coding is transforming how we build software—accelerating development, reducing repetitive work, and democratizing access to creating applications. When used responsibly, it allows developers and non-developers alike to turn ideas into functioning products quickly with the help of AI.

<br></br><br></br>However, it’s crucial to remember that vibe coding is not a magic wand. Its success depends on knowing when and how to leverage AI tools, and—just as important—when to step back and apply traditional development rigor. Mindless prompting or overreliance can lead to insecure, fragile, and unscalable systems.

<br></br><br></br>At CloudAGI, we help turn the promise of vibe coding into practical, secure, and scalable solutions by blending AI assistance with solid engineering practices. With the right approach, you can harness AI to build faster without sacrificing quality or safety.

<br></br><br></br>Ready to innovate responsibly and build the future with AI? CloudAGI is here to guide you every step of the way.</p>
          </section>
        </article>
      </div>
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-6 text-center" >
      <TextAnimate animation="slideLeft" by="character" as="span">
For More posts
      </TextAnimate>
    </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           
          {cardData.map((card) => (
            <Card key={card.id} className="flex flex-col h-full">
              <CardHeader className="p-0 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white px-2 py-1 flex items-center text-xs rounded shadow">
                  <FaClock />
                  {card.read}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-4">
                <CardTitle className="text-lg mb-1">{card.title}</CardTitle>
                <CardDescription className="mb-2">{card.description}</CardDescription>
                <div className="text-xs text-gray-400 mt-auto mb-2">{card.date}</div>
              </CardContent>
              
 <CardFooter className="p-4 pt-0">
                <Link
                  href={card.link}
                  target={card.link.startsWith("http") ? "_blank" : "_self"}
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardFooter>

            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VibeCodingBlog;
