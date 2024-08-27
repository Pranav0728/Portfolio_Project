"use client"
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const About: NextPage = () => {
  const [education , setEducation] = useState<any[]>([]);
  const [experience , setExperience] = useState<any[]>([]);
  const [Personal , setPersonal] = useState<any[]>([]);
  const [skills , setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const data = await fetch(`api/skills`,
          {
            headers: {"Authorization": process.env.NEXT_PUBLIC_API_KEY as string}
          }
        );
        const skillsData = await data.json();
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    }
    fetchData();
  },[])
  // const skills = [
  //   { name: "Comparative Literature", level: "90%" },
  //   { name: "Research and Analysis", level: "85%" },
  //   { name: "Teaching", level: "95%" },
  //   { name: "Public Speaking", level: "80%" },
  // ];

  // const education = [
  //   { year: "2019", title: "Ph.D. (English)", details: "SRTM University Nanded - The Phenomenal Women: A Comparative Study of the Select Poetry of Maya Angelou and Meena Kandasamy." },
  //   { year: "2016", title: "M.Phil. (English)", details: "SRTM University Nanded, 70.7% - Whispering to Wisdom: A Study of Meena Kandasamy’s Touch." },
  //   { year: "2012", title: "M.Ed.", details: "SRTM University Nanded, 60.80% - Philosophy and Social Foundation of Educational Psychology." },
  //   { year: "2012", title: "UGC-NET (English)", details: "UGC-New Delhi - Qualified (Ugc Ref. No.43033/(NETJUNE 20 I 2))." },
  //   { year: "2008", title: "B.Ed.", details: "SRTM University Nanded, 56.1% - Teacher and Edu. in Emerging Indian Society." },
  //   { year: "2005", title: "M.A. (English)", details: "SRTM University Nanded, 57.75% - English Language & Literature." },
  //   { year: "2002", title: "B.A.", details: "SRTM University Nanded, 52.54% - English, Sociology, Economics." },
  //   { year: "1998", title: "H.S.C.", details: "CBSE New Delhi, 63.30% - English, Hindi, History, Economics, Geography." },
  //   { year: "1996", title: "S.S.C.", details: "CBSE New Delhi, 59.30% - English, Marathi, Maths, Science, Social Studies." },
  // ];
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const data = await fetch(`api/education`,
          {
            headers: {"Authorization": process.env.NEXT_PUBLIC_API_KEY as string}
          }
        );
        const educationData = await data.json();
        setEducation(educationData);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    }
    fetchData();
  },[])

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const data = await fetch(`api/experience`,
          {
            headers: {"Authorization": process.env.NEXT_PUBLIC_API_KEY as string}
          }
        );
        const experienceData = await data.json();
        setExperience(experienceData);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    }
    fetchData();
  },[])

  // const experience = [
  //   { period: "2023 to Present", title: "Associate Professor", details: "Vasantdada Patil Pratishtan’s College of Engineering, Mumbai - Teaching Professional Communication & Ethics." },
  //   { period: "July 2022 to July 2023", title: "Assistant Professor", details: "Shah & Anchor Kutchhi Engineering College, Govandi, Chembur - Professional Communication & Ethics." },
  //   { period: "March 2022 to June 2022", title: "Assistant Professor", details: "Terna Engineering College, Nerul - Professional Communication & Ethics." },
  //   { period: "Sept 2019 to Oct 2021", title: "Assistant Professor", details: "AMANCS College, Ratnagiri - English Literature & Communication Skills." },
  //   { period: "June 2013 to July 2018", title: "Assistant Professor", details: "Kai.Nivrutirao Patil Jawalgaonkar Mahavidyalaya, Nanded - English Language and Literature & Communication Skills." },
  //   { period: "Dec 2012 to Feb 2013", title: "Assistant Professor", details: "Rajiv Gandhi College of CS and Management, Nanded - Communication Skills." },
  //   { period: "Oct 2009 to July 2012", title: "Lecturer", details: "SSCR DEd College, Londhesangavi, Nanded - English Methodology, Educational Psychology, Educational IT." },
  //   { period: "Nov 2008 to Mar 2009", title: "Lecturer", details: "Balaji College of Education, Toranjgaon, Yeola, Nasik - English Methodology, Communication Skills, Educational Psychology." },
  //   { period: "July 2007 to Oct 2008", title: "Lecturer", details: "SSCR DEd College, Londhesangavi, Nanded - English Methodology, Educational Psychology, Educational IT." },
  // ];

  const memberships = [
    "Executive Member of MES’s Swami Vivekanand Senior College, Mantha",
    "Member of Pune University English Teachers’ Association",
    "Member of Dr. Babasaheb Ambedkar Marathwada University English Teachers’ Association"
  ];

  const languages = [
    "English",
    "Hindi",
    "Marathi",
  ];

  const interests = [
    "Reading",
    "Writing",
    "Public Speaking",
    "Traveling"
  ];
  // const Personal = [
  //   {
  //     name: "Name",
  //     value: "Dr. Narayan Jadhav",
  //   },
  //   {
  //     name : "Email",
  //     value: "njadhav34@gmail.com"
  //   },
  //   {
  //     name : "Degree",
  //     value: "Ph.D. in English"
  //   },
  //   {
  //     name: "Phone",
  //     value: "+91 9763091564"
  //   },
  //   {
  //     name: "City",
  //     value: "Badlapur, Thane"
  //   }
  // ]
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const data = await fetch(`api/personal`,
          {
            headers: {"Authorization": process.env.NEXT_PUBLIC_API_KEY as string}
          }
        );
        const personalData = await data.json();
        setPersonal(personalData);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    }
    fetchData();
  },[])

  const about = [
    {
      title: "I am Dr. Narayan Jadhav, a Professor",
      description : `Hi! My name is Dr. Narayan Jadhav. I am passionate and
                    dedicated to my work, with over 11 years of experience in
                    teaching. My specialization lies in Comparative Studies,
                    focusing on Indian Dalit Literature and American Black
                    Literature. I am committed to academic excellence and strive
                    to inspire my students to reach their full potential.`
    }
  ]

  return (
    <main>
      <section className="about section" id="about">
        <div className="container flex flex-col ">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15 flex gap-10 flex-col">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    {about[0].title}
                  </h2>
                  <p>
                    {about[0].description}
                  </p>
                </div>
              </div>
              <div className=" timeline newrow flex justify-center rounded-xl pb-10" >
                <div className="  personal-info ">
                  <div className="row  flex flex-col">
                  {Personal.map((user) => (
                    <div className="info-item padd-15 boder-[white]">
                          <li key={user._id}>
                            <h2>Name: {user.name}</h2>
                            <p>Degree: {user.degree}</p>
                            <p>Email: {user.email}</p>
                            <p>Address{user.address}</p>
                            <p>City: {user.city}</p>
                            <p>{user.phone.join(",")}</p>
                          </li>
                          </div>
                        ))}
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/Resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item padd-15">
                        <h5>{skill.name}</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: skill.level }} />
                          <div className="skill-percent">{skill.level}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {education.map((edu, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {edu.year}
                            </h6>
                            <h4 className="timeline-title">{edu.title}</h4>
                            <p className="timeline-text">{edu.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {experience.map((exp, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {exp.period}
                            </h6>
                            <h4 className="timeline-title">{exp.title}</h4>
                            <p className="timeline-text">{exp.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="memberships padd-15 ">
                  <h3 className="title">Memberships</h3>
                  <ul>
                    {memberships.map((membership, index) => (
                      <li key={index}>{membership}</li>
                    ))}
                  </ul>
                </div>

                <div className="languages padd-15">
                  <h3 className="title">Languages</h3>
                  <div className="  flex flex-col">
                    {languages.map((language, index) => (
                      <div key={index} className="language-item padd-15">
                        <h5>{language}</h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="interests padd-15">
                  <h3 className="title">Interests</h3>
                  <ul>
                    {interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
