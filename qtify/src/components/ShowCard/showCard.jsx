import React, { useMemo, useState, useEffect } from "react";
import "./showCard.css";
import Cards from "../Card/card";
import Carousel from "../Carousel/carousel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";

export default function ShowCard({ text, type }) {
  const [collapse, setCollapse] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [selectTab, setSelectTab] = useState(0);

  let url;

  if (text === "Top Albums") {
    url = "https://qtify-backend-labs.crio.do/albums/top";
  } else if (text === "New Albums") {
    url = "https://qtify-backend-labs.crio.do/albums/new";
  } else if (text === "Songs") {
    url = "https://qtify-backend-labs.crio.do/songs";
  }

  const fetchTabData = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
      const data = res.data;
      setTabs(data.data);
      // console.log(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event, newValue) => {
    setSelectTab(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setCardData(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
    fetchTabData();
  }, [url]);

  const renderCards = useMemo(() => {
    if (type === "Songs") {
      if (selectTab === 0) {
        return cardData;
      } else {
        const filteredData = cardData.filter(
          (card) => card.genre === tabs[selectTab - 1].label
        );
        return filteredData;
      }
    } else {
      return cardData;
    }
  }, [cardData, selectTab]);

  return (
    <>
      <div className="card-container">
        <div className="accordian">
          {text}
          {text !== "Songs" &&
            (collapse ? (
              <span
                className="show-all-button"
                onClick={() => setCollapse(!collapse)}
              >
                Show all
              </span>
            ) : (
              <span
                className="show-all-button"
                onClick={() => setCollapse(!collapse)}
              >
                Collapse
              </span>
            ))}
        </div>
        <div>
          {type === "Songs" && (
            <Box sx={{ marginTop: "31px", marginLeft: "32px" }}>
              <Tabs
                value={selectTab}
                onChange={handleChange}
                aria-label="scrollable auto tabs example"
                textIndicatorProps={{ style: { backgroundColor: "#34C94B" } }}
                sx={{
                  color: "#fff",
                }}
              >
                <Tab label="All" />
                {tabs.map((tab) => (
                  <Tab sx={{ color: "#ffffff" }} label={tab.label} key={tab.key} />
                ))}
              </Tabs>
            </Box>
          )}
        </div>
        <div className="show-cards">
          {collapse ? (
            <Carousel cardData={renderCards} type={type} />
          ) : (
            <Grid container spacing={3}>
              {renderCards.length !== 0 &&
                renderCards.map((card) => (
                  <Grid item xs={6} md={2} key={card.id}>
                    <Cards card={card} type={type} />
                  </Grid>
                ))}
            </Grid>
          )}
        </div>
      </div>
    </>
  );
}
