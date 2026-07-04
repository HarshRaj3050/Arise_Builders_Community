import React from "react";

const features = [
  "100+ hours of live training",
  "Full Stack + DevOps + System Design",
  "Startup Mentorship + Funding Opportunity",
  "Discord Community Access - Peer Learning",
  "Mentorship + Career Guidance",
];

const pills = [
  { label: "Schedule", value: "Mon-Sat (8:30 PM)" },

  { label: "Language", value: "Hinglish" },
  { label: "Class", value: "Live Classes" },
];

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="2,6 5,9 10,3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export default function CourseCard({ onJoinClick }) {
  return (
    <div
      className="
        relative
        z-10
        w-[350px]
        md:w-[430px]
        rounded-[20px]
        border border-[#2b4f73]
        px-[18px]
        pt-[22px]
        pb-[18px]
        bottom-5
        text-[#e3efff]
        bg-[linear-gradient(180deg,#1e4f8a_0%,#14365f_12%,#0d1f36_20%,#070d16_30%,#05070a_100%)]
      "
    >
      <div className="mb-[18px] flex flex-wrap gap-[7px]">
        {pills.map((pill) => (
          <div
            key={pill.label}
            className="flex items-center gap-1 rounded-full border border-[#2a3d30] bg-[#16231b] px-[11px] py-[5px] text-[12px]"
          >
            <span>✦</span>
            <span className="text-blue-500">{pill.label}:</span>
            <span className="font-semibold">{pill.value}</span>
          </div>
        ))}
      </div>

      <div className="mb-[10px] flex items-center gap-[10px]">
        <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-sky-500">
          <UserIcon />
        </div>
        <span>
          Build <strong>Real Products</strong> (Not Just Projects)
        </span>
      </div>

      <div className="mb-[10px] flex items-center gap-[10px]">
        <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-sky-500">
          <CloudIcon />
        </div>
        <span>
          Classes Starting from <strong></strong>11<sup>th</sup> july 2026<strong/>
        </span>
      </div>

      <div className="my-4 flex items-center gap-2">
        <div className="h-px flex-1 bg-blue-600" />
        <span className="text-[11px] text-blue-500">
          The Next Big Thing+
        </span>
        <div className="h-px flex-1 bg-blue-600" />
      </div>

      <div className="space-y-3">
        {features.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-[#1a5faa]">
              <CheckIcon />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onJoinClick}
        className="mt-5 mb-3 w-full rounded-lg bg-[#1557c0] py-3 font-semibold hover:bg-[#124aa3]"
      >
        Join Cohort Now →
      </button>

      <a
        href="https://learnershakil.notion.site/full-stack-development"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-lg border border-[#2a3d30] py-3 text-center hover:bg-white/5"
      >
        View Full Syllabus →
      </a>
    </div>
  );
}