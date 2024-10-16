export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Naaz M N',
    position: 'Event Lead, SSOSC at Srinivas Institute of Technology',
    img: 'assets/Naaz.jpg',
    review:
      'Nuhayd is a very hardworking individual with a good intellect and a passion for learning. I would highly recommend him for any ML or data engineering projects.',
  },
  {
    id: 2,
    name: 'Nivin K S',
    position: 'Assistant Professor at Srinivas Institute of Technology',
    img: 'assets/Nivin K S.jpg',
    review:
      'Nuhayd consistently performs well in every subject and does his work on time with a strong sense of dedication towards learning.',
  },
  {
    id: 3,
    name: 'Hooda Dhamid',
    position: 'Manager at Singularium Technologies Pvt. Ltd. ',
    img: 'assets/review4.png',
    review:
      'I can’t say enough good things about Nuhayd. His dedication towards work is phenomenal and is very well-behaved.',
  },
];

export const myProjects = [
  {
    title: 'Movie Recommendation System',
    desc: 'It is a recommender system that recommends movies based on genre and ratings of most watched movies through a kaggle based dataset. It has a unique feature selection technique where it selects genres and ratings of movies all together and based on the average rating closest to what movie is entered by the user, the top 15 movies are suggested by the system.',
    subdesc:
      'Built as an interface with tkinter library in python.',
    href: '',
    texture: '/textures/project/MOVIE.mp4',
    logo: '/assets/Movie.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Data Visualization',
        path: 'assets/Data.png',
      }
    ],
  },
  {
    title: 'Automated Coral Health Assessment System for Reef Conservation',
    desc: 'The Coral Health Assessment Website (ACHAS) allows users to assess the health status of coral reefs through image uploads. By leveraging machine learning algorithms, this tool provides a convenient way to identify and evaluate coral health without requiring physical dives.',
    subdesc:
      'ACHAS is a prototype version built using HTML CSS and JavaScript and Flask with the integration of tensorflow/keras deep learning models to identify and predict the health of corals and deployed using Render.',
    href: 'https://github.com/Nuhayd12/ACHAS_',
    texture: '/textures/project/ACHAS.mp4',
    logo: '/assets/ACHAS.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png ',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Flask',
        path: '/assets/flask.png',
      },
      {
        id: 5,
        name: 'Render',
        path: '/assets/render.png',
      },
      {
        id: 6,
        name: 'Python',
        path: '/assets/python.png',
      },
    ],
  },
  {
    title: 'Wholesale Management System',
    desc: 'The Wholesale Management System is a PHP-based web application designed to manage wholesale products, customers, transactions, and suppliers. This system provides functionalities for customers to browse and purchase products, while administrators can manage the product inventory and track transactions.',
    subdesc:
      'With login portals for both customer and supplier this system is user-friendly and easy to use. It is built with PHP, HTML, CSS, JavaScript and MySQL and hosted using XAMPP. Its unique functionality is to provide sales analysis of products sold and supplied on a monthly basis. It also provides inventory management for products and suppliers.',
    href: 'https://github.com/Nuhayd12/Wholesale_MS',
    texture: '/textures/project/WMS.mp4',
    logo: '/assets/box.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/sql.png',
      },
      {
        id: 4,
        name: 'PHP',
        path: '/assets/web.png',
      },
      {
        id: 5,
        name: 'XAMPP',
        path: '/assets/xampp.png',
      },
      {
        id: 6,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
    ],
  },
  {
    title: 'Face Detection using PCA',
    desc: 'It is a deep learning model that can be used to detect faces in an image. It can be used in real-time face recognition.',
    subdesc:
      'Built with Tensorflow library in python and run on jupyter notebook with real time images of different people.',
    href: 'https://github.com/Nuhayd12/PCA',
    texture: '/textures/project/PCA.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Machine Learning',
        path: '/assets/deep-learning.png',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python.png',
      },
      {
        id: 3,
        name: 'Database',
        path: '/assets/database-storage.png',
      },
      {
        id: 4,
        name: 'Streamlit',
        path: '/assets/Streamlit.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Singularium Technologies',
    pos: 'Data Entry/Analytics Intern',
    duration: 'Aug 2024 - Sep 2024',
    title: "Used company software to analyze data and perform statistical operations to maintain and enter data into database through invoice mapping.",
    icon: '/assets/database-storage.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'MotionCut',
    pos: 'Python Developer',
    duration: 'Oct 2023 - Nov 2023',
    title: "Supported continuous improvement initiatives by staying up-to-date with industry best practices in\n" +
      "Python/C++ programming methodologies and techniques.\n" +
      "Developed and maintained a Python-based web applications and documentation with bug fixes.\n" ,
    icon: '/assets/python.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Academor',
    pos: 'Machine Learning Intern',
    duration: 'Jun 2023 - Jul 2023',
    title: "Developed machine learning model to predict loan approval based on applicant data.\n" +
      "Utilized python and scikit-learn library to perform data preprocessing and analysis\n" +
      "Built a loan approval model and collaborated with cross-functional teams to optimize loan approval process.\n" ,
    icon: '/assets/deep-learning.png',
    animation: 'victory',
  }

];
