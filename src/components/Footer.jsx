"use client";

export default function Footer() {
  return (
    <footer className=" bg-black text-white px-6 md:px-30 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        
        {/* Left Side */}
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Arise
          </h1>

          <p className="text-lg italic text-zinc-300 leading-snug">
            Your Day, in Perfect Rhythm.
          </p>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-none tracking-tight">
              Work Smarter,
            </h2>

            <h2 className="text-3xl md:text-4xl font-semibold leading-none tracking-tight">
              Not Harder
            </h2>
          </div>

          <p className="max-w-lg text-zinc-500 text-md leading-relaxed">
            Take control of your time with our all-in-one productivity app.
            Organize tasks, track progress, and focus on what matters—without
            the overwhelm.
          </p>

          <p className="text-zinc-500 text-sm">
            © 2026 Copyright
          </p>
        </div>

        {/* Menu */}
        <div className="md:pl-20 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-8">
            Menu
          </h3>

          <ul className="space-y-6 text-zinc-500 text-md">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Services
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Team
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-col pl-10">
          <h3 className="text-2xl font-semibold mb-8">
            Navigation
          </h3>

          <ul className="space-y-6 text-zinc-500 text-md">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Blog
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Projects
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Tutorial
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Documentation
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Become a Partner
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}