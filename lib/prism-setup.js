// lib/prism-setup.js
import 'prismjs/themes/prism-tomorrow.css'; // Import tema Prism.js
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Tambahkan bahasa yang ingin Anda highlight

// Menambahkan Prism ke global scope
if (typeof window !== 'undefined') {
    window.Prism = Prism;
}
