// app/_data/portfolioData.ts

export const profile = {
  name: "Aryan Prakash Srivastav",
  title: "Full Stack Developer | CP Specialist",
  location: "Varanasi, India",
  email: "aryan45srivastav@gmail.com",
  phone: "+91-9795471231",
  resumeLink: "https://drive.google.com/file/d/1iho55u3qE0ORsXZl_tQ0tSlG2PajOZgT/view?usp=sharing",
  // ADD YOUR IMAGE PATH HERE:
  profileImage: "/profile.png", 
  socials: {
    linkedin: "https://www.linkedin.com/in/aryansrivastav",
    github: "https://github.com/kvothe045",
    leetcode: "https://leetcode.com/u/treebead/",
    codeforces: "https://codeforces.com/profile/treebeard"
  }
};

export const catchphrases = [
  "Astral Commit: Code Signed with Stardust ✨",
  "Launching Builds at Lightspeed...",
  "Fueling Rockets with Algorithms...",
  "Black Hole of Bugs — Let’s Debug!",
  "Turning Stardust into Software ✨",
  "Zero Gravity, Infinite Loops...",
  "Mapping the Constellations of Code...",
  "Deploying to the Final Frontier...",
  "Stardust in the Cloud ⛅ => Deploying Magic",
  "Rocket Science? Nah, Just C++ 😎",
  "Warp Speed Compilation Activated...",
  "From Stardust to Startups...",
  "Parallel Universes, Multi-threaded Minds...",
  "Hello World from the Milky Way 🌌",
  "Space-Time Complexity: Optimizing...",
  "Error 404: Gravity Not Found...",
  "Galactic Codebase: Always Expanding...",
  "Quantum Code Loading...",
  "Powered by Coffee and Stardust ✨",
  "One Small Commit for a Dev, One Giant Deploy for Production",
  "Orbiting Around Clean Architecture...",
  "Pushing Code Beyond the Event Horizon...",
  "Stars, Syntax, Success...",
  "Galactic Git Push Incoming...",
  "Milky Way Mode Enabled...",
  "Deploying Magic at Light Speed...",
  "Status: Ready to Deploy.",
  "Compiling Dreams into Reality...",
  "Space X Code: Lift Off in 3..2..1...",
  "Building the Web 3.0 Future..."
];


export const careerHistory = [
  {
    id: 1,
    category: "experience",
    title: "Web Developer Intern",
    org: "NMOLD (OPC) Pvt Ltd",
    date: "May 2025 – June 2025",
    desc: "Optimized Next.js page loads by 30%. Implemented JWT Auth & BCrypt encryption. Deployed at gcslawfirm.in.",
    link: "https://drive.google.com/file/d/1vMgRfbMzjmJGv8qWalEJz8zZavmaijZe/view",
    tech: ["Next.js", "JWT", "AWS"]
  },
  {
    id: 0,
    category: "experience",
    title: "Web 3.0 Developer",
    org: "Boulevard (Trikon Ecosystem)",
    date: "Dec 2024 - Jan 2025",
    desc: "Architected in-game finance logic on Polygon. Deployed smart contracts (ERC-1155, ERC-721) and explored NFTs.",
    link: "https://web3-gaming-marketplace-mtzc.vercel.app/",
    tech: ["Solidity", "Polygon", "Smart Contracts"]
  },
  {
    id: 2,
    category: "education",
    title: "Bachelor of Engineering (CSE)",
    org: "Chandigarh University",
    date: "2023 – Present",
    desc: "CGPA: 8.34 / 10.00. Punjab, India.",
    link: null
  },
  {
    id: 3,
    category: "education",
    title: "Senior Secondary (12th)",
    org: "CBSE Board",
    date: "2022",
    desc: "Percentage: 79%. Varanasi, India.",
    link: null
  },
  {
    id: 4,
    category: "education",
    title: "Matriculation (10th)",
    org: "CBSE Board",
    date: "2020",
    desc: "Percentage: 91%. Varanasi, India.",
    link: null
  }
];

export const skillCategories = {
  technologies: [
    "Spring Boot", "Django", "Next.js", "PostgreSQL", "RESTful APIs", "React", "Node.js", "Solidity", "Polygon"
  ],
  tools: [
    "Linux", "Git/Github", "Postman", "Docker", "VS Code", "Vercel"
  ],
  concepts: [
    "Data Structures", "Algorithms", "OOPS", "DBMS", "Operating Systems", "Computer Networks", "Web 3.0"
  ]
};

export const projects = [
  {
    id: 4,
    title: "VOCA: AI Soft-Skills",
    tech: ["Django", "Python", "HuggingFace"],
    desc: "Multimodal analysis pipeline providing real-time feedback on speech/gestures with 95% accuracy.",
    github: "https://github.com/Kvothe045",
    live: "https://voca-rouge.vercel.app/"
  }, 
  {
    id: 3,
    title: "GCS Law Firm",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    desc: "Client-facing legal application with robust backend architecture, authentication, and database connectivity.",
    github: "https://github.com/Kvothe045",
    live: "https://www.gcslawfirm.in/"
  },
  {
    id: 1,
    title: "CodeZenKai",
    tech: ["Next.js", "Node.js", "Judge0", "RESTful APIs"],
    desc: "A comprehensive coding platform for companies to assess developers, featuring real-time code execution.",
    github: "https://github.com/Kvothe045", 
    live: "https://codezenkai.vercel.app/"
  },
  {
    id: 2,
    title: "Cloud Share",
    tech: ["Spring Boot", "Cloudinary", "Java", "React"],
    desc: "Secure file sharing platform allowing users to upload and manage files on the cloud via Java backend.",
    github: "https://github.com/Kvothe045",
    live: "https://cloud-share-kappa.vercel.app/"
  },
];

export const achievements = [
  { 
    title: "1st Runner-up", 
    event: "Electrothon Hackathon (NIT Hamirpur)", 
    desc: "Innovative AI solutions",
    image: "/images/hackathon.png"
  },
  { 
    title: "Specialist (1400+)", 
    event: "Codeforces", 
    desc: "Solved 500+ DSA Problems",
    image: "/images/winner.png"
  },
  { 
    title: "College Finalist", 
    event: "Dark Pattern Busters", 
    desc: "Organised by Govt of India (DoCA)",
    image: "/images/bfcet.png"
  },
  { 
    title: "Student Co-ordinator", 
    event: "Tekathon SIH", 
    desc: "Managed 500+ participants",
    image: "/images/award.png"
  }
];
