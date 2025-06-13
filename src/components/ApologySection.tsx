import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";

export const ApologySection = () => {
  return (
    <section id="promise" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Janji Aku Buat Kamu
          </h2>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-10 md:p-16 rounded-3xl text-center">
            <Sparkles className="w-12 h-12 text-rose-500 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-light text-slate-800 mb-8 italic leading-relaxed">
              "Aku nggak akan manggil kamu 'entis' lagi, Tis.
              <br />
              Aku janji akan manggil kamu dengan nama yang kamu yaitu Tis."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Aku Sadar
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Mungkin kamu nggak suka dipanggil "entis" dan aku harusnya lebih
                perhatian sama perasaan kamu.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Aku Janji
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Mulai sekarang, aku akan manggil kamu "Tis" atau nama lain yang
                kamu mau. Aku janji!
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-50 to-rose-50 p-8 rounded-2xl">
            <p className="text-xl text-slate-700 mb-4">
              Semoga kita bisa tetap berteman baik ya, Tis! 💜
            </p>
            <p className="text-lg text-slate-600">
              Maaf kalau aku kadang nyebelin 😅
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
