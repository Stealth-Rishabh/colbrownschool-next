"use client";

import React, { useState } from "react";
import ImgAndBreadcrumb from "../../../components/ImgAndBreadcrumb";
import Container from "../../../components/wrappers/Container";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../../lib/utils";
import PropTypes from "prop-types";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

function ShapeOne() {
  return (
    <svg
      className="absolute bottom-5 -left-40 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#3B823A"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-5 -right-6 sm:-right-[119px] h-[200px] w-[200px] sm:h-[479px] sm:w-[269px] -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#B91C1C"
        fillOpacity="0.2"
      />
    </svg>
  );
}

const LegacyCBS = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/legacy-of-cbs", label: "About" },
    { label: "Legacy CBS" },
  ];
  return (
    <section className="overflow-hidden">
      <ImgAndBreadcrumb
        title="Legacy of CBS"
        imageSrc="/assets/academics/Campus.webp"
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container>
        <AboutUs1 />
        <Feature />
      </Container>
    </section>
  );
};

export default LegacyCBS;

const AboutUs1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="ezy__about4 relative z-[1] light py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <ShapeOne />
      <ShapeTwo />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          <div>
            <h2 className="mb-0 text-4xl font-bold text-green-950 leading-tight md:text-end md:text-6xl md:leading-tight">
              The School: A Legacy of Excellence Since 1926
            </h2>
          </div>
          <div className="my-6 lg:px-4 lg:my-0">
            <div
              className="min-h-[500px]  bg-center rounded bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(/assets/about/colonel-william-brown.jpg)`,
              }}
            ></div>
          </div>
          <div
            className={cn(
              "px-2 sm:pr-7 line-clamp-5 sm:line-clamp-none",
              isExpanded ? "line-clamp-none" : "line-clamp-5"
            )}
          >
            <p className="mb-0 text-base leading-7 text-justify opacity-70">
              Colonel Brown Cambridge School for Indian Boys is an English
              Medium <strong>Residential School</strong> and is open to all boys
              irrespective of caste, creed or social status. The school was
              founded in the year 1926 by Col. William Brown, for Indian boys.
            </p>

            <p className="mt-6 mb-0 text-base leading-7 text-justify opacity-70">
              Affiliated to the ICSE Board of Education, the school ranks high
              amongst educational institutions in India and is amongst the best
              ICSE Schools in Dehradun.
            </p>
            <p className="mt-6 mb-0 text-base leading-7 text-justify opacity-70">
              The expansive school campus is set amidst lush green lychee and
              mango orchards spanning across ninety bighas, in the peaceful and
              pristine environs of Dalanwala – a posh area of Dehradun city.
              Generations of boys have lived and passed through the imposing raj
              era buildings on the campus and have gone on to lead across
              various key fields in India and abroad. The school attracts
              students not only from all parts of India, but also from across
              the globe.
            </p>
          </div>

          <Button
            className="sm:hidden flex items-center gap-2 mt-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show less" : "Learn more"}</span>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    img: "/assets/academics/Campus.webp",
    number: "1926",
    title: "A Vision Takes Shape",
    description:
      "In pursuit of educational reform, Col. Brown collaborated with Dr. Balbir Singh, a distinguished educator sharing his passion for quality education. Despite their strong individual perspectives and brief partnership, they parted ways amicably to pursue their distinct educational visions, laying the groundwork for what would become a prestigious institution.",
  },
  {
    img: "/assets/about/dickhouse.webp",
    number: "Dick House",
    title: "Our First Home",
    description:
      "In 1926, Col. William Brown and five pioneering students established the school at Dick House (No. 5 Dick Road). This historic property, formerly a thriving tea estate owned by Col. Dick, was situated in Dalanwala - a region renowned for its tea production. The area's rich agricultural heritage lives on through surviving tea gardens that dot the city's outskirts, offering glimpses into the school's storied beginnings.",
  },
  {
    img: "/assets/about/Since 1926.png",
    number: "MAGNA EST VERITAS",
    title: "Legacy of Excellence",
    description:
      "Our school's foundation rests on timeless values embodied in our motto 'MAGNA EST VERITAS' (Truth is Great). Our distinctive crest tells our story: the lion representing unwavering courage, the Irish shamrock honoring our roots, and the torch symbolizing the eternal flame of knowledge. These elements continue to inspire and guide each generation of students toward excellence.",
  },
];

const FeatureItem = ({ feature, index, isExpanded, onToggle }) => (
  <div className="grid grid-cols-12 mx-0 mb-6 md:mb-0">
    <div
      className={cn("col-span-12 md:col-span-6 relative z-20 p-0", {
        "md:order-2": index % 2,
      })}
    >
      <div className="relative h-full w-full z-20 p-0 overflow-hidden">
        <Image
          src={feature.img}
          alt={feature.title}
          fill

          className="object-cover transition-all duration-300 hover:scale-110 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div
        className={cn(
          "bg-slate-100 dark:bg-slate-800 h-full flex flex-col justify-center p-6 lg:p-12"
        )}
      >
        <div className="mb-6">
          <span className="block text-4xl leading-none">{feature.number}</span>
          <span className="block mt-1 text-base uppercase">
            {feature.title}
          </span>
        </div>
        <p
          className={`mb-6 text-justify lg:mb-12 ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {feature.description}
        </p>
        <div>
          <button
            onClick={onToggle}
            className="flex items-center text-sm font-bold uppercase bg-transparent border-0 hover:text-green-900 group"
          >
            {isExpanded ? "Show less" : "Learn more"}{" "}
            <ArrowRight
              className={cn(
                "ml-2 group-hover:translate-x-1 transition-all duration-300",
                isExpanded ? "group-hover:-rotate-90" : "group-hover:rotate-90"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Feature = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="sm:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container mx-auto">
        {features.map((feature, i) => (
          <FeatureItem
            feature={feature}
            index={i + 1}
            key={i}
            isExpanded={expandedIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
};
