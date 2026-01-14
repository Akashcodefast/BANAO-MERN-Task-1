export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-xl">🦑</span>
          Squid
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <span>Home</span>
          <button className="px-5 py-2 rounded-md bg-gradient-to-r from-pink-400 to-purple-500 text-white">
            Download Template
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative text-center pt-24 pb-64">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Beautiful Landing Page <br /> Design for You
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          A good design is not only aesthetically pleasing, but also
          functional. It should be able to solve the problem
        </p>

        <button className="mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500">
          Download Template
        </button>

        {/* Mockup */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-120px] w-[900px] max-w-[95%] bg-[#161616] rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-56 rounded-xl bg-[#1f1f1f]" />
            <div className="h-56 rounded-xl bg-[#1f1f1f]" />
            <div className="h-56 rounded-xl bg-[#1f1f1f]" />
            <div className="h-40 rounded-xl bg-[#1f1f1f]" />
            <div className="h-40 rounded-xl bg-[#1f1f1f]" />
            <div className="h-40 rounded-xl bg-[#1f1f1f]" />
          </div>
        </div>
      </section>

      {/* ================= FEATURE BOXES ================= */}
      <section className="pt-72 pb-32 px-8">
        <h2 className="text-3xl font-semibold mb-4">Feature Boxes</h2>
        <p className="text-gray-400 max-w-lg mb-12">
          A good design is not only aesthetically pleasing, but also
          functional. It should be able to solve the problem
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#171717] p-8 rounded-2xl text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                ⭐
              </div>

              <h3 className="font-semibold mb-2">Fully Customizable</h3>

              <p className="text-gray-400 text-sm">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GUIDE SECTION ================= */}
      <section className="py-40 px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="relative w-[400px] h-[400px] rounded-full border border-white/10 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#1f1f1f] flex items-center justify-center text-xl">
            🦑
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold mb-6">
            We're here to guide and help you at all times
          </h2>

          <p className="text-gray-400 mb-6">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500">
            Download
          </button>
        </div>
      </section>

      {/* ================= COMPANIES ================= */}
      <section className="py-28 text-center bg-[#111]">
        <h2 className="text-2xl font-semibold mb-10">
          Companies we Worked <br /> With in Since 2015
        </h2>

        <div className="flex justify-center gap-6 flex-wrap text-gray-400">
          {["Smile", "Urban", "Natural", "Wave", "Happy", "Alisa"].map((c) => (
            <div key={c} className="px-6 py-3 bg-[#1a1a1a] rounded-md">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 flex justify-center">
        <div className="w-[90%] max-w-5xl bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-12 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div>
            <p className="text-sm mb-2">Love our Our Tool?</p>
            <h2 className="text-3xl font-bold">
              Fell Free to Join our <br /> 15 Days Free Trial
            </h2>

            <button className="mt-6 px-6 py-3 bg-black rounded-md">
              Download Template
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-40 px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-[350px] h-[350px] rounded-full border border-white/10" />

        <div className="max-w-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <input
            className="w-full mb-4 px-4 py-3 rounded-md bg-[#1a1a1a]"
            placeholder="Your Email"
          />
          <input
            className="w-full mb-4 px-4 py-3 rounded-md bg-[#1a1a1a]"
            placeholder="Name"
          />
          <textarea
            className="w-full mb-6 px-4 py-3 rounded-md bg-[#1a1a1a]"
            rows="4"
            placeholder="Message"
          />

          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-purple-500">
            Get in Touch
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111] py-14 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-400 text-sm">
          <div>
            <div className="text-white font-semibold mb-4 flex items-center gap-2">
              🦑 Squid
            </div>
            <p>
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <h4 className="text-white mb-4">Sections</h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Section One</li>
                <li>Section Two</li>
                <li>Section Three</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-500 flex justify-between">
          <span>All Rights Reserved Inkyy.com 2022</span>
          <div className="flex gap-4">
            <span>🐦</span>
            <span>💼</span>
            <span>💬</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
