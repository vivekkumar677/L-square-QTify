import * as React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Chip,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./card.css";

export default function Cards({ card, type }) {
  let cardData;

  if (type !== "Songs") {
    cardData = card;
  }

  return (
    <>
      <Tooltip
        title={type !== "Songs" && `${card?.songs.length} songs`}
        placement="top"
      >
        <Link
          to={{ pathname: "/songs", state: { cardData } }}
          style={{ textDecoration: "none" }}
        >
          <div className="card-body">
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  className="card-image"
                  component="img"
                  height="140"
                  image={card?.image}
                  alt={card?.title}
                />
                <CardContent>
                  {type === "Songs" ? (
                    <Chip
                      label={`${card?.likes} likes`}
                      sx={{ backgroundColor: "black", color: "white" }}
                    />
                  ) : (
                    <Chip
                      label={`${card?.follows} follows`}
                      sx={{ backgroundColor: "black", color: "white" }}
                    />
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
            {card?.title}
          </Typography>
        </Link>
      </Tooltip>
    </>
  );
}
