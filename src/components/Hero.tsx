import React from 'react';
import { Heart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8 animate-bounce">
          <Heart className="w-10 h-10 text-rose-500" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 leading-tight">
          Maaf ya,
          <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
            Tis
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Aku janji nggak akan manggil kamu "entis" lagi 🥺
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => document.getElementById('promise')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
          >
            Baca Janji Aku
          </button>
        </div>
      </div>
    </section>
  );
};