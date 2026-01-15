import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-14 py-6 z-50">
        <div className="flex items-center gap-2 font-medium">
          <img
            src="/squid-logo.png"
            alt="Squid"
            className="w-16 h-16 object-contain"
          />
        </div>

        <div className="flex items-center gap-6 text-sm">
          <span className="text-gray-300">Home</span>

          {/* Sign In Button */}
          <Link
            to="/login"
            className="px-5 py-2 rounded-md text-white
                 bg-gradient-to-r from-pink-400 to-purple-500
                 hover:opacity-90 transition"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-center pt-32 pb-40 px-6 overflow-hidden">

        {/* BACKGROUND WAVE — CLEAN, DEEP TOP & BOTTOM CURVES */}
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            className="block w-[120%] h-[420px] relative left-[-10%]"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>

            <path
              d="
        M 0 0
        C 360 220, 1080 220, 1440 0
        L 1440 500
        C 1080 280, 360 280, 0 500
        Z
      "
              fill="url(#waveGradient)"
            />
          </svg>
        </div>


        {/* HERO CONTENT */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Beautiful Landing Page <br /> Design for You
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <button className="mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500">
            Download Template
          </button>

          {/* MOCKUP */}
          <div className="mt-24 flex justify-center">
            <div className="w-[920px] max-w-[95%] bg-[#161616] rounded-2xl p-8 shadow-2xl">

              <div className="grid grid-cols-3 grid-rows-2 gap-6">

                {/* LEFT TALL CARD */}
                <div className="row-span-2 bg-[#222] rounded-xl flex flex-col items-center justify-start gap-3 p-6">
                  <img src="/Vector.png" alt="Item 1" className="w-10 h-10 object-contain" />
                  <img src="/Line 15.png" alt="Item 1" className="w-28 object-contain" />

                  <img src="/Group 116.png" alt="Item 1" className="w-30 object-contain" />
                  <img src="/Group 116.png" alt="Item 2" className="w-30 object-contain" />
                  <img src="/Group 116.png" alt="Item 3" className="w-30 object-contain" />
                  <img src="/Group 116.png" alt="Item 4" className="w-30 object-contain" />
                  <img src="/Group 121.png" alt="Item 4" className="w-36 object-contain" />
                </div>

                {/* TOP MIDDLE CARD (CIRCLE CHART) */}
                <div className="bg-[#222] rounded-xl flex items-center justify-center">
                  <img
                    src="/Group 115.png"
                    alt="Squid"
                    className="w-40 h-40 object-contain"
                  />
                </div>

                {/* RIGHT TALL CARD */}
                <div className="bg-[#222] rounded-xl flex items-center justify-center h-[180px] p-4">
                  <img
                    src="/Rectangle 54.png"
                    alt="Squid"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>



                {/* BOTTOM MIDDLE HALF CARD */}
                <div className="bg-[#222] rounded-xl flex flex-col items-center justify-center gap-4 h-[180px]">
                  <img
                    src="/Group 116.png"
                    alt="Squid"
                    className="w-24 object-contain"
                  />
                  <img
                    src="/Group 132.png"
                    alt="Group 132"
                    className="w-32 object-contain"
                  />
                </div>


              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ================= FEATURES ================= */}
      <section className="pt-40 pb-32 px-14">
        <h2 className="text-3xl font-semibold">Feature Boxes</h2>
        <p className="text-gray-400 max-w-lg mt-4 mb-14">
          A good design is not only aesthetically pleasing, but also
          functional. It should be able to solve the problem
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "/Group 102.png",
            "/Group 103.png",
            "/Group 104.png",
            "/Group 105.png",
            "/Group 106.png",
            "/Group 107.png",
          ].map((src, i) => (
            <div
              key={i}
              className="bg-[#171717] p-10 rounded-2xl text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 bg-[#222] rounded-xl flex items-center justify-center">
                <img
                  src={src}
                  alt={`Feature ${i + 1}`}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="font-medium mb-2">Fully Customizable</h3>

              <p className="text-gray-400 text-sm">
                A good design is not only aesthetically pleasing, but also
                functional.
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= GUIDE ================= */}
      <section className="py-40 px-14 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-[420px] h-[420px] rounded-full border border-white/10 flex items-center justify-center text-6xl">
          <img
            src="/glob.png"
            alt="Squid"
            className="max-w-full max-h-full object-contain"
          />

        </div>

        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold mb-6">
            We're here to guide and help you at all times
          </h2>
          <p className="text-gray-400 mb-6">
            A good design is not only aesthetically pleasing, but also functional.
          </p>
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500">
            Download
          </button>
        </div>
      </section>

      {/* ================= COMPANIES ================= */}
      <section className="bg-[#111] py-28 text-center">
        <h2 className="text-3xl font-semibold mb-14 leading-tight">
          Companies we Worked <br /> With in Since 2015
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {["Smile", "Urban", "natural", "WAVE", "HAPPY", "Alisa"].map(
            (name, i) => (
              <div
                key={i}
                className="w-[140px] h-[56px]
                     flex items-center justify-center
                     bg-black rounded-xl
                     text-gray-500 text-lg
                     font-medium
                     shadow-inner"
              >
                {name}
              </div>
            )
          )}
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-32 flex justify-center">
        <div className="w-[90%] max-w-6xl bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 flex items-center justify-between">
          <div>
            <p className="text-sm mb-2">Love our Our Tool?</p>
            <h2 className="text-3xl font-bold">
              Fell Free to Join our <br /> 15 Days Free Trial
            </h2>
            <button className="mt-6 px-5 py-3 bg-black rounded-md">
              Download Template
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-center h-full w-[420px]">
            <div className="relative w-[320px] h-[320px] rounded-full border border-black/10">

              {/* CENTER LOGO */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center text-2xl">
                  🦑
                </div>
              </div>

              {/* ORBIT DOTS */}
              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xl">🌍</span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl">👥</span>
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xl">📈</span>
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl">⚙️</span>

              {/* SOFT RINGS */}
              <div className="absolute inset-8 rounded-full border border-black/10"></div>
              <div className="absolute inset-14 rounded-full border border-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-40 px-14 flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-[420px] h-[420px] rounded-full border border-white/10 flex items-center justify-center text-6xl">
          <img
            src="/symbol.png"
            alt="symbol"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            A good design is not only aesthetically pleasing, but also functional.
          </p>

          <input className="w-full mb-4 px-4 py-3 bg-[#171717] rounded-md" placeholder="Your Email" />
          <input className="w-full mb-4 px-4 py-3 bg-[#171717] rounded-md" placeholder="Name" />
          <textarea className="w-full mb-6 px-4 py-3 bg-[#171717] rounded-md" rows="4" />

          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500">
            Get in Touch
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111] px-14 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4 text-lg">
              <img src="/logo.png" alt="Item 1" className="w-30 object-contain" />
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              A good design is not only aesthetically pleasing, but also functional.
            </p>
          </div>

          <div className="flex gap-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <h4 className="mb-3">Sections</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>Home</li>
                  <li>Section One</li>
                  <li>Section Two</li>
                  <li>Section Three</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 px-2
                flex items-center justify-between
                text-xs text-gray-500">

          <span>All Rights Reserved Inkyy.com 2022</span>

          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1a1a1a]
                    flex items-center justify-center
                    text-white/70 hover:text-white
                    transition cursor-pointer">
              <img src="/ELEMENTS.png" alt="Item 1" className="w-30 object-contain" />
            </div>

            <div className="w-9 h-9 rounded-full bg-[#1a1a1a]
                    flex items-center justify-center
                    text-white/70 hover:text-white
                    transition cursor-pointer">
              <img src="/ELEMENT2.png" alt="Item 1" className="w-30 object-contain" />
            </div>

            <div className="w-9 h-9 rounded-full bg-[#1a1a1a]
                    flex items-center justify-center
                    text-white/70 hover:text-white
                    transition cursor-pointer">
              <img src="/ELEMENT3.png" alt="Item 1" className="w-30 object-contain" />
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
