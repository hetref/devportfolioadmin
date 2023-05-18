import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../Firebase/config";

const Contact = () => {
  const count = useRef(0);
  const [contactsData, setContactsData] = useState([]);
  const contactdata = [];

  const today = new Date();
  const seconds = today.getSeconds();
  const minutes = today.getMinutes();
  const hour = today.getHours();
  const timestampnow = `${hour} ${minutes} ${seconds}`;

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "contactdata"));
    querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      //   setContactsData((prev) => [...prev, doc.data()]);
      contactdata.push(doc.data());
      setContactsData(contactdata);
      //   console.log(doc);
    });
  };

  useEffect(() => {
    getData();
    console.log("Reloading");
  }, [timestampnow]);

  return (
    <div>
      <h1>Portfolio Contact Data</h1>
      <span>Refreshed at - {timestampnow}</span>
      {contactsData.map((item) => {
        return (
          <div
            className="contactDataList"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: ".6rem 0",
            }}
          >
            <h2 style={{ margin: ".2rem 0" }}>{item.name}</h2>
            <a style={{ margin: ".2rem 0" }} href={`mailto:${item.email}`}>
              {item.email}
            </a>
            <a style={{ margin: ".2rem 0" }} href={`tel:${item.phone}`}>
              {item.phone}
            </a>
            <p style={{ margin: ".2rem 0" }}>{item.companyName}</p>
            <p style={{ margin: ".2rem 0" }}>{item.message}</p>
            <span style={{ margin: ".2rem 0" }}>
              Contacted on - {item.timestamp}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
