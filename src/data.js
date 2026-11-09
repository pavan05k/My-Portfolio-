/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to update your portfolio content & links.
 *  Everything marked PLACEHOLDER is a link you still need to fill in.
 * ─────────────────────────────────────────────────────────────
 */

// A link equal to PLACEHOLDER renders as a disabled-looking button with a
// "link not added yet" tooltip, so nothing broken is ever shown to visitors.
export const PLACEHOLDER = '#'

export const profile = {
  name: 'Pavan Mareed',
  initials: 'PM',
  title: 'Full-Stack Developer | MERN Stack | AI/ML Enthusiast',
  roles: ['Full-Stack Developer', 'MERN Stack Developer', 'AI/ML Enthusiast'],
  intro:
    "I'm passionate about building scalable web applications and intelligent solutions that solve real-world problems. I enjoy transforming ideas into functional, user-friendly products through software engineering and AI.",
  email: 'mareedpavan99521@gmail.com',
  phone: '+91 8919360780',
  location: 'Miryalguda, India',
  githubUser: 'pavan05k',
}

export const links = {
  github: `https://github.com/${profile.githubUser}`,
  linkedin: 'https://www.linkedin.com/in/pavan05k',
  email: `mailto:${profile.email}`,
  // Put your resume PDF in the /public folder with this exact name (or change the name here).
  resume: '/Pavan_Mareed_Resume.pdf',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  heading: 'A Little About Me',
  paragraphs: [
    "I'm Pavan Mareed, a Computer Science and Engineering student at Bharath Institute of Higher Education and Research, Chennai.",
    'I am passionate about full-stack development, artificial intelligence and problem-solving. I enjoy developing applications that combine intuitive user interfaces with powerful backend systems.',
    'My focus is on writing clean code, learning new technologies and building practical projects that create meaningful impact.',
  ],
  stats: [
    { value: 3, suffix: '', label: 'Major Projects' },
    { value: 4, suffix: 'th', label: 'Place – HackAiThon 2.0' },
    { value: 50, suffix: '+', label: 'Students Reached Through Knowledge Sharing' },
    { value: 8.6, decimals: 1, suffix: '/10', label: 'CGPA' },
  ],
}

