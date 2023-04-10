import React from 'react';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 antialiased'>
      <div className='container mx-auto px-4 py-8'>{children}</div>
    </div>
  );
}