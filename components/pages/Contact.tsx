
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Info Side */}
            <div>
                <h1 className="text-4xl font-bold text-white mb-6">تواصل معنا</h1>
                <p className="text-text-secondary text-lg mb-10">
                    عندك استفسار؟ اقتراح؟ أو بس حاب تقول هلا؟ <br/>
                    فريقنا موجود لخدمتك.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-text-tertiary">البريد الإلكتروني</p>
                            <p className="text-white font-medium">support@sadem.ai</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-text-tertiary">المقر الرئيسي</p>
                            <p className="text-white font-medium">الرياض، طريق الملك فهد، برج الفيصلية</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-[#0E0E10] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-text-secondary">الاسم الأول</label>
                            <input type="text" className="w-full bg-[#1A1A1C] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-text-secondary">اسم العائلة</label>
                            <input type="text" className="w-full bg-[#1A1A1C] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-text-secondary">البريد الإلكتروني</label>
                        <input type="email" className="w-full bg-[#1A1A1C] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-text-secondary">الرسالة</label>
                        <textarea rows={4} className="w-full bg-[#1A1A1C] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"></textarea>
                    </div>

                    <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-[#EDEDED] transition-colors">
                        إرسال الرسالة
                    </button>
                </form>
            </div>

        </div>
    </section>
  );
};

export default Contact;
