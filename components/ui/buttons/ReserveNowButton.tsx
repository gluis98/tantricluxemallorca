'use client';

import React from 'react';

const ReserveNowButton = ({ text }: { text: string }) => {
  const handleClick = () => {
    // Esto navega a la página que gestiona la redirección a WhatsApp.
    window.location.href = '/whatsapp';
  };

  return (
    <button
      onClick={handleClick}
      className="tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors"
    >
      {text}
    </button>
  );
};

export default ReserveNowButton;