import React from 'react';
import { CheckCircle, Heart, Smile, Star } from 'lucide-react';

export const CommitmentSection = () => {
  const promises = [
    {
      icon: CheckCircle,
      title: "Nggak Manggil 'Entis' Lagi",
      description: "Aku janji 100% nggak akan manggil kamu entis lagi!"
    },
    {
      icon: Heart,
      title: "Lebih Perhatian",
      description: "Aku akan lebih perhatian sama perasaan kamu"
    },
    {
      icon: Smile,
      title: "Tetap Temenan",
      description: "Semoga kita bisa tetap jadi teman baik seperti dulu"
    },
    {
      icon: Star,
      title: "Jadi Lebih Baik",
      description: "Aku akan berusaha jadi teman yang lebih baik buat kamu"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Janji-Janji Aku
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ini bukan cuma janji kosong, aku serius kok! 😊
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-100 to-purple-100 rounded-full mb-6">
                <item.icon className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-2xl font-light text-slate-800 mb-4">
              Makasih ya Tis udah mau baca ini 🙏
            </p>
            <p className="text-lg text-slate-600">
              Semoga kamu bisa maafin aku dan kita bisa tetap jadi teman baik!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};