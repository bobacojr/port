"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // Keep motion for button animations
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const nameLabelRef = useRef<HTMLLabelElement>(null);
  const emailLabelRef = useRef<HTMLLabelElement>(null);
  const messageLabelRef = useRef<HTMLLabelElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // GSAP context for cleanup
  const ctx = useRef<gsap.Context | null>(null);

  // GSAP animations on component mount
  useEffect(() => {
    // Create a GSAP context
    ctx.current = gsap.context(() => {
      // Animation for the heading
      gsap.from(headingRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current, // Trigger when the section comes into view
          start: 'top 80%', // Start animation when the top of the section is 80% in view
          end: 'bottom 20%', // End animation when the bottom of the section is 20% in view
          toggleActions: 'play none none reverse', // Play animation when in view, reverse when out of view
        },
      });

      // Animation for the name label and input
      gsap.from(nameLabelRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animation for the email label and input
      gsap.from(emailLabelRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animation for the message label and textarea
      gsap.from(messageLabelRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animation for the submit button
      gsap.from(submitButtonRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Refresh ScrollTrigger on component mount
    ScrollTrigger.refresh();

    // Cleanup function to revert GSAP context
    return () => {
      if (ctx.current) {
        ctx.current.revert(); // Reverts all GSAP animations and ScrollTriggers
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_qelzi9u', // Replace with your service ID
        'template_zokvjpa', // Replace with your template ID
        {
          from_name: form.name,
          to_name: 'Kaleb', // Replace with your name
          from_email: form.email,
          to_email: 'ksmaulding@comcast.net', // Replace with your email
          message: form.message,
        },
        'IDoYPaAWo1dcRqQam' // Replace with your public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you, I will get back to you as soon as possible.');

          // Reset the form
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <div ref={sectionRef} id='contact' className="flex-col-reverse w-full h-full flex gap-10 overflow-hidden sm:items-center pb-11">
      <motion.div
        className="flex-[0.75] rounded-2xl px-11 mt-2"
      >
        <p
          ref={headingRef}
          className="flex text-[1.3rem] md:text-[1.6em] lg:text-[1.92em] xl:text-[2.6em] uppercase tracking-widest md:justify-center"
        >
          Get in touch
        </p>
        <h3
          ref={headingRef}
          className="flex text-5xl md:text-6xl lg:text-7xl xl:text-8xl thernaly tracking-wider font-black text-myteal md:justify-center"
        >
          Contact
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex mt-6 flex-col gap-8 md:items-center"
        >
          <label ref={nameLabelRef} className="flex flex-col md:items-center">
            <span className="mb-2 thernaly tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-3 sm:w-[28em] lg:w-[34em] px-6 rounded-2xl border-2 border-mygray font-medium"
            />
          </label>
          <label ref={emailLabelRef} className="flex flex-col md:items-center">
            <span className="mb-2 thernaly tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-3 sm:w-[28em] lg:w-[34em] px-6 rounded-2xl border-2 border-mygray font-medium"
            />
          </label>
          <motion.label ref={messageLabelRef} className="flex flex-col md:items-center">
            <span className="mb-2 thernaly tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message here."
              className="py-4 sm:w-[36em] lg:w-[46em] px-6 rounded-2xl border-2 border-mygray font-medium"
            />
          </motion.label>
          <motion.button
            ref={submitButtonRef}
            type="submit"
            className="flex py-3 px-8 border-2 thernaly tracking-wider border-black font-medium shadow-md shadow-primary rounded-2xl w-fit md:w-[6em] text-md sm:text-lg md:justify-center md:items-center md:text-xl lg:text-2xl 2xl:text-3xl"
            whileHover={{ borderColor: "#048A81", color: "#048A81", scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;