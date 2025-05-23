import { testimonials } from "../constants";
import GradientSpheres from "../ui/GradientSpheres";
import TestimonialItem from "../ui/TestimonialItem";
import TitleHeader from "../ui/TitleHeader";

function Testimonials() {
  return (
    <section
      id='testimonials'
      className=' relative h-full w-full overflow-hidden'
    >
      <GradientSpheres
        sphere1Class='testimonial-gradient-sphere testimonial-sphere-1'
        sphere2Class='testimonial-gradient-sphere testimonial-sphere-2'
      />
      <div className='container mx-auto relative my-10 md:my-20 md:px-0 px-5 z-20'>
        <div className='md:mb-20 mb-10'>
          <TitleHeader
            title={"Tech TESTIMONIALS"}
            number={"04"}
            text={"Watch our clients are saying about us."}
          />
        </div>
        <div>
          <div>
            <div className='grid grid-cols-12 grid-rows-12 gap-2.5 md:gap-4'>
              {testimonials.map((item, index) => (
                <TestimonialItem key={index} item={item} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
