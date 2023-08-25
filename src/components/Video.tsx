import videoSrc from "../assets/imgs/yakir-video.mp4";
export default function OrderModal({ closeVideo }: closeVideo) {
  return (
    <section className="video-section" id="one"  onClick={() => closeVideo()}>
      <button onClick={() => closeVideo()}>X</button>
      <video autoPlay controls width="100%"   >
        <source src={videoSrc} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </section>
  );
};


