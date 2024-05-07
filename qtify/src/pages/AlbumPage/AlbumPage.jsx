import React, { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import axios from "axios";

const AlbumPage = (props) => {
  const [topAlbums, setTopAlbums] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
    setTopAlbums(response.data.albums || []);
    console.log(response.data);
    } catch (e) {
      console.error('Erro fetching top albums', e);
    }
  };

  const handleCollapse = () => {
    setExpanded(!expanded);
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}} >
          <h2>Top Albums</h2>
          <button onClick={handleCollapse}>{expanded ? 'Collapse' : "Expand"}</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {topAlbums.map(album => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
