import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GradientSpheres from "../ui/GradientSpheres";
import { bentoSocialLinks } from "../constants";
import { Alien } from "../ui/models/Alien";
import TitleHeader from "../ui/TitleHeader";
import SocialLink from "../ui/SocialLink";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";

function About() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);

  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        once: true,
        markers: false,
      },
    });

    const split = SplitText.create(headingRef.current, {
      type: "chars",
    });

    tl.set(headingRef.current, { autoAlpha: 1 });

    split.chars.forEach((char, i) => {
      tl.fromTo(
        char,
        {
          transformOrigin: "center -160px",
          z: 0.1,
          autoAlpha: 0,
          rotation: Math.random() < 0.5 ? 90 : -90,
        },
        {
          rotation: 0,
          autoAlpha: 1,
          ease: "elastic.out",
          duration: 2.4,
        },
        0.3 + i * 0.06
      );
    });

    // 🌸 Animate flower after heading finishes
    gsap.to(flowerRef.current, {
      x: 300,
      rotate: 360,
      ease: "none", // pure scroll control
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // Adjust to control when it starts
        end: "bottom center", // Adjust to control when it ends
        scrub: true,
        markers: false,
      },
    });

    // ✂️ SplitText animation for lines & words (e.g., for paragraphs or other headings)
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        gsap.from(self.lines, {
          duration: 1.2,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "15% 20%",
            stagger: 1.2,

            once: true,
          },
        });
      },
    });
  }, []);

  return (
    <section
      id='about'
      ref={sectionRef}
      className='flex-center overflow-hidden relative md:p-0 px-5'
    >
      <GradientSpheres
        sphere1Class='about-gradient-sphere about-sphere-1'
        sphere2Class='about-gradient-sphere about-sphere-2'
      />

      <div className='container w-full h-full md:my-40 my-20 relative z-10'>
        <TitleHeader
          title='About Me'
          number='01'
          text='Passionate Creator, Lifelong Learner'
        />
        <div className='md:mt-20 mt-10'>
          <div className='grid grid-cols-12 md:grid-rows-12 gap-5'>
            <div className='md:col-span-7 col-span-12 row-span-5'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div>
                  <img
                    src='/images/flower.svg'
                    alt='flower'
                    className='md:w-40 w-20'
                    ref={flowerRef}
                  />
                </div>
                <div className='mt-5'>
                  <h4
                    ref={headingRef}
                    className='opacity-0 text-blue-50 md:text-5xl text-3xl capitalize'
                  >
                    mostafa beder
                  </h4>

                  <p className='md:text-2xl mt-4 md:mt-6 split'>
                    As a Frontend Developer, I have an eye for details and a
                    strong understanding of{" "}
                    <span className='text-pink-100'>user experience</span>. I
                    excel at translating design mockups into fully
                    <span className='text-blue-300'> functional </span> websites
                    that not only look
                    <span className='text-lime-400'> great </span>
                    but also provide seamless navigation and optimal
                    <span className='text-emerald-400'> performance </span>
                    .I have the ability to collaborate with designers and
                    backend developers to ensure smooth project execution from
                    start to finish.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:col-span-5 col-span-12 row-span-5'>
              <div className='bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60'>
                <div className='w-full h-full'>
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className='md:col-span-6 col-span-12 row-span-3'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col h-full justify-center gap-2'>
                  <h1 className='gradient-title md:text-3xl text-2xl font-medium'>
                    Web Development 🕸️
                  </h1>
                  <p className='md:text-2xl max-w-96 split'>
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:col-span-6 col-span-12 row-span-3'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col h-full justify-center gap-2'>
                  <h1 className='gradient-title md:text-3xl text-2xl font-medium'>
                    Freelancing (❁´◡`❁)
                  </h1>
                  <p className='md:text-2xl max-w-96 split'>
                    Ready to turn ideas into polished, high-quality web
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12 row-span-4'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col justify-around h-full'>
                  <h5 className=' gradient-title md:text-4xl text-2xl font-bold'>
                    BE YOURSELF!
                  </h5>
                  <h5 className='gradient-title md:text-4xl text-2xl font-bold'>
                    BE DIFFERENT!
                  </h5>
                  <h5 className='gradient-title md:text-4xl text-2xl font-bold'>
                    BUILD DIFFERENT!
                  </h5>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <SocialLink key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
