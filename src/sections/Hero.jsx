import { useRef } from "react";
import GradientSpheres from "../ui/GradientSpheres";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import HeroExperience from "../ui/HeroExperience";

function Hero() {
  const headingRef = useRef(null);
  const headingRef2 = useRef(null);
  useGSAP(() => {
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(headingRef.current, {
        x: (mouseX / window.innerWidth - 0.5) * 30,
        y: (mouseY / window.innerHeight - 0.5) * 30,
        delay: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(headingRef2.current, {
        x: (mouseX / window.innerWidth - 0.5) * 30,
        y: (mouseY / window.innerHeight - 0.5) * 30,
        delay: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <section
      id='home'
      className='w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5'
    >
      <div className='gradient-box w-full h-96 absolute bottom-0 left-0 z-20'></div>
      <GradientSpheres
        sphere1Class='gradient-sphere sphere-1'
        sphere2Class='gradient-sphere sphere-2'
      />

      <div className='w-full h-full flex-center'>
        <div className='container relative w-full h-full'>
          <div className='md:mt-40 mt-20'>
            <p className='font md:text-2xl text-base'>
              <span className='animate-pulse'>👋</span> Hey, I&apos;m Here
            </p>
            <h1
              ref={headingRef}
              className='font-bold md:text-7xl lg:text-9xl text-4xl uppercase'
            >
              mostafa beder
              <br /> react
            </h1>
          </div>
          <div className='absolute w-full z-30 bottom-20 right-0'>
            <div className='flex justify-between items-end'>
              <div className='flex flex-col items-center md:gap-5 gap-1'>
                <p className='md:text-base text-xs'>Explore</p>
                <img
                  src='images/arrowdown.svg'
                  alt='arrowdown'
                  className='size-7 animate-bounce'
                />
              </div>
              <div className='flex flex-col items-end'>
                <img src='/images/shape.svg' alt='shape' />
                <h2
                  ref={headingRef2}
                  className='font-bold lg:text-9xl md:text-7xl text-5xl'
                >
                  DEVELOPER
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute w-full h-full inset-0 z-10'>
        <HeroExperience />
      </div>
    </section>
  );
}

export default Hero;
