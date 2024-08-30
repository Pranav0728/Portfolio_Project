"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import emailjs from "@emailjs/browser";
import Sidebar from "@/components/sidebar/sidebar";

const Contact: NextPage = () => {
  const [personal, setPersonal] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/personal`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const personalData = await response.json();
        setPersonal(personalData);
      } catch (error) {
        console.error("Error fetching personal data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      const data = await result.json();
      const message = data.message;
      console.log(message);

      await emailjs.sendForm(
        "service_macs5pj",
        "template_el0hywa",
        "#form",
        "sWGzRrDkChJMq-guV"
      );

      console.log("SUCCESS!");
      alert("EMAIL Sent");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error);
    }
  };

  return (
    <main>
      <Sidebar/>
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div >
          {personal.map((user) => (
            <div key={user._id} className="flex md:flex-row flex-col" >
              {/* contact-info-item */}
              <div className="contact-info-item padd-15">
                <div className="icon">
                  <i className="fa fa-map-marker" />
                </div>
                <h4>Address</h4>
                <p>{user.address}</p>
              </div>
              {/* contact-info-item Ended */}
              {/* contact-info-item */}
              <div className="contact-info-item padd-15">
                <div className="icon">
                  <i className="fa fa-phone" />
                </div>
                <h4>Call Us On</h4>
                <p>{user.phone.join(" / ")}</p>
              </div>
              {/* contact-info-item Ended */}
              {/* contact-info-item */}
              <div className="contact-info-item padd-15">
                <div className="icon">
                  <i className="fa fa-envelope" />
                </div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Contact Form */}
        <div className="row">
          <form className="contact-form padd-15" id="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Contact Form Ended */}
      </div>
    </section>
    </main>
  );
};

export default Contact;
