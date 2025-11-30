import { Project, Research, Experience, Certificate, SocialLink } from './types';
import { Github, Linkedin, Mail, MapPin, Phone, GraduationCap, Briefcase, FileText } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Yusuf Hasan",
  role: "AI/ML Engineer & Researcher",
  shortBio: "Passionate Computer Engineer with a strong academic foundation and over 2 years of professional experience in AI/ML engineering across international organizations.",
  longBio: "I'm Yusuf Hasan, a passionate Computer Engineer. My journey spans from developing cutting-edge deep learning models to building scalable software and AI applications, with a particular focus on computer vision, autonomous systems, and intelligent software solutions.",
  email: "yusufhasan1209@gmail.com",
  phone: "+91 8979159476",
  location: "Aligarh, Uttar Pradesh, India",
};

export const ACHIEVEMENTS = [
  { label: "Research Publications", value: "8", icon: FileText },
  { label: "Citations", value: "12", icon: Briefcase },
  { label: "Intl. Internships", value: "3", icon: Briefcase },
  { label: "Major Projects", value: "6+", icon: GraduationCap },
];

export const TECH_STACK = [
  "Python", "C/C++", "Java", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Open3D",
  "React", "TypeScript", "Node.js", "Docker", "Git", "AWS", "Linux", "ROS"
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/hasanyusuf01", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/yusufhasan16/", icon: "Linkedin" },
  { platform: "Email", url: "mailto:yusufhasan1209@gmail.com", icon: "Mail" },
];

export const PROJECTS: Project[] = [
  {
    id: 'rovc',
    title: 'ROVC2.0 - Remotely Operated Vehicle',
    shortDescription: 'Complete ROV system with object detection, GUI, and sensor calibration.',
    description: 'Comprehensive ROV system incorporating advanced object detection algorithms, intuitive GUI interface, precise thruster control, IMU calibration, and pressure sensor integration for underwater exploration and research.',
    technologies: ['Python', 'Computer Vision', 'OpenCV', 'PyQt', 'Robotics'],
    features: ['Real-time object detection', 'Intuitive GUI', 'Precision thruster control'],
    github: 'https://github.com/hasanyusuf01/ROVC2.0',
    challenges: 'Integrating multiple sensor systems while maintaining real-time performance.',
    outcome: 'Fully functional ROV system capable of autonomous underwater navigation.'
  },
  {
    id: 'stewart-platform',
    title: 'Stewart Platform - 6DoF Robot',
    shortDescription: 'Custom multi-modal neural networks for predicting 6DoF in parallel robots.',
    description: 'Advanced neural network system designed to predict 6 Degrees of Freedom (6DoF) for parallel robot control, utilizing custom multi-modal neural networks for precise robotic movement prediction.',
    technologies: ['Neural Networks', 'ML', 'Python', 'TensorFlow'],
    github: 'https://github.com/hasanyusuf01/Stewart-Platform-',
    features: ['Custom multi-modal NN architecture', '6DoF prediction', 'Real-time control'],
  },
  {
    id: 'ni3d',
    title: 'Ni3D - 3D Reconstruction',
    shortDescription: 'Photogrammetry-based low-cost 3D reconstruction model.',
    description: 'Low-cost 3D reconstruction model utilizing photogrammetry techniques to create accurate 3D models from 2D images, making 3D scanning accessible and affordable.',
    technologies: ['Python', 'Computer Vision', 'Photogrammetry', 'Open3D'],
    github: 'https://github.com/hasanyusuf01/Ni3D',
  },
  {
    id: 'und-assessment',
    title: 'Drone-Nav-Agent',
    shortDescription: 'Deep Reinforcement Learning (DRL) algorithm for UAV navigation.',
    description: 'A Deep Deterministic Policy Gradient (DDPG) reinforcement learning framework designed for training agents to navigate in a 2D point particle environment.',
    technologies: ['Python', 'Reinforcement Learning', 'PyTorch', 'Gym'],
    github: 'https://github.com/hasanyusuf01/und_assessment',
  },
  {
    id: 'webhook-system',
    title: 'Webhook Integration System',
    shortDescription: 'Real-time webhook system for automated data processing.',
    description: 'Real-time webhook system designed for automated data processing and seamless integration between different services and platforms.',
    technologies: ['HTML', 'Node.js', 'Web APIs', 'MongoDB'],
    github: 'https://github.com/hasanyusuf01/webhook-repo',
  },
  {
    id: 'codes-collection',
    title: 'ML/DL Projects Collection',
    shortDescription: 'Comprehensive collection of signal and image processing projects.',
    description: 'Comprehensive repository encompassing diverse projects in machine learning, deep learning, signal processing, and image processing.',
    technologies: ['ML', 'Deep Learning', 'Signal Processing'],
    github: 'https://github.com/hasanyusuf01/Codes',
  }
];

