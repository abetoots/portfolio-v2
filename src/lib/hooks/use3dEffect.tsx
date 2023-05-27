import React, { useEffect, useRef, useState } from "react";
import { CgKey } from "react-icons/cg";

const use3dEffect = <T extends HTMLElement>({
  perspectiveRef,
  perspective = "1000px",
  useWindowForRotation = false,
  divideBy = 25,
}: {
  perspectiveRef?: React.RefObject<T>;
  perspective?: string;
  useWindowForRotation?: boolean;
  divideBy?: number;
}) => {
  const [isEnteringContainer, setIsEnteringContainer] = useState(false);

  const containerRef = useRef<T>(null);
  const animateElRef = useRef<T>(null);

  useEffect(() => {
    //Rotate an element based on the center point of that element
    const rotateElement = (e: MouseEvent) => {
      if (animateElRef.current && containerRef?.current) {
        // if (useWindowForRotation) {
        //   console.log("window.innerWidth", window.innerWidth);
        //   console.log("window.innerHeight", window.innerHeight);
        // } else {
        //   console.log(
        //     "containerRef.current.clientWidth",
        //     containerRef.current.clientWidth
        //   );
        //   console.log(
        //     "containerRef.current.clientHeight",
        //     containerRef.current.clientHeight
        //   );
        // }

        const rotateWidth = useWindowForRotation
          ? window.innerWidth
          : containerRef.current.clientWidth;
        const rotateHeight = useWindowForRotation
          ? window.innerHeight
          : containerRef.current.clientHeight;

        //if useWindowForRotation is true, then use screenX and screenY
        //otherwise, use offsetX and offsetY which refers to the position of the mouse relative to the top left corner of the container
        //NOTE: screenX/Y refers to the position of the mouse relative to the top left corner of the ENTIRE screen/monitor
        const substractWidth = useWindowForRotation ? e.screenX : e.offsetX;
        const subtractHeight = useWindowForRotation ? e.screenY : e.offsetY;

        // console.log("substractWidth", substractWidth);
        // console.log("subtractHeight", subtractHeight);

        //divide by two to get center width/height
        const xAxis = (rotateWidth / 2 - substractWidth) / divideBy;
        const yAxis = (rotateHeight / 2 - subtractHeight) / divideBy;
        animateElRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };

    const onCursorLeave = () => {
      setIsEnteringContainer(false);
      if (animateElRef.current) {
        animateElRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      }
    };

    const onCursorEnter = () => {
      setIsEnteringContainer(true);
    };

    if (containerRef?.current) {
      //cursor movement in container animation
      containerRef.current.addEventListener("mousemove", rotateElement);

      //cursor enter container
      containerRef.current.addEventListener("mouseenter", onCursorEnter);

      //cursor leave container
      containerRef.current.addEventListener("mouseleave", onCursorLeave);
    }

    if (animateElRef.current) {
      // enables 3d effect by preserving 3d space
      animateElRef.current.style.transformStyle = "preserve-3d";
    }

    if (perspectiveRef?.current) {
      perspectiveRef.current.style.perspective = perspective;
    }

    return () => {
      if (containerRef?.current) {
        containerRef.current.removeEventListener("mousemove", rotateElement);
        containerRef.current.removeEventListener("mouseenter", onCursorEnter);
        containerRef.current.removeEventListener("mouseleave", onCursorLeave);
      }
    };
  }, []);

  return { animateElRef, isEnteringContainer, containerRef };
};

export default use3dEffect;
