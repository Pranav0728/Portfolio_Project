"use client";
import Sidebar from "@/components/sidebar/sidebar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const ConferencesWorkshops: NextPage = () => {
  const [papersData, setPapersData] = useState<any[]>([]);

  const fetchPapersData = async () => {
    try {
      const response = await fetch(`api/papersPresented`, {
        headers: { "Authorization": process.env.NEXT_PUBLIC_API_KEY as string }
      });
      const jsonData = await response.json();
      setPapersData(jsonData);
    } catch (error) {
      console.error('Error fetching papers data:', error);
    }
  };

  useEffect(() => {
    fetchPapersData();
  }, []);

  return (
    <main>
      <Sidebar />
      <section className="papers section" id="conferences-workshops">
        <div className="container flex flex-col">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Conferences & Workshops</h2>
            </div>
          </div>
          <div className="row">
            <div className="papers-content padd-15 flex gap-10 flex-col">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {papersData.map((paper, index) => (
                    <div key={index} className="timeline-item mb-10">
                      <div className="circle-dot" />
                      <h6 className="timeline-date">
                        <i className="fa fa-calendar" /> 
                        {new Date(paper.fromDate).toLocaleDateString()} - 
                        {new Date(paper.toDate).toLocaleDateString()}
                      </h6>
                      <h4 className="timeline-title">{paper.authors}</h4>
                      <p className="timeline-text">
                        <strong>Subject:</strong> {paper.subject}<br />
                        <strong>Institute:</strong> {paper.nameOfInstitute}<br />
                        <strong>Level:</strong> {paper.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConferencesWorkshops;
