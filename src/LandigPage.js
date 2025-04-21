import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

export default function LandingPage() {
  // Removed 'Blog' from tabs as requested
  const tabs = ['Projects', 'Experience'];
  const [activeTab, setActiveTab] = useState('Projects');

  const fadeVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div
      className="relative min-h-screen bg-black bg-cover bg-center text-gray-200"
      style={{ backgroundImage: "url('/images/hands-dot.png')" }}
    >
      {/* Nav */}
      <nav className="backdrop-blur-sm bg-black bg-opacity-40 fixed top-0 w-full z-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <motion.a
            href="https://denissud.github.io"
            className="text-xl font-semibold text-white hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            denissud.github.io
          </motion.a>
          <ul className="flex space-x-6">
            {tabs.map((tab) => (
              <li key={tab}>
                <motion.button
                  onClick={() => setActiveTab(tab)}
                  className={`pb-1 ${
                    activeTab === tab
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg" />

      {/* Content columns */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row gap-12">
        {/* Left: Intro */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Denis Sudakov
          </motion.h1>
          <motion.p
            className="text-lg max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Fueling models with coffee and code.
          </motion.p>
          <p className="text-base max-w-md text-gray-300">
            I'm a Machine Learning Engineer converting coffee into neural nets using Python, PyTorch, and Transformers. A Rust & Go tinkerer with a passion for GPU programming (rust-gpu, rust-cuda), and avid Neovim & NixOS user. Experienced in containerization: Podman, Docker, and Lima.
          </p>

          {/* Contacts */}
          <div className="flex space-x-6 text-2xl mt-4">
            {[
              { href: 'https://github.com/DenisSud', icon: FaGithub },
              { href: 'https://t.me/DenisSud2', icon: FaTelegramPlane },
              { href: 'mailto:sudakov.denis.2007@gmail.com', icon: FaEnvelope }
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                aria-label="Contact"
                className="hover:text-white transition-transform"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h3 className="font-semibold text-white mb-2">Tech Stack</h3>
            <motion.ul
              className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <li>Python (PyTorch, Transformers, pandas, numpy, Plotly)</li>
              <li>Rust (rust-gpu, rust-cuda)</li>
              <li>Go</li>
              <li>Neovim, NixOS</li>
              <li>Podman, Docker, Lima</li>
            </motion.ul>
          </div>
        </div>

        {/* Right: Tabs with scrollable content and fade overlay */}
        <div className="relative lg:w-1/2 p-6 bg-black bg-opacity-30 backdrop-blur-md rounded-2xl" style={{ minHeight: '320px' }}>
          {/* Scrollable area */}
          <div className="relative h-full overflow-y-auto pr-2">
            <AnimatePresence mode="wait">
              {activeTab === 'Projects' && (
                <motion.div key="projects" {...fadeVariant} className="space-y-6">
                  {/* PaperTuner */}
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      <a href="https://github.com/Lyra-Lab/papertuner" className="hover:underline">
                        PaperTuner
                      </a>
                    </h2>
                    <span className="text-sm text-gray-400">Apr 2025</span>
                    <p className="text-sm text-gray-300 mt-2">
                      Fine-tune any thinking LLM using GROQ with scientific knowledge and logic extracted from the latest research papers.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Python', 'PyTorch', 'Transformers', 'GROQ', 'Research'].map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white bg-opacity-10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Madiz Radiation Detector */}
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      <a href="https://github.com/DenisSud/madiz" className="hover:underline">
                        Madiz Radiation Detector
                      </a>
                    </h2>
                    <span className="text-sm text-gray-400">Jan 2025</span>
                    <p className="text-sm text-gray-300 mt-2">
                      Backend logic for a satellite-based radiation detection system using Raspberry Pi and PiCam with advanced compression algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Python', 'Raspberry Pi', 'PiCam', 'Compression', 'Satellite'].map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white bg-opacity-10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Crew Creator */}
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      <a href="https://github.com/DenisSud/crew-creator" className="hover:underline">
                        Crew Creator
                      </a>
                    </h2>
                    <span className="text-sm text-gray-400">Feb 2025</span>
                    <p className="text-sm text-gray-300 mt-2">
                      An LLM agent framework that assembles custom model "crews" tailored for specific tasks using multi-agent collaboration.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Agents', 'TypeScript', 'Node.js', 'LLMs', 'Collaboration'].map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white bg-opacity-10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Experience' && (
                <motion.div key="experience" {...fadeVariant} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Experience</h2>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                    <li>
                      <strong>Undergraduate Student</strong> @ Moscow State University (2023 – Present)
                    </li>
                    <li>
                      <strong>Freelance ML Engineer</strong> (2022 – Present)
                    </li>
                  </ul>
                </motion.div>
              )}

              {/* Blog section commented out as requested
              {activeTab === 'Blog' && (
                <motion.div key="blog" {...fadeVariant} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Blog</h2>
                  <ul className="divide-y divide-gray-600">
                    <li className="py-2">
                      <a href="/blog/intro-to-cryoET" className="hover:underline">
                        Introduction to cryo-ET: From raw data to 3D protein maps
                      </a>
                      <div className="text-sm text-gray-400">Apr 2025</div>
                    </li>
                  </ul>
                </motion.div>
              )}
              */}
            </AnimatePresence>
          </div>
          {/* Fade overlay at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 h-12 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />
        </div>
      </div>

      {/* About Me Section */}
      <motion.section
        className="relative z-10 max-w-6xl mx-auto px-6 pb-16 bg-black bg-opacity-30 backdrop-blur-md rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
        <p className="text-gray-300 mb-4">
          I'm a student at Moscow State University with a passion for AI that began at age 15. I've combined formal courses (Stanford CS229, CS230; Harvard CS50 AI) with hands-on research in deep learning, reinforcement learning, and large language models to build scalable AI solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          {/* Technical Expertise */}
          <div>
            <h3 className="font-semibold text-white mb-2">Technical Expertise</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Deep Learning</strong>: PyTorch-Lightning, PyTorch, Transformers</li>
              <li><strong>Language Models</strong>: LLM fine-tuning, prompt engineering, multi-agent systems (Hugging Face)</li>
              <li><strong>ML Infrastructure</strong>: Distributed training, model optimization, deployment pipelines</li>
            </ul>
          </div>

          {/* Languages & Research Interests */}
          <div>
            <h3 className="font-semibold text-white mb-2">Languages & Research Interests</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Languages</strong>: Python (primary), Go, Rust</li>
              <li><strong>Research</strong>: Large Language Models, Reinforcement Learning, Novel Deep Learning Architectures</li>
            </ul>
          </div>
        </div>

        {/* Connect */}
        <div className="mt-8 text-gray-300">
          <h3 className="font-semibold text-white mb-2">Connect</h3>
          <p>Feel free to reach out for collaborations on LLMs, reinforcement learning, or deep learning applications.</p>
          <p className="mt-2">
            <a href="https://github.com/DenisSud" className="underline hover:text-white">GitHub</a> |
            <a href="https://t.me/DenisSud2" className="underline hover:text-white">Telegram</a> |
            <a href="mailto:sudakov.denis.2007@gmail.com" className="underline hover:text-white">Email</a>
          </p>
        </div>
      </motion.section>
    </div>
  );
}
