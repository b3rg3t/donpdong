import React from "react";
import { useAmp } from "next/amp";

interface VideoProps {
  // width: string;
  // height: string;
}

const Video = (): React.ReactElement => {
  const isAmp = useAmp();
  return isAmp ? (
    <>
      <amp-video
        width="640"
        height="600"
        layout="fill"
        loop=""
        autoPlay=""
        muted=""
        rotate-to-fullscreen=""
        // poster="/static/inline-examples/images/kitten-playing.png"
      >
        <source src="/videos/Teaser.mp4" type="video/mp4" />
        <div fallback>
          <p>This browser does not support the video element.</p>
        </div>
      </amp-video>
      <style jsx global>{`
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          z-index: -1;
        }

        .video-overlay {
          width: 100%;
          height: auto;
          max-height: auto;
        }

        .video-overlay {
          width: 100%;
          height: auto;
          max-height: none;
        }
      `}</style>
    </>
  ) : (
    <video playsInline autoPlay loop muted>
      <source src="/videos/Teaser.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
