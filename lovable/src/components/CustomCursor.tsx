//import { useEffect, useState } from "react";
//import { motion, useMotionValue, useSpring } from "framer-motion";

//const CustomCursor = () => {
    //const [isHovering, setIsHovering] = useState(false);
    //const cursorX = useMotionValue(-100);
    //  const cursorY = useMotionValue(-100);
    
    // Smooth spring physics for the cursor
    //const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    //const cursorXSpring = useSpring(cursorX, springConfig);
    //const cursorYSpring = useSpring(cursorY, springConfig);

    //useEffect(() => {
        // Only enable on non-touch devices
        //if (window.matchMedia("(pointer: coarse)").matches) return;

        //const moveCursor = (e: MouseEvent) => {
            //cursorX.set(e.clientX);
            //cursorY.set(e.clientY);
        //};

        //const handleMouseOver = (e: MouseEvent) => {
            //const target = e.target as HTMLElement;
            //if (
                //target.tagName.toLowerCase() === 'a' ||
                //target.tagName.toLowerCase() === 'button' ||
                //target.closest('a') !== null ||
                //target.closest('button') !== null ||
                //target.classList.contains('interactive')
            //) {
                //setIsHovering(true);
            //} else {
                //setIsHovering(false);
            //}
        //};

        //window.addEventListener("mousemove", moveCursor);
        //window.addEventListener("mouseover", handleMouseOver);

        //return () => {
            //window.removeEventListener("mousemove", moveCursor);
            //window.removeEventListener("mouseover", handleMouseOver);
      //  };
   // }, [cursorX, cursorY]);

   // return (
        //<motion.div
           // className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] hidden md:block"
           //style={{
             //   x: cursorXSpring,
              //  y: cursorYSpring,
               // translateX: "-50%",
              //  translateY: "-50%",
          //  }}
           // animate={{
             //   scale: isHovering ? 2.5 : 1,
              //  opacity: isHovering ? 0.8 : 1,
         //   }}
            //transition={{
               // scale: { type: "spring", stiffness: 300, damping: 20 },
               // opacity: { duration: 0.2 }
           // }}
       // />
   // );
//};

//export default CustomCursor;
