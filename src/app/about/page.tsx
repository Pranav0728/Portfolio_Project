"use client"
import Sidebar from "@/components/sidebar/sidebar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const About: NextPage = () => {
  const [education, setEducation] = useState<any[]>([]);
  const [experience, setExperience] = useState<any[]>([]);
  const [personal, setPersonal] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [awards, setAwards] = useState<any[]>([]);
  const [extraCurricular, setExtraCurricular] = useState<any[]>([]);
  const [extentionActivity, setExtentionActivity] = useState<any[]>([]);
  const [aboutData, setAboutData] = useState({
    title: "",
    memberships: [],
    languages: [],
    interests: [],
    description: "",
  });

  const fetchData = async (endpoint: string, setter: React.Dispatch<any[]>) => {
    try {
      const data = await fetch(`api/${endpoint}`, {
        headers: { "Authorization": process.env.NEXT_PUBLIC_API_KEY as string }
      });
      const jsonData = await data.json();
      setter(jsonData);
    } catch (error) {
      console.error(`Error fetching ${endpoint} data:`, error);
    }
  };

  useEffect(() => {
    fetchData('skills', setSkills);
    fetchData('education', setEducation);
    fetchData('experience', setExperience);
    fetchData('personal', setPersonal);
    fetchData('award', setAwards);
    fetchData('extraCurricular', setExtraCurricular);
    fetchData('extentionActivity', setExtentionActivity);

    const fetchAboutData = async () => {
      try {
        const response = await fetch(`api/about`, {
          headers: { "Authorization": process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const data = await response.json();
        setAboutData(data[0]); // Assuming the API returns an array with a single document
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };
    fetchAboutData();
  }, []);

  return (
    <main>
      <Sidebar />
      <section className="about section" id="about">
        <div className="container flex flex-col">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15 flex gap-10 flex-col">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>{aboutData.title}</h2>
                  <p>{aboutData.description}</p>
                </div>
              </div>
              <div className="timeline newrow flex justify-center rounded-xl p-10 md:flex-row flex-col h-auto">
                <div className="personal-info newper h-auto">
                  <div className="flex flex-col ">
                    {personal.map((user) => (
                      <div className="m-2 border-[white]" key={user._id}>
                        <div className="">
                          <p className="m-2">Name: {user.name}</p>
                          <p className="m-2">Degree: {user.degree}</p>
                          <p className="m-2">Email: {user.email}</p>
                          <p className="m-2">City: {user.city}</p>
                          <p className="m-2">{user.phone.join(",")}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row flex justify-center items-center m-2">
                    <div className="buttons">
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
                <div className="skills ">
                  <div className="row skillroww">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
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
                    <div className="timeline-box padd-15 ">
                      <div className="timeline shadow-dark ">
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

                <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Memberships</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {aboutData.memberships.map((membership, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                           
                            <p className="timeline-text" key={index}>{membership}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="education padd-15">
                  <h3 className="title">Languages</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {aboutData.languages.map((language, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                           
                            <p className="timeline-text" key={index}>{language}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="education padd-15">
                  <h3 className="title">interests</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {aboutData.interests.map((interests, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                           
                            <p className="timeline-text" key={index}>{interests}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
             

                <div className="row">
                  <div className="awards padd-15">
                    <h3 className="title">Awards</h3>
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {awards.map((award, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {new Date(award.createdAt).toLocaleDateString()}
                            </h6>
                            <h4 className="timeline-title">{award.title}</h4>
                            <p className="timeline-text">{award.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra-Curricular Section */}
                <div className="row">
                  <div className="extraCurricular padd-15">
                    <h3 className="title">Extra-Curricular Activities</h3>
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {extraCurricular.map((activity, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {new Date(activity.createdAt).toLocaleDateString()}
                            </h6>
                            <h4 className="timeline-title">{activity.title}</h4>
                            <p className="timeline-text">{activity.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extention Activities Section */}
                <div className="row">
                  <div className="extentionActivity padd-15">
                    <h3 className="title">Extension Activities</h3>
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {extentionActivity.map((activity, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {new Date(activity.createdAt).toLocaleDateString()}
                            </h6>
                            <h4 className="timeline-title">{activity.title}</h4>
                            <p className="timeline-text">{activity.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
