import React, { useState, useEffect } from "react";

//key: AIzaSyDHZkZf3w8qPZBmMZ483xkOmvSVosbBy38
//channel ID: UCE_M8A5yxnLfW0KghEeajjw
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHZkZf3w8qPZBmMZ483xkOmvSVosbBy38&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10

// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDHZkZf3w8qPZBmMZ483xkOmvSVosbBy38&forUsername=apple&part=id


function Youtube () {
  let [YouTubeVideos, setResponse] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHZkZf3w8qPZBmMZ483xkOmvSVosbBy38&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        setResponse(youTubeVideos);
      });
  },
  []
  );

  
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {YouTubeVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    );
  }


export default Youtube;
