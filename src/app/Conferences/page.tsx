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
      <section className="papers section aboutnew" id="conferences-workshops">
        <div className="container aboutnew-content flex flex-col">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Conferences & Workshops</h2>
            </div>
          </div>
          <div className="row">
            <div className="papers-content aboutnew-content padd-15 flex gap-10 flex-col">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {papersData.map((paper, index) => (
                    <div key={index} className="timelinenew aboutnew-text mb-10">
                      <div className="circle-dot" />
                      <h2 className="timeline-date">
                        <i className="fa fa-calendar" /> 
                        {new Date(paper.fromDate).toLocaleDateString()} - 
                        {new Date(paper.toDate).toLocaleDateString()}
                      </h2>
                      <h2 className="timeline-title">{paper.authors}</h2>
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