// `icon` keys are resolved in components/TechIcon.jsx
export const skills = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    title: 'Frontend Development',
    items: [{ name: 'React.js', icon: 'react' }],
  },
  {
    title: 'Backend Development',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'REST APIs', icon: 'rest' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'SQLite', icon: 'sqlite' },
    ],
  },
  {
    title: 'AI/ML & Libraries',
    items: [
      { name: 'MediaPipe', icon: 'mediapipe' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'NLP', icon: 'nlp' },
      { name: 'AST Analysis', icon: 'ast' },
      { name: 'LLM Integration', icon: 'llm' },
      { name: 'gTTS', icon: 'tts' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
]

export const projects = [
  {
    id: 'travel',
    title: 'Travel Booking App',
    category: ['Full-Stack Development', 'MERN Stack'],
    period: '2025 – Present',
    description:
      'Developed a full-stack travel booking platform with property listings, search filters and booking functionality.',
    features: [
      '10+ property listing features',
      'Search and filtering functionality',
      '8 RESTful APIs for listings, search and bookings',
      'Token-based authentication and password encryption',
      'MongoDB query optimization',
      'Pagination and lazy loading',
      'Improved page load time by 40%',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    github: 'https://github.com/pavan05k/Wanderlust',
    demo: 'https://wanderlust-nwcc.onrender.com/listings',
    image: null, // optional: put a screenshot in /public and set e.g. '/travel.png'
    mock: 'travel',
    accent: ['#3b82f6', '#22d3ee'],
  },
  {
    id: 'formiq',
    title: 'FormIQ – AI-Powered Virtual Gym Coach',
    category: ['Artificial Intelligence', 'Computer Vision'],
    period: '2026 – Present',
    description:
      'Built a real-time AI fitness coach that analyzes exercise movements, tracks repetitions and provides voice feedback to improve workout form.',
    features: [
      'Real-time pose estimation using MediaPipe',
      'Exercise detection and repetition counting',
      'Joint-angle-based posture analysis',
      'LLM-powered natural-language feedback',
      'Voice feedback using gTTS',
      'Workout sessions and progress tracking',
      'Authentication and SQLite database integration',
    ],
    stack: ['Python', 'MediaPipe', 'OpenCV', 'LLM', 'gTTS', 'Streamlit', 'WebRTC', 'SQLite'],
    github: 'https://github.com/pavan05k/AI-Gym-Coach',
    demo: 'https://ai-realtime-gym-coach-2.netlify.app/',
    image: null,
    mock: 'pose',
    accent: ['#8b5cf6', '#3b82f6'],
  },
  {
    id: 'skillproof',
    title: 'SkillProof – AI-Powered Developer Skill Verification Platform',
    category: ['AI', 'Full-Stack Development'],
    period: '2026 – Present',
    description:
      'Built a multi-service platform that verifies developer skills using real evidence from GitHub, LeetCode and LinkedIn.',
    features: [
      'GitHub API integration',
      'LeetCode GraphQL API integration',
      'Apify integration',
      'AST-based code analysis',
      'NLP-based text analysis',
      'FastAPI AI analysis service',
      'Skill Confidence Score generation',
      'Cryptographically signed Verifiable Credentials',
    ],
    stack: [
      'Python',
      'FastAPI',
      'NLP',
      'AST Analysis',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    github: 'https://github.com/pavan05k/Skill-Proff',
    demo: PLACEHOLDER,
    image: null,
    mock: 'score',
    accent: ['#22d3ee', '#8b5cf6'],
  },
]

export const education = [
  {
    school: 'Bharath Institute of Higher Education and Research, Chennai',
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    period: '2023 – 2027',
    detail: 'CGPA: 8.6/10',
  },
]

export const achievements = [
  {
    featured: true,
    title: 'HackAiThon 2.0 – 4th Place',
    text: 'Secured 4th place among 50 teams at HackAiThon 2.0 (2024) in my first hackathon, working in a team under time pressure.',
    year: '2024',
  },
  { title: 'Agent X Hackathon', text: 'Participated in Agent X Hackathon.', year: 'Participation' },
  { title: 'RIFT 26 Hackathon', text: 'Participated in RIFT 26 Hackathon.', year: 'Participation' },
  { title: 'GDGH DevFest 2025', text: 'Attended GDGH DevFest 2025.', year: '2025' },
]

export const certifications = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    meta: 'Scored 61%',
    link: PLACEHOLDER, // PLACEHOLDER → certificate URL
  },
  {
    title: 'Full-Stack Web Development (MERN Stack)',
    issuer: 'Apna College',
    meta: '2024',
    link: PLACEHOLDER,
  },
  {
    title: 'Prime AI/ML Certification',
    issuer: 'Apna College',
    meta: 'Certification',
    link: PLACEHOLDER,
  },
]

export const leadership = [
  {
    org: 'GeeksforGeeks',
    role: 'Campus Ambassador',
    period: 'January 2026 – Present',
    points: [
      'Organized 3 peer-to-peer knowledge-sharing sessions.',
      'Explained technical concepts to 50+ students.',
    ],
  },
  {
    org: 'LetsUpgrade EdTech',
    role: 'Student Ambassador',
    period: 'October 2025 – December 2025',
    points: [
      'Guided and supported 30+ students.',
      'Helped students with AI and web development upskilling programs.',
    ],
  },
]

export const contact = {
  heading: "Let's Build Something Together.",
  text: "Have an interesting project, opportunity or collaboration in mind? I'd love to connect and discuss it.",
}

/**
 * Contact form email service (EmailJS – free tier works fine).
 * Create a `.env` file (see .env.example) with:
 *   VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 * If these are missing, the form falls back to opening the visitor's email app
 * (mailto) and tells them so honestly — it never pretends a message was sent.
 */
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
