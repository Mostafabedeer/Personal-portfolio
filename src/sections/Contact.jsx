import { useForm } from "react-hook-form";
import ContactExperience from "../ui/ContactExperience";
import TitleHeader from "../ui/TitleHeader";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty("Email is required"),

    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data) {
    try {
      toast.loading("Sending your message...", {
        position: "top-left",
      });
      setLoading(true);
      const payload = {
        name: data.name,
        email: data.email,
        title: data.subject,
        message: data.message,
        time: new Date().toLocaleString(),
      };

      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, {
        publicKey: userID,
      });
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Sorry, there was an error sending your message.", {
        position: "top-left",
      });
    } finally {
      toast.dismiss();
      toast.success("Your message has been sent successfully!", {
        position: "top-left",
      });
      console.log("SUCCESS!", data);
      reset(initialValues);
      setLoading(false);
    }
  }
  return (
    <section id='contact'>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='container mx-auto px-5 md:px-0'>
        <div className='md:py-20 py-10'>
          <div>
            <div className='md:mb-20 mb-10'>
              <TitleHeader
                title={"Contact Me"}
                number={"05"}
                text={"Let's collaborate on tailored, sustainable solutions."}
              />
            </div>
          </div>
          <div>
            <div className='grid grid-cols-12 order-1 grid-rows-12 gap-4'>
              {/* 1 */}
              <div className='order-1 md:order-none col-span-12 md:col-span-5 md:row-span-12 row-span-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex flex-col gap-8 text-2xl  '>
                    <div className='flex flex-col gap-3'>
                      <label
                        htmlFor='name'
                        className='block font-medium text-2xl md:text-4xl capitalize '
                      >
                        name
                      </label>
                      <input
                        {...register("name")}
                        id='name'
                        type='text'
                        placeholder='(Example: Tommy)'
                        className='w-full bg-black-300 placeholder:text-2xl placeholder:font-light p-5 rounded-xl'
                      />
                      {errors.name && (
                        <span className='text-red-500 text-sm'>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label
                        htmlFor='email'
                        className='block font-medium text-2xl md:text-4xl capitalize '
                      >
                        Email address
                      </label>
                      <input
                        {...register("email")}
                        id='email'
                        type='email'
                        placeholder='hello@gmail.com'
                        className='w-full bg-black-300 placeholder:text-2xl placeholder:font-light p-5 rounded-xl'
                      />
                      {errors.email && (
                        <span className='text-red-500 text-sm'>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label
                        htmlFor='subject'
                        className='block font-medium text-2xl md:text-4xl capitalize '
                      >
                        Subject
                      </label>
                      <input
                        {...register("subject")}
                        id='subject'
                        type='text'
                        placeholder='Enter your subject'
                        className='w-full bg-black-300 placeholder:text-2xl placeholder:font-light p-5 rounded-xl'
                      />
                      {errors.subject && (
                        <span className='text-red-500 text-sm'>
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label
                        htmlFor='message'
                        className='block font-medium text-2xl md:text-4xl capitalize '
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        id='message'
                        rows={5}
                        type='text'
                        placeholder='Enter your message'
                        className='w-full bg-black-300 placeholder:text-2xl placeholder:font-light p-5 rounded-xl'
                      />
                      {errors.message && (
                        <span className='text-red-500 text-sm'>
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    <button
                      disabled={loading}
                      type='submit'
                      className='bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-50'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              {/* 2 */}
              <div className=' col-span-12  md:order-2 md:col-span-7 md:row-span-12 row-span-6'>
                <div className='w-full h-full'>
                  <ContactExperience />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
