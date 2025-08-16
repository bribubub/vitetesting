// src/data/projectsData.js

export const projects = [
  {
    slug: 'website-portofolio-laravel',
    title: 'Website Portofolio Laravel',
    description: 'Portofolio pribadi yang dibangun dengan PHP Laravel untuk mendemonstrasikan keahlian backend.',
    image: '/images/project-laravel.png',
    // --- DETAIL TAMBAHAN UNTUK PROYEK INI ---
    overview: 'Proyek ini bertujuan untuk membuat situs portofolio yang dinamis dan cepat menggunakan framework Laravel. Fokus utamanya adalah pada arsitektur backend yang bersih dan manajemen konten yang mudah.',
    challenges: 'Tantangan utama adalah mengimplementasikan sistem routing yang efisien dan mengelola state formulir kontak di sisi server, termasuk validasi dan pengiriman email notifikasi.',
  },
  {
    slug: 'aplikasi-iot-monitoring',
    title: 'Aplikasi IoT Monitoring',
    description: 'Sistem monitoring data sensor secara real-time menggunakan React dan Firebase.',
    image: '/images/project-iot.png',
    // --- DETAIL TAMBAHAN UNTUK PROYEK INI ---
    overview: 'Aplikasi ini dirancang untuk memvisualisasikan data dari sensor IoT (seperti suhu dan kelembapan) secara real-time. Menggunakan React untuk frontend dan Firebase Realtime Database sebagai backend.',
    challenges: 'Tantangan terbesar adalah memastikan data ter-update secara instan di antarmuka pengguna tanpa perlu me-refresh halaman dan mengelola koneksi real-time dengan efisien.',
  },
  {
    slug: 'brin',
    title: 'Brin Project',
    image: '/brin1.jpg',
    // --- DETAIL TAMBAHAN UNTUK PROYEK INI ---
    overview: 'This BRIN project focuses on developing an intelligent camera system that utilizes IoT (Internet of Things) devices, specifically the ESP32-CAM. The goal is to detect certain objects or conditions in real-time and provide automatic notifications. The system is designed for applications in agriculture,  Key technologies used include the ESP32-CAM microcontroller for image acquisition, Wi-Fi communication for data transfer, and integration with a cloud platform for data processing and storage. ',
    challenges: 'One of the main challenges was optimizing object detection performance on resource-constrained hardware (ESP32-CAM) and ensuring efficient data transfer. The solution involved firmware optimization, image compression, and the use of lightweight communication protocols.',
  },
];