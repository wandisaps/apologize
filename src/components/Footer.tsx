import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-rose-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-8">
          <Heart className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-3xl font-light mb-6">Dari Hati ke Hati</h3>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
          Maaf ya Tis, aku janji nggak akan manggil kamu "entis" lagi. 
          Semoga kita bisa tetap berteman baik! 💜
        </p>
        
        <div className="border-t border-white border-opacity-20 pt-8">
          <p className="text-purple-200 text-sm">
            Dibuat dengan penuh penyesalan dan harapan untuk tetap berteman 🤝
          </p>
        </div>
      </div>
    </footer>
  );
};