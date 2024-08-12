import React from "react";
import Head from "next/head";

export default function EmailTemplate({ formData }) {
  const { name, email, location, message, phone, subject } = formData;

  return (
    <>
      <Head>
        <title>Beamlab Email Template</title>
      </Head>
      <div style={{ overflowX: "hidden", fontFamily: "Visby", width: "100%" }}>
        {/* Render email content */}
        <h1 style={{ color: "#FF867A" }}>
          Beamlab<span style={{ color: "#FE9600" }}>.</span>
        </h1>
        <h2>
          You received a message from{" "}
          <span style={{ color: "#FF867A" }}>{name}</span> via Beamlab website
        </h2>
        <div
          style={{
            width: "100%",
            marginTop: "30px",
            maxWidth: "700px",
            backgroundColor: "#F5F5F7",
            padding: "2px 15px",
          }}
        >
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Name: </strong>
            {name}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Subject: </strong>
            {subject}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Phone: </strong>
            {phone}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Location: </strong>
            {location}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Email: </strong>{" "}
            <a
              title="Email"
              style={{ color: "#FF867A", textDecoration: "underline" }}
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <strong>Message:</strong> &quot;{message}&quot;
          </p>
        </div>
      </div>
    </>
  );
}
