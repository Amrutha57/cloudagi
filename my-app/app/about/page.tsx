"use client";

import { Header } from "@/app/components/header";
import { Footer } from "../components/footer";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900 min-h-screen py-16 px-6 flex flex-col items-center">
        {/* Main Heading and Mission Card */}
        <div className="max-w-4xl mx-auto my-16 px-6 text-center">
          <h1 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">
            Building the Future of AI & Tech Innovation
          </h1>

          <p className="text-2xl font-light leading-relaxed text-gray-900 dark:text-gray-300 max-w-3xl mx-auto">
            We are more than just a tech company; we are your partners in the journey toward innovation and digital transformation.
            Founded with a vision to bridge the gap between cutting-edge technology and real-world impact, our platform is designed
            to empower you to build, grow, and succeed in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* Our Core Values Section */}
        <section className="w-full bg-gray-100 dark:bg-gray-900 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">Our Core Values</h2>
          </div>

          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 px-6">
            {/* Card 1 - Innovation */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md border border-black dark:border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Innovation</h3>
              <ul className="text-gray-700 dark:text-gray-300 font-light space-y-2 text-left list-disc list-inside text-lg leading-relaxed">
                <li>Embracing emerging technologies to stay ahead of the curve</li>
                <li>Challenging conventional thinking with creative solutions</li>
                <li>Creating forward-thinking solutions that drive business growth</li>
              </ul>
            </div>

            {/* Card 2 - Excellence */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md border border-black dark:border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Excellence</h3>
              <ul className="text-gray-700 dark:text-gray-300 font-light space-y-2 text-left list-disc list-inside text-lg leading-relaxed">
                <li>Delivering exceptional quality in every project we undertake</li>
                <li>Maintaining meticulous attention to detail from concept to delivery</li>
                <li>Committing to continuous improvement and professional growth</li>
              </ul>
            </div>

            {/* Card 3 - Partnership */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md border border-gray-300 dark:border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Partnership</h3>
              <ul className="text-gray-700 dark:text-gray-300 font-light space-y-2 text-left list-disc list-inside text-lg leading-relaxed">
                <li>Building lasting client relationships based on trust and transparency</li>
                <li>Understanding unique business needs to deliver tailored solutions</li>
                <li>Collaborating closely with clients to ensure mutual success</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20 dark:bg-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-white">Our Approach</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/img.jpg" /* Replace with your actual image path */
              alt="Our Approach Illustration"
              className="rounded-3xl shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right Text Content */}
          <div className="space-y-10">
            <div>
              <div className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Discovery & Strategy</h3>
              <p className="text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
                We begin by deeply understanding your business, goals, and challenges. This foundation allows us to craft strategies that align with your vision and deliver measurable results.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Design & Development</h3>
              <p className="text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
                Our creative and technical teams collaborate to bring concepts to life, ensuring every solution is both visually compelling and functionally robust.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4">3</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Launch & Optimization</h3>
           <p className="text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
  We don&apos;t just deliver and disappear. We partner with you through launch and beyond, continuously optimizing and evolving your digital assets to maximize their impact.
</p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
