import { useGSAP } from "@gsap/react";
import { slides } from "../constants";
import { Draggable, Flip, InertiaPlugin } from "gsap/all";
import gsap from "gsap";
import _Flip from "gsap/Flip";
import { useState } from "react";
import GradientSpheres from "../ui/GradientSpheres";
import TitleHeader from "../ui/TitleHeader";

function CarouselProject() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  // Handler for opening modal
  const handleItemClick = (slide) => {
    setCurrentSlide(slide);
    setModalOpen(true);
  };

  // Handler for closing modal
  const handleModalClose = () => {
    setModalOpen(false);
    setCurrentSlide("");
  };

  gsap.registerPlugin(Draggable, InertiaPlugin, _Flip);
  gsap.config({ trialWarn: false });
  useGSAP(() => {
    // setup tween for draggable... will likely be a scroll/observer experience in the future
    const items = gsap.utils.toArray(".item");
    const xOffset = 30;

    items.forEach((item, i) => {
      gsap.set(item, {
        transformOrigin: "-30px 0",
        x: xOffset,
        rotateY: (i * 360) / items.length,
      });
    });

    const updateZIndex = () => {
      items.forEach((item) => {
        const backText = item.querySelector(".card-text--back");
        gsap.utils.wrap(0, 360, gsap.getProperty(item, "rotateY")) < 270
          ? gsap.set(backText, { zIndex: 2 })
          : gsap.set(backText, { zIndex: 0 });
      });
    };

    const roloTL = gsap.to(items, {
      rotateY: "+=360",
      duration: 5,
      ease: "none",
      paused: true,
      onUpdate: updateZIndex,
    });
    updateZIndex();
    // draggable consts
    const proxy = document.createElement("div");
    const itemCount = items.length;
    const itemW = items[0].offsetWidth;

    // circumference of circle
    const c = (itemW + xOffset) * 2 * Math.PI;
    // arc distance from edge to edge (for snapping)
    const seg = c / itemCount;

    // wrap for tween progress scrub
    const wrapVal = gsap.utils.wrap(0, c);

    Draggable.create(proxy, {
      type: "x",
      trigger: ".item",
      inertia: true,
      onDrag: updateProgress,
      edgeResistance: 0.65,
      dragClickables: true,
      onThrowUpdate: updateProgress,
      onDragStart: function (e) {
        e.preventDefault();
      },

      snap: {
        x: (x) => {
          return Math.round(x / seg) * seg;
        },
      },
    });

    function updateProgress() {
      roloTL.progress(wrapVal(this.x) / c);
    }
  }, []);
  return (
    <section
      id='projects'
      className='relative overflow-hidden md:p-0 px-5 md:my-20 my-10'
    >
      <GradientSpheres
        sphere1Class='testimonial-gradient-sphere testimonial-sphere-1'
        sphere2Class='about-gradient-sphere testimonial-sphere-2'
      />
      <div className='container mx-auto  md:p-0 px-5 md:mt-30 md:mb-40 mt-15 mb-20'>
        <TitleHeader
          title={"My PROJECTS"}
          number={"03"}
          text={"Check my recent project below for your Goal"}
        />
      </div>
      <div className='container mx-auto '>
        <div className='wrapper'>
          <div className='rolo'>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className='item a'
                data-url={slide.img}
                onClick={() => handleItemClick(slide)}
              >
                <div className='card-text text-blue-300 card-text--back'>
                  {slide.title}
                </div>
                <img src={slide.img} />
                <div className='card-text text-blue-300'>{slide.title}</div>
              </div>
            ))}
          </div>
          <div className='spin-me'>Drag Me</div>
        </div>
      </div>

      {/* Modal view */}
      {modalOpen && (
        <div className='modal active z-50' onClick={handleModalClose}>
          <div data-flip-id='img' className='modal-image relative'>
            <button
              className=' cursor-pointer bg-black-300 z-50 absolute right-3 top-4 pb-3.5 flex-center text-4xl px-5 rounded-full text-white-50'
              onClick={handleModalClose}
            >
              x
            </button>
            <img
              src={currentSlide.img}
              alt='image project preview'
              className='w-full h-full object-cover absolute top-0 left-0 object-center  '
            />
            <div className='modal-text flex justify-between px-4 py-2 items-center absolute w-full bottom-0 left-0 z-20 bg-black-300 text-white-50'>
              <h2 className='text-3xl font-bold  '>{currentSlide.title}</h2>
              <a
                href={currentSlide.link}
                target='_blank'
                className='block h-14 w-14 mt-2 text-2xl text-white-50 '
              >
                <img
                  src='/images/arrowupright.svg'
                  alt={currentSlide.title}
                  className='w-full h-full relative'
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CarouselProject;
