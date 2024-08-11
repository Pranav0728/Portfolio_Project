import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Dr. Narayan Jadhav, a <span>Professor</span>
                  </h2>
                  <p>
                    Hi! My name is Dr. Narayan Jadhav. I am passionate and
                    dedicated to my work, with over 11 years of experience in
                    teaching. My specialization lies in Comparative Studies,
                    focusing on Indian Dalit Literature and American Black
                    Literature. I am committed to academic excellence and strive
                    to inspire my students to reach their full potential.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>njadhav34@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Ph.D. in English</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9763091564</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Badlapur, Thane</span>
                      </p>
                    </div>
                    {/* <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div> */}
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
                    <div className="skill-item padd-15">
                      <h5>Comparative Literature</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Research and Analysis</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Teaching</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Public Speaking</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019
                          </h6>
                          <h4 className="timeline-title">Ph.D. (English)</h4>
                          <p className="timeline-text">
                            SRTM University Nanded - The Phenomenal Women: A
                            Comparative Study of the Select Poetry of Maya
                            Angelou and Meena Kandasamy.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016
                          </h6>
                          <h4 className="timeline-title">M.Phil. (English)</h4>
                          <p className="timeline-text">
                            SRTM University Nanded, 70.7% - Whispering to
                            Wisdom: A Study of Meena Kandasamy’s Touch.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2012
                          </h6>
                          <h4 className="timeline-title">M.Ed.</h4>
                          <p className="timeline-text">
                            SRTM University Nanded, 60.80% - Philosophy and
                            Social Foundation of Educational Psychology.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2012
                          </h6>
                          <h4 className="timeline-title">UGC-NET (English)</h4>
                          <p className="timeline-text">
                            UGC-New Delhi - Qualified (Ugc Ref.
                            No.43033/(NETJUNE 20 I 2)).
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2008
                          </h6>
                          <h4 className="timeline-title">B.Ed.</h4>
                          <p className="timeline-text">
                            SRTM University Nanded, 56.1% - Teacher and Edu. in
                            Emerging Indian Society.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2005
                          </h6>
                          <h4 className="timeline-title">M.A. (English)</h4>
                          <p className="timeline-text">
                            SRTM University Nanded, 57.75% - English Language &
                            Literature.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2002
                          </h6>
                          <h4 className="timeline-title">B.A.</h4>
                          <p className="timeline-text">
                            SRTM University Nanded, 52.54% - English, Sociology,
                            Economics.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 1998
                          </h6>
                          <h4 className="timeline-title">H.S.C.</h4>
                          <p className="timeline-text">
                            CBSE New Delhi, 63.30% - English, Hindi, History,
                            Economics, Geography.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 1996
                          </h6>
                          <h4 className="timeline-title">S.S.C.</h4>
                          <p className="timeline-text">
                            CBSE New Delhi, 59.30% - English, Marathi, Maths,
                            Science, Social Studies.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Associate Professor
                          </h4>
                          <p className="timeline-text">
                            Vasantdada Patil Pratishtan’s College of
                            Engineering, Mumbai - Teaching Professional
                            Communication & Ethics.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> July 2022 to July
                            2023
                          </h6>
                          <h4 className="timeline-title">
                            Assistant Professor
                          </h4>
                          <p className="timeline-text">
                            Shah & Anchor Kutchhi Engineering College, Govandi,
                            Chembur - Professional Communication & Ethics.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> March 2022 to June
                            2022
                          </h6>
                          <h4 className="timeline-title">
                            Assistant Professor
                          </h4>
                          <p className="timeline-text">
                            Terna Engineering College, Nerul - Professional
                            Communication & Ethics.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Sept 2019 to Oct
                            2021
                          </h6>
                          <h4 className="timeline-title">
                            Assistant Professor
                          </h4>
                          <p className="timeline-text">
                            AMANCS College, Ratnagiri - English Literature &
                            Communication Skills.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> June 2013 to July
                            2018
                          </h6>
                          <h4 className="timeline-title">
                            Assistant Professor
                          </h4>
                          <p className="timeline-text">
                            Kai.Nivrutirao Patil Jawalgaonkar Mahavidyalaya,
                            Nanded - English Language and Literature &
                            Communication Skills.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Dec 2012 to Feb
                            2013
                          </h6>
                          <h4 className="timeline-title">
                            Assistant Professor
                          </h4>
                          <p className="timeline-text">
                            Rajiv Gandhi College of CS and Management, Nanded -
                            Communication Skills.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Oct 2009 to July
                            2012
                          </h6>
                          <h4 className="timeline-title">Lecturer</h4>
                          <p className="timeline-text">
                            SSCR DEd College, Londhesangavi, Nanded - English
                            Methodology, Educational Psychology, Educational IT.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Nov 2008 to Mar
                            2009
                          </h6>
                          <h4 className="timeline-title">Lecturer</h4>
                          <p className="timeline-text">
                            Balaji College of Education, Toranjgaon, Yeola,
                            Nasik - English Methodology, Communication Skills,
                            Educational Psychology.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> July 2007 to Oct
                            2008
                          </h6>
                          <h4 className="timeline-title">Lecturer</h4>
                          <p className="timeline-text">
                            SSCR DEd College, Londhesangavi, Nanded - English
                            Methodology, Educational Psychology, Educational IT.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="memberships padd-15">
                  <h3 className="title">Professional Memberships</h3>
                  <div className="row">
                    <div className="membership-item padd-15">
                      <p>
                        Executive Member of MES’s Swami Vivekanand Senior
                        College, Mantha
                      </p>
                    </div>
                    <div className="membership-item padd-15">
                      <p>
                        Member of Pune University English Teachers’ Association
                      </p>
                    </div>
                    <div className="membership-item padd-15">
                      <p>
                        Member of Dr. Babasaheb Ambedkar Marathwada University
                        English Teachers’ Association
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="languages padd-15">
                  <h3 className="title">Languages</h3>
                  <div className="row">
                    <div className="language-item padd-15">
                      <p>English</p>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="language-item padd-15">
                      <p>Marathi</p>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="language-item padd-15">
                      <p>Hindi</p>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="interests padd-15">
                  <h3 className="title">Interests</h3>
                  <div className="row">
                    <div className="interest-item padd-15">
                      <p>Reading</p>
                    </div>
                    <div className="interest-item padd-15">
                      <p>Writing</p>
                    </div>
                    <div className="interest-item padd-15">
                      <p>Public Speaking</p>
                    </div>
                    <div className="interest-item padd-15">
                      <p>Traveling</p>
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
