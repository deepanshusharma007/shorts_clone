import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   db.collection("videos").onSnapshot((snapshot) =>
  //     setVideos(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);
  useEffect(() => {
    const q = query(collection(db, 'videos'));
    
    onSnapshot(q, (snapshot) => {
    setVideos(snapshot.docs.map((doc) => doc.data()))
    });
  }, []);


  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;