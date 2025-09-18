"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SocialLinks from "./SocialLinks";
import WhatsAppButton from "./WhatsAppButton";
import LinkSection from "./LinkSection";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0.6, 1]);

  const footerLinks = {
    "Quick Links": [
      { name: "About CBS", href: "/about/legacy-of-cbs" },
      { name: "Admissions", href: "/admission/admission-procedure" },
      // { name: "Blog", href: "/blog" },
      { name: "Alumni Registration", href: "/alma-mater" },
      {
        name: "View Result",
        href: "https://www.colbrownschool.com/cbs_prbms/login",
        target: "_blank",
      },
      { name: "Register Now", href: "/admission/registration" },
      { name: "Contact", href: "/contact-us" },
      { name: "Blog", href: "/blog" },  
    ],
    "Campus Life": [
      { name: "Hostel", href: "/boarding-life/hostel" },
      { name: "Facilities", href: "/about/infrastructure" },
      { name: "Activities", href: "/beyond-classroom/clubs-at-cbs" },
      // { name: "Photo Gallery", href: "#" },
      // { name: "Video Gallery", href: "#" },
    ],
    Academics: [
      { name: "News & Events", href: "/beyond-classroom/news-and-events" },
      { name: "Fee Structure", href: "/admission/fee-details" },
      { name: "Newsletter", href: "/newsletter" },
      {
        name: "Calendar",
        href: "https://www.colbrownschool.com/assets/calendar-january-may-2025-B8lPefh4.pdf",
        target: 1,
      },
      { name: "Notice(s)", href: "/notices" },
    ],
  };

  return (
    <motion.footer
      className="overflow-hidden relative text-gray-300 bg-gray-900"
      style={{ opacity }}
    >
      {/* <WhatsAppButton /> */}

      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1 }}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 p-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Col Brown Cambridge School"
                  width={200}
                  height={60}
                  className="p-2 bg-white"
                />
              </motion.div>
            </Link>
            <motion.address
              className="space-y-3 text-sm not-italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="https://www.google.com/maps/place/Col.+Brown+Cambridge+School/@30.322328,78.056969,1446m/data=!3m1!1e3!4m6!3m5!1s0x390929b641fd13a5:0xf2f0dda3f2210a65!8m2!3d30.3223276!4d78.0569688!16s%2Fm%2F0bmjr27?hl=en&entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                target="_blank"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  5 Kasturba Road, Dalanwala
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Dehradun – 248 001
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Uttarakhand, India
                </motion.p>
              </Link>
              <motion.p
                className="pt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="tel:+916395114363"
                  className="inline-flex items-center transition-colors hover:text-white group"
                >
                  <motion.span className="inline-block w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                  Admission Helpline: +91 63951 14363
                </a>
              </motion.p>
              <motion.p
                className=""
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="tel:01353593138"
                  className="inline-flex items-center transition-colors hover:text-white group"
                >
                  <motion.span className="inline-block w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                  For Enquiry: 0135 3593138
                </a>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=principal@colbrownschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center break-all transition-colors hover:text-white group sm:break-normal"
                >
                  <motion.span className="inline-block w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                  principal@colbrownschool.com
                </a>
              </motion.p>
            </motion.address>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links, target], index) => (
            <LinkSection
              key={title}
              title={title}
              links={links}
              target={target}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 mt-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
            <motion.p
              className="text-sm text-center text-gray-400 sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              © Col. Brown Cambridge School 2025. All&nbsp;
              <a
                href="https://www.thedesignvillage.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-default text-inherit text-decoration-none"
              >
                Rights Reserved
              </a>
            </motion.p>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
