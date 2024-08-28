"use client"
import type { NextPage } from "next";
import { useEffect, useState } from "react";

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
        className="research-publications section"
        id="research-publications"
      >
        <div className="container">
          <div className="section-title padd-15">
            <h2>Research Publications in Journals</h2>
          </div>
          <div className="about-content timeline flex flex-col gap-5">
            {research.map((pub: any, index: number) => (
              <div
                key={index}
                className="about-content timeline rounded-lg p-5 flex flex-col gap-1"
              >
                <h4 className="title rounded-lg text-white font-bold text-[1.5rem] w-full">
                  {pub.title}
                </h4>
                <h2>
                  <strong>Authors:</strong> {pub.authors}
                </h2>
                <h2>
                  <strong>Journal:</strong> {pub.journal}
                </h2>
                <h2>
                  <strong>Volume:</strong> {pub.volume}
                </h2>
                <h2>
                  <strong>Month/Year:</strong> {pub.monthYear}
                </h2>
                <h2>
                  <strong>Referred:</strong> {pub.referred}
                </h2>
                <h2>
                  <strong>ISSN:</strong> {pub.issn}
                </h2>
                <h2>
                  <strong>Level:</strong> {pub.level}
                </h2>
                <br />
              </div>
            ))}
          </div>
          </div> 
          </section>
          </main>
  );
};

export default ResearchPublications;
