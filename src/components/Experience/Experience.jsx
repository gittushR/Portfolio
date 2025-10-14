import React from "react";
import "./experience.css";
import SlideInOnScroll from "../../helpers/slideIn/SlideInOnScroll.jsx";

let jobs = [
  {
    company: "oracle",
    logo: "/oracle1.webp",
    content: `At Oracle, I contributed to building automation workflows and scalable integration systems that significantly reduced manual effort and improved operational efficiency. My work spanned backend APIs, cloud integrations, and data processing pipelines that supported business-critical functions.`,
    background: "var(--background2)",
  },
  {
    company: "intel",
    logo: "/intel.webp",
    content: `At Intel, I contributed to optimizing internal systems through automation, data pipeline refactoring, and UI development, resulting in improved performance and reduced manual effort. I also played a key role in maintaining governance workflows and ensuring consistent, SLA-compliant incident resolution across critical business operations..`,
    background: "var(--background2)",
  },
  {
    company: "nits",
    logo: "/nits.webp",
    content: `Completed B.Tech in Computer Science with distinction, backed by a 100% Government of India scholarship. Beyond academics, I led student societies, drove placement initiatives, explored research, and made unforgettable memories across fests, friends, and fun.`,
    background: "var(--background2)",
  },
];

const Experience = () => {
  return (
    <div className="experienceTimeline">
      {jobs.map((job, index) => {
        let content = (
          <SlideInOnScroll>
            <div key={index} className={`company ${job.company}`}>
              <div
                className={`clipped-bg`}
                style={{ background: `${job.background}` }}
              ></div>
              <img src={job.logo} alt={job.company} loading="lazy" />
              <p>{job.content}</p>
            </div>
          </SlideInOnScroll>
        );
        return content;
      })}
    </div>
  );
};

export default Experience;
