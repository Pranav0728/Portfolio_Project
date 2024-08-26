"use client"
import type { NextPage } from "next";

const ResearchPapers: NextPage = () => {
  const papers = [
    {
      srNo: 1,
      title: "Role of Teacher in Teaching of Poetry at College level",
      subject: "International Conference on Quality Education: Issues, Concerns, Challenges and Development",
      organizingInstitute: "AIAER and YCM Open University",
      city: "Nashik",
      from: "22nd Feb. 2014",
      to: "24th Feb. 2014",
      level: "International",
    },
    {
      srNo: 2,
      title: "Theorizing Dalit Studies Today",
      subject: "National Seminar on Indian Dalit Literature at the Crossroads",
      organizingInstitute: "Dr. Babasaheb Ambedkar Chair & Studies Centre & SLL CS.SRTMU",
      city: "Nanded",
      from: "7th March 2014",
      to: "8th March 2014",
      level: "National",
    },
    {
      srNo: 3,
      title: "Gender and Caste in Indian Literature",
      subject: "National Conference on Gender: Language, Literature and Culture",
      organizingInstitute: "SLL & CS. SRTM University",
      city: "Nanded",
      from: "17th March 2015",
      to: "18th March 2015",
      level: "National",
    },
    // Add other papers similarly
  ];

  return (
    <main>
      <section className="research-papers section" id="research-papers">
        <div className="container">
          <div className="section-title about-content padd-15">
            <h2>Research Papers Presented in National/International Conferences/Seminars/Workshops</h2>
          </div>
          <div className="papers-content padd-15">
            {papers.map((paper) => (
              <div key={paper.srNo} className="paper-item">
                <h3>{paper.title}</h3>
                <p><strong>Subject:</strong> {paper.subject}</p>
                <p><strong>Organizing Institute:</strong> {paper.organizingInstitute}</p>
                <p><strong>City:</strong> {paper.city}</p>
                <p><strong>From:</strong> {paper.from}</p>
                <p><strong>To:</strong> {paper.to}</p>
                <p><strong>Level:</strong> {paper.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchPapers;
