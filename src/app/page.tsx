"use client";
import Sidebar from "@/components/sidebar/sidebar";
import { Lobster, Rokkitt, Oswald, Courgette } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

// Font Families
const lobster = Lobster({
  subsets: ["latin"],
  weight: "400", // Ensure weight is a string
});

const rokkitt = Rokkitt({
  subsets: ["latin"],
  weight: "200",
  preload: true, // Preload if necessary
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "200",
  preload: false,
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

export default function Home() {
  const img = "/imgs/Profile.png";
  const [Personal, setPersonalData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`api/personal`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await data.json();
        setPersonalData(fetchedData);
      } catch (error) {
        console.error("Error fetching personal data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100" id="about">
      <Sidebar />
      <section className="home section flex justify-center items-center py-20" id="home">
        <div className="container flex gap-5 justify-center items-center">
        {Personal.map((user,index) => (
          <div key={index} className="intro flex gap-5 md:flex-row flex-col justify-center items-center">
            <Image
              src={img}
              alt="Profile of Dr. Narayan Jadhav"
              className="shadow-dark rounded-full w-48 h-48 object-cover"
              loading="lazy"
              width={200}
              height={200}
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className={`text-[4rem] text-black ${lobster.className}`}>{user.name}</h1>
              <p className={`text-[2rem] mt-2 ${rokkitt.className}`}>{user.subHeader}</p>
            
              {/* <div className="social-links flex gap-3 mt-4">
                {[
                  { href: "https://twitter.com/", icon: "fa-twitter" },
                  { href: "https://facebook.com/", icon: "fa-facebook" },
                  { href: "https://github.com/", icon: "fa-github" },
                  { href: "https://instagram.com/", icon: "fa-instagram" },
                  { href: "https://linkedin.com/in/", icon: "fa-linkedin" }
                ].map(({ href, icon }) => (
                  <a key={icon} href={href} target="_blank" aria-label={`Link to ${icon.split('-')[1]}`}>
                    <i className={`fa ${icon}`} />
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        ))}
        </div>
      </section>
    </main>
  );
}
