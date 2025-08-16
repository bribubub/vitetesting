// src/data/projectsData.js

export const projects = [
  {
    slug: 'Obstacle Avoiding Robotic car Project',
    title: 'Obstacle Avoiding Robotic car Project',
    image: '/robotic1.jpg',
    githubLink: 'https://github.com/bribubub/Obstacle-Avoiding-Robotic-car-Project.git', 
    // --- DETAIL TAMBAHAN UNTUK PROYEK INI ---
    overview: 'An autonomous robotic car project that utilizes an Arduino UNO, ultrasonic sensors, and servos for real-time navigation and obstacle avoidance. The system employs a C/C++ control algorithm to manage motor and servo functions, including a robotic arm for picking and dropping objects. The design focuses on a modular hardware architecture and was validated through field testing to reduce navigation errors.',
    challenges: 'The primary challenges of this project were integrating various hardware components, developing a non-blocking control algorithm for seamless navigation, and refining the sensor logic through iterative testing to minimize errors like false stops.',
  },
  {
    slug: 'Web-based Library Management System',
    title: 'Web-based Library Management System',
    image: '/libary2.jpg',
    githubLink: 'https://github.com/bribubub/Libary-data-base.git', 
    // --- DETAIL TAMBAHAN UNTUK PROYEK INI ---
    overview: 'My portfolio highlights my expertise in building functional and dynamic web applications. A key project is the Library Management System, which I developed to streamline library operations. This system features a dual-interface for librarians and members, managing tasks such as book inventory, user registration, and book issuance. It leverages MySQL database triggers and stored procedures to automate a range of processes, from calculating late fees to sending email reminders. This project showcases my proficiency in full-stack development, database management, and implementing secure, multi-user platforms.',
    challenges: ' this project is its robust and interconnected design, handling multiple user roles and automating core library functions. It demonstrates proficiency in both front-end and back-end development, specifically in using MySQL triggers to automate inventory and finances, and in implementing complex business rules and secure access controls.',
  },
  {
    slug: 'brin',
    title: 'Brin Project',
    image: '/brin1.jpg',
     githubLink: 'https://github.com/bribubub/AMCS-Mushroom-Detection-Camera.git', 
    // --- DETAIL TAMBAHAN UNTUK PROYEK INI ---
    overview: 'This BRIN project focuses on developing an intelligent camera system that utilizes IoT (Internet of Things) devices, specifically the ESP32-CAM. The goal is to detect certain objects or conditions in real-time and provide automatic notifications. The system is designed for applications in agriculture,  Key technologies used include the ESP32-CAM microcontroller for image acquisition, Wi-Fi communication for data transfer, and integration with a cloud platform for data processing and storage. ',
    challenges: 'One of the main challenges was optimizing object detection performance on resource-constrained hardware (ESP32-CAM) and ensuring efficient data transfer. The solution involved firmware optimization, image compression, and the use of lightweight communication protocols.',
  },
];