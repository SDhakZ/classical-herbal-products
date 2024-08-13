"use client";
import React, { useEffect, useState, useRef } from "react";
import { socialInfo, companyDetails } from "@/app/data/companyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "tippy.js/dist/tippy.css";

export default function Contact(props) {
  const { dark, hcaptcha_site_key } = props;
  const initialFormData = {
    name: "",
    phone: "",
    subject: "",
    email: "",
    location: "",
    message: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(null);
  const [token, setToken] = useState(null);
  const [visible, setVisible] = useState(false);
  const captchaRef = useRef(null);
  const [skeletons, setSkeletons] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeletons(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (token) {
      setVisible(false);
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const dataToSend = new FormData();
    // Append form data fields
    dataToSend.append("name", formData.name);
    dataToSend.append("phone", formData.phone);
    dataToSend.append("subject", formData.subject);
    dataToSend.append("email", formData.email);
    dataToSend.append("location", formData.location);
    dataToSend.append("message", formData.message);
    dataToSend.append("token", token);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/send",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        setSentStatus("success");
        setTimeout(() => {
          setSentStatus(null);
          setFormData({ ...initialFormData });
          captchaRef.current?.resetCaptcha();
        }, 2000);
      }
      // Handle success
    } catch (error) {
      console.log(error);
      setSentStatus("error");
      setTimeout(() => {
        setSentStatus(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCaptcha = (token) => {
    setToken(token);
    setVisible(false);
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-primary-green-400" : ""}`}>
      <div className="container-margin-compact padding-y-lg">
        <div className="flex flex-col justify-between gap-20 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-12 w-full max-w-[500px]">
            <div>
              <h1
                className={`text-[2.4rem] ${
                  dark ? "text-white-shade-100" : "text-primary-green-500"
                } font-markaziText`}
              >
                Get in Touch
              </h1>
              <p className="mt-2 font-medium leading-relaxed text-black-shade-200">
                Want to get in touch? We’d love to hear from you. We’re here to
                help and answer any questions you might have. We often
                personally meet with clients; Drop us a line, or give us a heads
                up if you're interested in visiting us.
              </p>
            </div>
            <div>
              <h2
                className={`text-3xl font-regular sm:text-4xl font-markaziText ${
                  dark ? "text-white-shade-100" : "text-primary-green-500"
                }`}
              >
                You can also find us at
              </h2>
              <ul className="mt-2 space-y-3">
                {companyDetails[0].items.map((item, index) =>
                  item.nested ? (
                    <li
                      className={`${
                        dark ? "text-white-shade-100 " : "text-black-shade-200"
                      }  transition-colors duration-200 flex space-x-4 items-center font-medium`}
                      key={index}
                    >
                      <FontAwesomeIcon
                        icon={item.nested[0].icon}
                        className="text-lg flex items-center w-4 text-[#73574D]"
                      />
                      <div>
                        <a
                          className="transition-colors duration-200 hover:text-primary-beige-300"
                          href={item.nested[0].link}
                        >
                          {item.nested[0].title}
                        </a>
                        {", "}
                        <a
                          className="transition-colors duration-200 hover:text-primary-beige-300"
                          href={item.nested[1].link}
                        >
                          {item.nested[1].title}
                        </a>
                      </div>
                    </li>
                  ) : (
                    <li
                      className={`${
                        dark ? "text-white-shade-100" : "text-black-shade-200"
                      } flex hover:text-primary-beige-300 transition-colors duration-200 space-x-4 items-center font-medium`}
                      key={index}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-lg  flex items-center w-4 text-[#73574D]"
                      />
                      <a href={item.link}>{item.title}</a>
                    </li>
                  )
                )}
              </ul>
              <ul
                className={`flex mt-6 flex-wrap self-start gap-4 text-sm sm:self-auto ${
                  dark ? "text-white-shade-100" : "text-black-shade-200"
                }`}
              >
                {socialInfo.map((social, index) => (
                  <li>
                    <a
                      key={index}
                      className={`flex items-center border-2 justify-center transition duration-200 hover:border-primary-beige-300 hover:text-primary-beige-300 rounded-full w-10 h-10 md:w-10 md:h-10 ${
                        dark
                          ? "text-white-shade-100 border-white-shade-100"
                          : "text-black-shade-200 border-black-shade-200"
                      } hover:text-primary-orange-200`}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-lg "
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <h2 className={`font-markaziText text-5xl text-primary-green-500`}>
              Send Message
            </h2>
            <form>
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col w-full gap-4 sm:flex-row">
                  <input
                    id="sender_name"
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="px-5 py-3 w-full border-2 rounded-md border-[#9F8F89] outline-2 outline-primary-orange-300"
                  />{" "}
                  <input
                    id="sender_phone"
                    type="text"
                    placeholder="Phone No."
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-5 py-3 w-full border-2 rounded-md border-[#9F8F89] outline-2 outline-primary-orange-300"
                  />
                </div>

                <input
                  id="sender_subject"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-md border-[#9F8F89] outline-2 outline-primary-orange-300"
                />
                <input
                  id="sender_email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-md border-[#9F8F89] outline-2 outline-primary-orange-300"
                />

                <input
                  id="sender_location"
                  value={formData.location}
                  type="text"
                  placeholder="Location"
                  name="location"
                  required
                  onChange={handleChange}
                  className="px-5 py-3 border-2 rounded-md border-[#9F8F89] outline-2 outline-primary-orange-300"
                />

                <textarea
                  id="sender_message"
                  value={formData.message}
                  name="message"
                  required
                  onChange={handleChange}
                  className="px-5 py-3 transition-all duration-200 border-2 rounded-md border-[#9F8F89] outline-2 outline-primary-orange-300 min-h-40 "
                  placeholder="Send your message here..."
                />

                <div className="flex flex-col gap-6 mt-2">
                  <Tippy
                    trigger="manual"
                    content={<span>Click to complete CAPTCHA</span>}
                    visible={visible}
                  >
                    <div>
                      <HCaptcha
                        sitekey={hcaptcha_site_key}
                        onVerify={handleVerifyCaptcha}
                        ref={captchaRef}
                        size="normal"
                      />
                    </div>
                  </Tippy>
                  <button
                    type="submit"
                    className={`flex hover:bg-[#ac9060] bg-primary-beige-300 border-transparent border-2 text-white-shade-100 bg-primary-orange-200 whitespace-nowrap transition-all h-fit duration-200 w-full items-center max-w-[100%] lg:max-w-[300px] justify-center p-2 text-lg font-medium tracking-wider rounded-md ${
                      loading
                        ? "bg-gray-400"
                        : sentStatus === "success"
                        ? "bg-green-500"
                        : sentStatus === "error"
                        ? "bg-red-500"
                        : "bg-primary-beige-300"
                    }`}
                  >
                    {loading ? (
                      <>
                        Sending{" "}
                        <FontAwesomeIcon
                          className="ml-2 animate-spin"
                          icon={faSpinner}
                        />
                      </>
                    ) : sentStatus === "success" ? (
                      "Sent Successfully"
                    ) : sentStatus === "error" ? (
                      "Not Sent"
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
