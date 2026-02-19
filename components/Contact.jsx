'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const contactInfo = [
    { label: "Location", value: "Al Nahda, Sharjah, UAE" },
    { label: "Phone", value: "+971 6 XXX XXXX" },
    { label: "Email", value: "info@monopolyprime.ae" },
    { label: "Hours", value: "Sun–Thu: 9am – 6pm" },
  ];

  const fields = [
    { label: "Full Name", placeholder: "Your name", type: "text" },
    { label: "Email Address", placeholder: "your@email.com", type: "email" },
    { label: "Phone", placeholder: "+971 XX XXX XXXX", type: "tel" },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-[8vw] py-24 md:py-32"
    >
      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-16 md:gap-24"
      >
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label mb-4">
            ✦ Get In Touch
          </div>

          <div className="gold-line mb-6" />

          <h2 className="
            font-serif font-light
            text-[clamp(32px,4vw,52px)]
            text-[#F5F0E8]
            leading-[1.2]
            mb-10
          ">
            Visit Our
            <br />
            <em className="text-[#C9A84C] not-italic">
              Office
            </em>
          </h2>

          <div className="flex flex-col gap-6">
            {contactInfo.map(({ label, value }) => (
              <div key={label} className="flex gap-6">
                <div className="
                  text-[10px] tracking-[0.25em]
                  text-[#C9A84C]
                  uppercase
                  min-w-[80px]
                  pt-1
                ">
                  {label}
                </div>

                <div className="text-[#F5F0E8] text-sm md:text-base">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            card-glass
            p-8 md:p-10
          "
        >
          {fields.map(field => (
            <div key={field.label} className="mb-6">
              <label className="
                block mb-3
                text-[10px] tracking-[0.25em]
                text-[#C9A84C]
                uppercase
              ">
                {field.label}
              </label>

              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  w-full bg-transparent
                  border-none border-b
                  border-[#C9A84C]/30
                  focus:border-[#C9A84C]
                  outline-none
                  text-sm text-[#F5F0E8]
                  pb-2
                  transition-colors
                "
              />
            </div>
          ))}

          <div className="mb-8">
            <label className="
              block mb-3
              text-[10px] tracking-[0.25em]
              text-[#C9A84C]
              uppercase
            ">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Tell us about your ideal property..."
              className="
                w-full bg-transparent
                border-none border-b
                border-[#C9A84C]/30
                focus:border-[#C9A84C]
                outline-none
                text-sm text-[#F5F0E8]
                pb-2
                resize-none
                transition-colors
              "
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full text-xs tracking-wider"
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
