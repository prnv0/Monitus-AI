import { useEffect, useState, useRef } from "react";
import Dropbox from "./components/Dropbox";
import Prompt from "./components/Prompt";
import Button from "@mui/material/Button";
import Reaction from "./components/Reaction";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [leftWidth, setLeftWidth] = useState(0);

  const carsousel = useRef();

  useEffect(() => {
    setLeftWidth(carsousel.current.scrollWidth - carsousel.current.offsetWidth);
  }, []);
  return (
    <div className='bg-gradient-to-tr from-blue-700 via-teal-600 to-slate-400 h-screen w-screen flex flex-col'>
      <div className='flex flex-col justify-center'>
        <div className='justify-center flex pt-32'>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className='bg-[#ffffff4d] justify-around text-black rounded-2xl p-8 font-bold flex gap-28 text-lg shadow-lgw-lg max-h-32'>
            <Dropbox />
            <Prompt />
            <FontAwesomeIcon
              className='mt-4 hover:scale-110 hover:transition hover:duration-500'
              size='2x'
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
              className='w-40'>
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
