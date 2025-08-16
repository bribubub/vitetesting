import React from 'react';

// Komponen ini akan menerima teks sebagai 'children'
function ShinyText({ children, className }) {
  return (
    // Kita gabungkan kelas yang ada dengan kelas untuk efek shiny
    <p className={`shiny-text ${className}`}>
      {children}
    </p>
  );
}

export default ShinyText;