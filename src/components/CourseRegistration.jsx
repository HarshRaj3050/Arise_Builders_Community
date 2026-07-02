import { forwardRef, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  Building2,
  BookOpen,
  GraduationCap,
  Code2,
  Link,
  Users,
  MessageSquare,
  Award,
  CalendarDays,
  Shield,
} from "lucide-react";

const CourseRegistration = forwardRef(function CourseRegistration(props, ref) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeRegNumber: "",
    college: "",
    branch: "",
    linkedin: "",
    github: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await axios.post("/api/course", formData);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        collegeRegNumber: "",
        college: "",
        branch: "",
        linkedin: "",
        github: ""
      });
    } catch (err) {
      setError(
        err?.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <button className="w-fit px-5 py-2 rounded-full border border-blue-500/40 text-blue-400 text-sm mb-8">
            ✦ Join Arise Course
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-12 md:leading-16 lg:leading-21">
            Register For
            <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Job-Ready AI
            </span>
            <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Powered Course
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-xl leading-relaxed">
            Take the next step towards building real products, boosting your
            skills, and launching your career with AI.
          </p>

          <div className="mt-6 space-y-2">
            <Feature icon={<GraduationCap size={22} />} text="100+ hours of live training" />
            <Feature icon={<Code2 size={22} />} text="Full Stack + DevOps + System Design" />
            <Feature icon={<Users size={22} />} text="Mentorship + Career Guidance" />
            <Feature icon={<MessageSquare size={22} />} text="Discord Community Access" />
            <Feature icon={<Award size={22} />} text="Certification Included" />
          </div>

          <div className="mt-12 max-w-md border border-blue-500/20 rounded-2xl p-6 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl border border-blue-500/30 flex items-center justify-center">
                <CalendarDays className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Classes Start Soon</h4>
                <p className="text-blue-400 mt-1">Mon-Sat (8:30 PM) From 1 July</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div id="course-registration" className="scroll-mt-32 max-w-162.5 w-full h-auto lg:h-auto border border-blue-500/40 rounded-3xl p-6 lg:p-7 bg-[#050b18] shadow-[0_0_40px_rgba(59,130,246,0.08)]">
          {/* Header */}
          <div ref={ref} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-blue-500/40 flex items-center justify-center">
              <User size={22} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Course Registration</h2>
              <p className="text-sm text-gray-400 mt-1">
                Fill in your details to secure your seat.
              </p>
            </div>
          </div>

          <div className="h-px bg-blue-500/40 my-4" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 mb-5">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              icon={<User size={18} />}
              value={formData.fullName}
              onChange={handleChange}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                icon={<Mail size={18} />}
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                icon={<Phone size={18} />}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <InputField
              label="College Registration Number"
              name="collegeRegNumber"
              placeholder="Enter your college registration number"
              icon={<BookOpen size={18} />}
              value={formData.collegeRegNumber}
              onChange={handleChange}
            />

            <InputField
              label="College / University"
              name="college"
              placeholder="Enter your college or university name"
              icon={<Building2 size={18} />}
              value={formData.college}
              onChange={handleChange}
            />

            {/* Branch - text input */}
            <InputField
              label="Branch"
              name="branch"
              placeholder="e.g. Computer Science, Mechanical, etc."
              icon={<BookOpen size={18} />}
              value={formData.branch}
              onChange={handleChange}
            />

            {/* LinkedIn - text input */}
            <InputField
              label="Linkedin"
              name="linkedin"
              placeholder="LinkedIn profile link"
              icon={<BookOpen size={18} />}
              value={formData.linkedin}
              onChange={handleChange}
            />

            {/* Github - text input */}
            <InputField
              label="Github"
              name="github"
              placeholder="Github profile link"
              icon={<BookOpen size={18} />}
              value={formData.github}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 mt-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-500 text-base font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Register Now →"}
            </button>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
              <Shield size={14} className="text-blue-400" />
              <span>Your information is secure and will not be shared.</span>
            </div>
          </form>

          {/* Success Message */}
          {success && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              🎉 Registration successful! We will be in touch soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default CourseRegistration;

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400">
        {icon}
      </div>
      <span className="text-xl text-gray-200">{text}</span>
    </div>
  );
}

function InputField({ label, name, placeholder, icon, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block mb-3 text-lg">{label}</label>
      <div className="h-16 border border-gray-700 rounded-xl px-5 flex items-center gap-4">
        <span className="text-gray-400">{icon}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}