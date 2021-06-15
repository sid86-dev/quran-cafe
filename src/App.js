import './App.css';
import './index.css';
import meccaone from './images/darker.jpg'
import medina from './images/medina2.jpg'
import bgthree from './images/oldmadinatwo.jpg'
import mecca from './images/meccanew.jpg'
import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"



function App() {

  const [isPlaying, setIsPlaying] = useState(true)

  const [isMuted, setIsMuted] = useState(true)


  const hiddenPlayer = {
    pointerEvents: "none",
    userSelect: "none",
    position: "fixed",
    top: "100%",
    left: "100%",
  };




  return (

    <div

    >
      <div className="flex py-16	 justify-center min-h-screen ">
        <div class="text-center lg:w-2/3 w-full">
          <button
            class="text-3xl text-center font-black ...  font-extrabold	tracking-wide	 "
          >  وَاِذَا قُرِئَ الۡقُرۡاٰنُ فَاسۡتَمِعُوۡا لَهٗ وَاَنۡصِتُوۡا لَعَلَّكُمۡ تُرۡحَمُوۡنَ‏  ۝ </button>


          <p class="text-l py-3	text-center  font-mono  font-extrabold text-white-800 ">
            So when the Qur'an is recited, listen carefully to it, and keep silent so that you may, be shown mercy.
          </p>
          <p class="text-l 	text-center  font-mono  font-extrabold text-white-800 ">
            [7:204]
          </p>
          <div class="flex justify-center">

            {isPlaying === false && (
              <motion.button
                onClick={() => setIsPlaying(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            )}

            {isPlaying === true && (
              <motion.button
                onClick={() => setIsPlaying(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>




            )}


            {/* <button
              onClick={() => setPlay(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </button> */}
          </div>
        </div>

      </div>

      <div class="absolute top-0 left-0 right-9 flex items-center justify-between p-4">
        <div class="relative -top-0.5">
          <div class="flex items-center space-x-1">
            <span class="text-xs">
              Online
            </span>
          </div>
        </div>

      </div>





      <div
        id='vignette'
        style={{
          backgroundImage: `url('${meccaone}')`,
          backgroundSize: "cover",
          opacity: "0.7"

        }}>

        <div
          id='vin'>
          <div
            id='vignette'
            class="flex flex-col items-center md:h-screen md:justify-center px-4 py-16 md:py-0">

          </div>

        </div >

        <div>




          <ReactPlayer
            url='https://www.youtube.com/watch?v=bEGm_DHmiuk&list=PLxGJ20Im19wOWIfITK3KL69qm2j8kb3gI&ab_channel=%D9%85%D8%AD%D8%A8%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%85%D8%AD%D8%A8%D8%A7%D9%84%D8%AE%D9%8A%D8%B1'
            style={hiddenPlayer}
            playing={isPlaying}
            controls={false}
            // width="100vw"
            // height="200vw"
            muted={isMuted}
            volume={1}
            playsinline={true}
            onPlay={() => setIsMuted(false)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </div >


  );


}

export default App;
