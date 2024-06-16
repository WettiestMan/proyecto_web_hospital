import { useState, useEffect, useRef } from "react";

const Play = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#003449">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
  </svg>
);
const Pause = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#003449">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
    <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
  </svg>
);
const IconPlayer = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#003449">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2.168 11.605c-1.285 -1.927 -4.354 -2.132 -6.387 -.777a1 1 0 0 0 1.11 1.664c1.195 -.797 3.014 -.675 3.613 .223a1 1 0 1 0 1.664 -1.11m1.268 -3.245c-2.469 -1.852 -5.895 -2.187 -8.608 -.589a1 1 0 0 0 1.016 1.724c1.986 -1.171 4.544 -.92 6.392 .465a1 1 0 0 0 1.2 -1.6m1.43 -3.048c-3.677 -2.298 -7.766 -2.152 -10.977 -.546a1 1 0 0 0 .894 1.788c2.635 -1.317 5.997 -1.437 9.023 .454a1 1 0 1 0 1.06 -1.696" />
  </svg>
);
const Prev = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#003449">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
    <path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
  </svg>
);
const Next = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#003449">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
    <path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
  </svg>
);

const playList = [
  "/music/msc01.mp3",
  "/music/msc02.mp3",
  "/music/msc03.mp3"
];

export function SongPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.volume = .008
    audioRef.current.src = playList[currentSongIndex];
    // if (isPlaying) {
    //   audioRef.current.play();
    // }
  }, [currentSongIndex]);

  useEffect(() => {
    const handleEnded = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playList.length);
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleClick = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }
  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playList.length - 1 : prevIndex - 1
    );
    !isPlaying && setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playList.length);
    !isPlaying && setIsPlaying(true);
  };

  return (
    <aside className="fixed bottom-2 right-2 rounded-lg bg-[#acf1bd] bg-opacity-70 backdrop-blur-sm z-10 group">
      <picture className="group-hover:hidden">
        <IconPlayer />
      </picture>
      <audio ref={audioRef}/>
      <main className="flex-col p-2 gap-1 hidden group-hover:flex items-center">
        <section className="flex gap-2">
          <button className="rounded-full p-1 border-[#003449] border-2 hover:scale-105 active:bg-[#acf1bd] active:scale-100 transition-transform duration-100"
          onClick={handlePrev}
          >
            <Prev />
          </button>
          <button
            className="rounded-full p-1 border-[#003449] border-2 hover:scale-105 active:bg-[#acf1bd] active:scale-100 transition-transform duration-100"
            onClick={handleClick}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button className="rounded-full p-1 border-[#003449] border-2 hover:scale-105 active:bg-[#acf1bd] active:scale-100 transition-transform duration-100"
          onClick={handleNext}
          >
            <Next />
          </button>
        </section>
        <section>
          <input
            type="range"
            name=""
            id=""
            className="block accent-[#003449] w-32"
          />
        </section>
      </main>
    </aside>
  );
}

export default SongPlayer;