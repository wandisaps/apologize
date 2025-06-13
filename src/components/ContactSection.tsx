import React from "react";
import { MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-8">
          <MessageSquare className="w-8 h-8 text-purple-600" />
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
          Yuk Ngobrol Lagi!
        </h2>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Kalau kamu udah siap, yuk kita ngobrol lagi seperti biasa. Aku pengen
          ngobrol sama kamu, Tis! 😊
        </p>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-10 rounded-2xl">
            <MessageSquare className="w-16 h-16 text-rose-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Mari Ngobrol
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kapan aja kamu mau ngobrol, aku siap kok! discord ku selalu
              online, apa mau main roblox bareng? 💬
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
