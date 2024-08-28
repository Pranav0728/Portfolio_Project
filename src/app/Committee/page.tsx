"use client";
import Sidebar from "@/components/sidebar/sidebar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const CommitteeWork: NextPage = () => {
  const [committeeData, setCommitteeData] = useState<any[]>([]);

  const fetchCommitteeData = async () => {
    try {
      const response = await fetch(`api/committee`, {
        headers: { "Authorization": process.env.NEXT_PUBLIC_API_KEY as string }
      });
      const jsonData = await response.json();
      setCommitteeData(jsonData);
    } catch (error) {
      console.error('Error fetching committee data:', error);
    }
  };

  useEffect(() => {
    fetchCommitteeData();
  }, []);

  return (
    <main>
      <Sidebar />
      <section className="committe section" id="committee-work">
        <div className="container flex flex-col">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Committe Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="committee-content padd-15 flex gap-10 flex-col">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {committeeData.map((committee, index) => (
                    <div key={index} className="timeline-item mb-10">
                      <div className="circle-dot" />
                      <h6 className="timeline-date">
                        <i className="fa fa-calendar" /> {new Date(committee.createdAt).toLocaleDateString()}
                      </h6>
                      <h4 className="timeline-title">{committee.name}</h4>
                      <p className="timeline-text">{committee.details}</p>
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

export default CommitteeWork;
