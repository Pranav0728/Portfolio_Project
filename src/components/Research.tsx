"use client"
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";

const ResearchPublications: NextPage = () => {
  const [research, setResearch] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/research',
          {
            headers: {"Authorization": process.env.NEXT_PUBLIC_API_KEY as string}
          }
        );
        const data = await response.json();
        setResearch(data);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section
        className="research-publications aboutnew section"
        id="research-publications"
      >
        <div>
        <div className="container">
          <div className="section-title padd-15">
            <h2>Research Publications in Journals</h2>
          </div>
          <div className="aboutnew-content newabout  flex flex-col gap-5">
            {research.map((pub: any, index: number) => (
              <div
                key={index}
                className="aboutnew-text  timelinenew rounded-lg p-5 flex flex-col gap-1"
              >
                <h2 className="title rounded-lg text-white font-bold text-[1.5rem] w-full">
                  {pub.title}
                </h2>
                <p>
                  <strong>Authors:</strong> {pub.authors}
                </p>
                <p>
                  <strong>Journal:</strong> {pub.journal}
                </p>
                <p>
                  <strong>Volume:</strong> {pub.volume}
                </p>
                <p>
                  <strong>Month/Year:</strong> {pub.monthYear}
                </p>
                <p>
                  <strong>Referred:</strong> {pub.referred}
                </p>
                <p>
                  <strong>ISSN:</strong> {pub.issn}
                </p>
                <p>
                  <strong>Level:</strong> {pub.level}
                </p>
                <br />
                <Link href={'http://puneresearch.com/home'} target="_blank">
                <button className="bg-green-600 p-2 rounded-md scale-75"> Read here</button>
                </Link>
              </div>
            ))}
          </div>
         </div>
         </div>
         </section>
         </main>
  );
};

export default ResearchPublications;
