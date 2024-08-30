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
      <section className="committe section aboutnew" id="committee-work">
        <div className="container flex flex-col">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Committe Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="aboutnew-content padd-15 flex gap-10 flex-col">
              <div className="timelinenew-box padd-15">
                <div className=" shadow-dark">
                  {committeeData.map((committee, index) => (
                    <div key={index} className="timelinenew flex flex-col aboutnew-text mb-10">
                      <div className="circle-dot" />
                      <h2 className="timelinenew-date">
                        <i className="fa fa-calendar" /> {new Date(committee.createdAt).toLocaleDateString()}
                      </h2>
                      <h2 className="timelinenew-title">{committee.name}</h2>
                      <p className="timelinew-text">{committee.details}</p>
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
