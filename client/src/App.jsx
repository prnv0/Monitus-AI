import { useEffect, useState, useRef } from "react";
import Dropbox from "./components/Dropbox";
import Prompt from "./components/Prompt";
import Button from "@mui/material/Button";
import Reaction from "./components/Reaction";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
// import Voice from "./components/Voice";

function App() {
  const [leftWidth, setLeftWidth] = useState(0);

  const carsousel = useRef();

  useEffect(() => {
    setLeftWidth(carsousel.current.scrollWidth - carsousel.current.offsetWidth);
  }, []);
  return (
    <div className='bg-gradient-to-tr from-blue-700 via-teal-600 to-slate-400 h-screen w-screen flex flex-col'>
      <div className='flex flex-col justify-center'>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}>
          <img
            src='/monitus_branding.svg'
            alt='Monitus Branding'
            className='h-32 w-1/4  mx-auto mt-16'
          />
        </m.div>

        <div className='justify-center flex pt-32'>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className='bg-[#ffffffaf] justify-around text-black rounded-2xl p-8 font-bold flex gap-8 md:gap-10 lg:gap-16 text-lg shadow-xl  max-h-32 sm:max-w-xl md:max-w-[55rem] lg:max-w-6xl xl:max-w-full'>
            <Dropbox />
            <Prompt />
            {/* <Voice /> */}
            <FontAwesomeIcon
              className='mt-4 hover:scale-110 hover:transition hover:duration-500 sm:text-2xl sm:pt-3 md:text-3xl lg:pt-2'
              // size='2x'
              icon={faMicrophone}
              style={{ color: "#23b38f" }}
            />

            <Button
              sx={{
                backgroundColor: "#23b38f",
                ":hover": {
                  backgroundColor: "#0e8f8e",
                },
              }}
              variant='contained'
              className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32'>
              Submit
            </Button>
          </m.div>
        </div>
        <div className='flex justify-center'>
          <div
            ref={carsousel}
            className='flex justify-center cursor-grab overflow-hidden w-3/4'>
            <m.div
              initial={{ x: leftWidth }}
              whileTap={{ cursor: "grabbing" }}
              drag='x'
              dragConstraints={{ right: leftWidth, left: -leftWidth }}
              className='max-h-lg mt-32 flex gap-16 py-4'>
              <Reaction />
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
