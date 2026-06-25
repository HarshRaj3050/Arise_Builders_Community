import React from "react";

const features = [
  "100+ hours of live training",
  "Learn AI + Full Stack + DevOps + System Design",
  "Startup Mentorship + Funding Opportunity",
  "Discord Community Access - Peer Learning",
  "Mentorship + Career Guidance",
];

const pills = [
  { label: "Schedule", value: "Mon-Sat (8:30 PM)" },
  { label: "Certificate", value: "Yes" },
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

export default function CourseCard() {
  return (
    <div
      className="
        md:w-[430px]
        w-[350px]
        rounded-[20px]
        border border-[#2b4f73]
        px-[18px]
        pt-[22px]
        pb-[18px]
        text-[#e3efff]
        bg-[linear-gradient(180deg,#1e4f8a_0%,#14365f_12%,#0d1f36_20%,#070d16_30%,#05070a_100%)]
      "
    >
      {/* Pills */}
      <div className="mb-[18px] flex flex-wrap gap-[7px]">
        {pills.map((pill) => (
          <div
            key={pill.label}
            className="
              flex items-center gap-1
              rounded-full
              border border-[#2a3d30]
              bg-[#16231b]
              px-[11px]
              py-[5px]
              text-[12px]
            "
          >
            <span className="text-white">✦</span>
            <span className="text-blue-500">{pill.label}:</span>
            <span className="font-semibold text-slate-100">
              {pill.value}
            </span>
          </div>
        ))}
      </div>

      {/* Feature Rows */}
      <div className="mb-[10px] flex items-center gap-[10px] text-[13.5px] text-[#d4e4da]">
        <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-sky-500 bg-black">
          <UserIcon />
        </div>
        <span>
          Build <strong>Real Products</strong> (Not Just Projects)
        </span>
      </div>

      <div className="mb-[10px] flex items-center gap-[10px] text-[13.5px] text-[#d4e4da]">
        <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-sky-500 bg-black">
          <CloudIcon />
        </div>
        <span>
          <strong>Certification</strong> Included
        </span>
      </div>

      {/* Divider */}
      <div className="my-4 flex items-center gap-2">
        <div className="h-px flex-1 bg-blue-600" />
        <span className="whitespace-nowrap text-[11px] text-blue-500">
          The Next Big Thing+
        </span>
        <div className="h-px flex-1 bg-blue-600" />
      </div>

      {/* Checklist */}
      <div className="space-y-[11px]">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-start gap-[10px] text-[13.5px] leading-[1.4] text-[#ccddd5]"
          >
            <div className="mt-[1px] flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#1a5faa] bg-[#0e2035]">
              <CheckIcon />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        className="
          mt-[18px]
          mb-[9px]
          w-full
          rounded-[10px]
          bg-[#1557c0]
          py-[14px]
          text-[15px]
          font-semibold
          text-white
          transition-all
          hover:bg-[#124aa3]
        "
      >
        Join Cohort Now →
      </button>

      <button
        className="
          w-full
          rounded-[10px]
          border-[1.5px]
          border-[#2a3d30]
          bg-transparent
          py-[13px]
          text-[15px]
          font-medium
          text-[#d4e4da]
          transition-all
          hover:bg-white/5
        "
      >
        View Full Syllabus →
      </button>
    </div>
  );
}