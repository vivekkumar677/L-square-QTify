import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import UpImage from "../../assets/upImage.png";

import "./faq.css";
import { useEffect } from "react";

export default function Faq() {
  const [faqData, setFaqData] = useState([]);

  const fetchFaq = async () => {
    try {
      const response = await fetch("https://qtify-backend-labs.crio.do/faq");
      const finalData = await response.json();

      // console.log(finalData)
      setFaqData(finalData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      <div className="accordion">
        {faqData.map((data, index) => (
          <div key={index} className="accordion-item">
            <Accordion
              defaultExpanded={index === 0}
              style={{ borderRadius: "10px", marginBottom: "10px" }}
            >
              <div className="accordion-summary">
                <AccordionSummary
                  expandIcon={
                    <img
                      src={UpImage}
                      alt="Up Arrow"
                      style={{ width: "30px", height: "20px" }}
                    />
                  }
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                >
                  <Typography>{data.question}</Typography>
                </AccordionSummary>
              </div>
              <div className="accordion-details">
                <AccordionDetails>
                  <Typography>{data.answer}</Typography>
                </AccordionDetails>
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