export const RESEARCH: Research[] = [
  {
    id: 'neural-anomaly',
    title: 'Neural Network Based Anomaly Detection Method',
    abstract: 'Advanced neural network approach for detecting anomalies in network security datasets, leveraging deep learning techniques to identify unusual patterns.',
    authors: ['B Zahid Hussain', 'Yusuf Hasan', 'Irfan Khan'],
    venue: 'Authorea Preprints',
    year: '2024',
    keywords: ['Neural Networks', 'Security', 'ML'],
    citations: 5,
    doi: 'https://www.authorea.com/doi/full/10.36227/techrxiv.170906907.74394397'
  },
  {
    id: 'damage-localization',
    title: 'Hybrid Neural Network for Damage Localization',
    abstract: 'Innovative approach using hybrid neural networks for accurate detection and localization of structural damage combining multiple sensing modalities.',
    authors: ['F Moreh', 'Yusuf Hasan', 'et al.'],
    venue: 'Scientific Reports',
    year: '2025',
    keywords: ['SHM', 'Hybrid NN', 'Civil Engineering'],
    citations: 2,
    doi: 'https://doi.org/10.1038/s41598-025-92396-9'
  },
  {
    id: 'auv-software',
    title: 'Design of AUV Software Stack',
    abstract: 'Comprehensive software architecture development for autonomous underwater vehicle systems, focusing on robust control algorithms.',
    authors: ['D Singh', 'Yusuf Hasan', 'et al.'],
    venue: 'IEEE PIECON',
    year: '2023',
    keywords: ['AUV', 'Robotics', 'Control Systems'],
    citations: 2,
  },
  {
    id: 'microcrack-detection',
    title: 'MCMN Deep Learning Model for Microcrack Detection',
    abstract: 'Advanced deep learning model utilizing computer vision techniques for precise detection of microcracks across diverse material types.',
    authors: ['F Moreh', 'Yusuf Hasan', 'et al.'],
    venue: 'IEEE ICMLA',
    year: '2024',
    keywords: ['Deep Learning', 'Computer Vision', 'Materials'],
    citations: 1,
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'education',
    type: 'education',
    title: 'B.Tech Computer Engineering',
    institution: 'Zakir Husain College of Engineering (AMU)',
    duration: '2021 - 2025',
    description: "Bachelor's degree in Computer Engineering with focus on software development, algorithms, and system design. CPI: 8.67.",
    achievements: ['Dean\'s List', 'Best Project Award', 'CGPA 9.2/10']
  },
  {
    id: 'waterloo',
    type: 'work',
    title: 'AI/ML Engineer',
    institution: 'Geo Analysis Engineering (Germany)',
    duration: 'June 2023 - Feb 2025',
    description: 'Designed and deployed scalable deep learning systems for real-time microcrack detection. Built robust data pipelines for ultrasonic sensor data.',
    skills: 'Deep Learning, CNNs, Transformers, Real-time Systems'
  },
  {
    id: 'buckingham',
    type: 'work',
    title: 'Research Intern',
    institution: 'University of Buckingham (UK)',
    duration: 'March - May 2023',
    description: 'Worked on underwater video feed enhancement using GANs to improve detection performance in low-visibility environments.',
    skills: 'GANs, CycleGAN, Computer Vision, Image Enhancement'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'ml-cert',
    title: 'Machine Learning Certification',
    issuer: 'Coursera - Stanford',
    date: '2024',
    description: 'Comprehensive ML certification covering supervised and unsupervised learning.',
    skills: ['ML Algorithms', 'Python', 'Statistics']
  },
  {
    id: 'dl-cert',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    description: 'Advanced DL specialization covering neural networks, CNNs, Sequence Models.',
    skills: ['Neural Networks', 'TensorFlow', 'NLP']
  },
  {
    id: 'robotics-cert',
    title: 'Robotics & Automation',
    issuer: 'IIT Jodhpur',
    date: '2024',
    description: 'Training in robotics systems and control algorithms.',
    skills: ['Robotics', 'Control Theory', 'Automation']
  }
];
