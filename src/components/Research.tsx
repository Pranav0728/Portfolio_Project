import type { NextPage } from "next";

const ResearchPublications: NextPage = () => {
  const publications = [
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "The provocative Articulation in Dhasal’s: A Current of Blood (Golpitha)",
      journal:
        "Pune Research Scholar - An International Multidisciplinary Journal",
      volume: "Vol. 02, Issue. 01",
      monthYear: "Feb-Mar 2016",
      referred: "Referred",
      issn: "ISSN 2455-314x",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Reflection of Caste, Gender and Patriarchy in Meena Kandasamy’s: TOUCH",
      journal:
        "Pune Research Scholar - An International Multidisciplinary Journal",
      volume: "Vol. 2, Issue 1",
      monthYear: "Feb-Mar 2016",
      referred: "Referred",
      issn: "ISSN 2455-314x",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title: "Drastic Changes in Education and Birth of New Generation",
      journal:
        "Pune Research Scholar - An International Multidisciplinary Journal",
      volume: "Vol. 02, Issue 02",
      monthYear: "April-May 2016",
      referred: "Referred",
      issn: "ISSN 2455-314x",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Dalit Women and their present Status in India (With special reference to Kandasamy’s TOUCH and Dalit Women in Gujrat and Karnataka State)",
      journal: "Pune Research Scholar - An International Journal in English",
      volume: "Vol. 2, Issue 3",
      monthYear: "May-June 2016",
      referred: "Referred",
      issn: "ISSN 2454-3454",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Caste Conflict and Caste Discrimination in a Dalit’s Life (The special reference of Omprakash Valmiki’s JOOTHAN)",
      journal:
        "Pune Research World - An International Journal of Interdisciplinary Studies",
      volume: "Vol. 1, Issue 3",
      monthYear: "Sept-Nov 2016",
      referred: "Referred",
      issn: "ISSN 2455-359X",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title: "Role of Teacher in Teaching of Poetry at College Level learners",
      journal:
        "Pune Research Scholar - An International Multidisciplinary Journal",
      volume: "Vol. 3, Issue 3",
      monthYear: "June-July 2017",
      referred: "Referred",
      issn: "ISSN 2455-314X",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Enunciation of Identities and Rootlessness of Black woman (From selected Poetry of Maya Angelou)",
      journal:
        "Pune Research World - An International Journal of Interdisciplinary Studies",
      volume: "Vol. 2, Issue 2",
      monthYear: "June-July 2017",
      referred: "Referred",
      issn: "ISSN 2455-359X",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Journey of Black woman as an oppressive and suppressive state (With special reference to Maya Angelou’s And Still I Rise)",
      journal: "Pune Research - An International Journal in English",
      volume: "Vol. 3, Issue 4",
      monthYear: "July-Aug 2016",
      referred: "Referred",
      issn: "ISSN 2454-3454",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Black woman’s and Dalit woman’s disappointment towards Patriarchy (With reference to the selected poetry of Maya Angelou and Meena Kandasamy)",
      journal:
        "Pune Research Times - An International Journal of Contemporary Studies",
      volume: "Vol. 2, Issue 3",
      monthYear: "July-Sept 2017",
      referred: "Referred",
      issn: "ISSN 2456-0960",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Black woman and Dalit woman’s Social boycott Under Sexual violence and Exploitation (With special reference to Maya Angelou’s and Meena Kandasamy’s selected Poetry)",
      journal: "Pune Research - An International Journal in English",
      volume: "Vol. 3, Issue 6",
      monthYear: "Nov-Dec 2017",
      referred: "Referred",
      issn: "ISSN 2454-3454",
      level: "International",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "Challenges For Rural Women Entrepreneurship In India: A Special Reference To Rural Woman of Marathwada Region",
      journal: "Studies in Indian Place Names (SIPN) - UGC Care Listed Journal",
      volume: "Vol-40, Issue-88",
      monthYear: "March 2020",
      referred: "Referred",
      issn: "ISSN 2394-3114",
      level: "National",
    },
    {
      authors: "Dr. Narayan Laxman Jadhav",
      title:
        "A Journey Of Indian Woman Against Patriarchy Within: A Special Reference To Meena Kandasamy's Poetry",
      journal: "Studies in Indian Place Names (SIPN) - UGC Care Listed Journal",
      volume: "Vol-40, Issue-89",
      monthYear: "March 2020",
      referred: "Referred",
      issn: "ISSN 2394-3114",
      level: "National",
    },
  ];

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
          <div className=" about-content timeline flex flex-col gap-5">
            {publications.map((pub, index) => (
              <div
                key={index}
                className=" about-content timeline rounded-lg p-5 flex flex-col gap-1 "
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
