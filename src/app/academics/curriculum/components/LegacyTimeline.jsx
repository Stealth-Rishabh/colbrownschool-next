"use client";

import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function LegacyTimeline() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-200 to-green-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-green-950 mb-8 md:mb-12 text-center"
        >
          Col Brown School- Top Boys Residential School
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <ChevronDown className="w-8 h-8 text-green-700 animate-bounce" />
        </motion.div>
        <Feature />
      </div>
    </section>
  );
}

const features = [
  {
    img: "/assets/about/Since 1926.png",
    title: "Legacy of 99 Years ",
    description:
      "Established in 1926, Col Brown School has been nurturing young minds for nearly a century. Our rich heritage and time-tested educational approach have shaped generations of successful leaders and professionals.",
  },
  {
    img: "/assets/academics/StudentRatio.webp",
    title: "Student Teacher Ratio 8:1",
    description:
      "Our low student-to-teacher ratio ensures personalized attention and mentoring for every student. This enables deeper learning engagement and helps teachers identify and nurture each student's unique potential.",
  },
  {
    img: "/assets/landing/academics.webp",
    title: "Ranked among top 10 Boys Residential School in North India",
    description:
      "Our consistent academic excellence and holistic development approach has earned us recognition among India's premier residential schools. We maintain high educational standards while fostering character development and leadership skills.",
  },
  {
    img: "/assets/academics/Disciplined.webp",
    title: "Disciplined Environment",
    description:
      "We cultivate a structured environment that instills self-discipline, responsibility and strong moral values. Our daily routine and code of conduct help shape well-rounded individuals with exemplary character.",
  },
  {
    img: "/assets/academics/Area.webp",
    title: "Spread Across 63+ Acre area",
    description:
      "Our sprawling campus provides an ideal setting for both academic pursuits and extracurricular activities. The vast grounds house modern facilities while preserving the natural beauty of our historic location.",
  },
];

const FeatureItem = ({ feature, index }) => (
  <div className="grid grid-cols-12 mx-0 mb-6 md:mb-0">
    <div
      className={cn("col-span-12 md:col-span-6 relative z-20 p-0", {
        "md:order-2": index % 2,
      })}
    >
      <div className="relative z-20 p-0 overflow-hidden">
        <Image
          src={feature.img}
          alt={feature.title}
          width={600}
          height={400}
          className="object-cover w-full max-h-96 sm:max-h-full transition-all duration-300 hover:scale-110 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div
        className={cn(
          "bg-white h-full flex flex-col justify-center p-6 lg:p-12"
        )}
      >
        <div className="mb-6">
          <span className="block sm:text-4xl text-2xl text-red-600 sm:font-bold font-semibold leading-none">
            {feature.title}
          </span>
        </div>
        <p className="mb-6 text-justify text-lg lg:mb-12">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Feature = () => {
  return (
    <section className="text-zinc-900 relative overflow-hidden z-10">
      <div className="container max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <FeatureItem feature={feature} index={i + 1} key={i} />
        ))}
      </div>
    </section>
  );
};
