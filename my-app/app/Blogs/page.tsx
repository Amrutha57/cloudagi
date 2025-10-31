"use client";

import { Input } from "@/components/ui/input";
import { Footer } from "../components/footer";
import { useState } from "react";
import { Header } from "@/app/components/header";
import { TextAnimate } from "../components/text-animate";
import { Particles } from "../components/particles"
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
   {
    id: 5,
    image: "/img.jpg",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 6,
    image: "/airesearch.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 7,
    image: "/eco.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 8,
    image: "/aidev.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 9,
    image: "/aiinte.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 10,
    image: "/img.jpg",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 11,
    image: "/airesearch.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 12,
    image: "/aidev.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 13,
    image: "/aiinte.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 14,
    image: "/eco.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
   {
    id: 15,
    image: "/aidev.png",
    title: "Card Title 2",
    description: "Short summary goes here for card 2.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },

  {
    id: 16,
    image: "/eco.png",
    title: "Card Title 16",
    description: "Short summary goes here for card 16.",
    date: "2025-10-29",
    read: "5 min read",
     link: "/blog/ai-integration",
  },
];

const Blog = () => {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto my-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          <TextAnimate animation="slideLeft" by="character" as="span">
            Our Blogs
          </TextAnimate>
        </h2>
        <h2 className="text-3xl font-semibold mb-6">
          Insights, tips, and news about design, development, and digital transformation
        </h2>
      </div>

      <section className="flex justify-center py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12 text-center">
  <Input type="text" placeholder="Search" className="flex-grow" />
    
    
  
          {/* Floating Buttons can go here */}
        </div>
      </section>

      <div className="container mx-auto py-8">
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

      <section className="flex justify-center py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Stay Updated
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Be the first to know when we publish new insights and industry updates.
          
<Button
  variant="outline"
  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
  aria-label="Submit"
>
  Subscribe
</Button>
          </p>

          {/* Floating Buttons can go here */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
