
import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-6 max-w-4xl mx-auto" dir="rtl">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">شروط الاستخدام</h1>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">
             <div className="bg-[#0E0E10] border border-white/10 rounded-3xl p-6 md:p-12 space-y-10">
                {/* 1. Acceptance */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">1. قبول الشروط</h2>
                    <p>
                        باستخدامك لمنصة سديم (Sadem Inc) أو أي من خدماتها، فإنك تقر وتوافق على الالتزام بشروط الاستخدام هذه وجميع السياسات المرتبطة بها، بما في ذلك سياسة الخصوصية.
                    </p>
                    <p className="mt-2">في حال عدم موافقتك على أي جزء من هذه الشروط، يجب عليك التوقف عن استخدام المنصة فورًا.</p>
                </div>

                {/* 2. Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">2. وصف الخدمة</h2>
                    <p className="mb-4">
                        سديم هي منصة برمجية (SaaS) تقدم أدوات تسويق رقمية مدعومة بالذكاء الاصطناعي، تشمل – على سبيل المثال لا الحصر:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4 marker:text-primary">
                        <li>توليد المحتوى التسويقي</li>
                        <li>تحليل الإعلانات والمتاجر</li>
                        <li>إنشاء الصور والفيديوهات والصوت</li>
                        <li>التخطيط للمحتوى</li>
                        <li>التكامل مع منصات خارجية</li>
                    </ul>
                    <p>قد يتم تحديث أو تعديل أو إضافة ميزات جديدة للخدمة دون إشعار مسبق.</p>
                </div>

                {/* 3. Eligibility */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">3. الأهلية وإنشاء الحساب</h2>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                        <li>يجب أن يكون عمرك 18 عامًا أو أكثر لاستخدام المنصة.</li>
                        <li>أنت مسؤول عن صحة المعلومات المقدمة عند إنشاء الحساب.</li>
                        <li>أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول.</li>
                        <li>أي نشاط يتم عبر حسابك يُعد مسؤوليتك الكاملة.</li>
                    </ul>
                </div>

                {/* 4. Usage */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">4. استخدام المنصة</h2>
                    <p className="mb-4">يُسمح لك باستخدام سديم فقط للأغراض القانونية والمشروعة. ويُحظر عليك:</p>
                    <ul className="list-disc list-inside space-y-2 mb-4 marker:text-primary">
                        <li>استخدام المنصة في أنشطة غير قانونية أو مضللة.</li>
                        <li>إدخال محتوى ينتهك حقوق الملكية الفكرية للغير.</li>
                        <li>محاولة اختراق أو تعطيل أو إساءة استخدام المنصة أو أنظمتها.</li>
                        <li>استخدام المخرجات لأغراض احتيالية أو مخالفة للأنظمة المعمول بها.</li>
                    </ul>
                    <p>تحتفظ سديم بحق تعليق أو إيقاف أي حساب يخالف هذه الشروط.</p>
                </div>

                {/* 5. AI */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">5. الذكاء الاصطناعي والمخرجات</h2>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                        <li>جميع المخرجات التي تنتجها أدوات سديم تعتمد على المدخلات التي يقدمها المستخدم.</li>
                        <li>سديم لا تضمن أن تكون المخرجات خالية من الأخطاء بنسبة 100%.</li>
                        <li>المستخدم مسؤول عن مراجعة وتدقيق المحتوى قبل استخدامه تجاريًا.</li>
                        <li>سديم لا تتحمل أي مسؤولية عن القرارات أو النتائج الناتجة عن استخدام المخرجات.</li>
                    </ul>
                </div>

                {/* 6. IP */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">6. الملكية الفكرية</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">أ. ملكية المنصة</h3>
                            <p className="mb-2 text-sm">جميع حقوق الملكية الفكرية المتعلقة بالمنصة، بما في ذلك:</p>
                            <ul className="list-disc list-inside space-y-1 marker:text-primary text-sm mb-2">
                                <li>البرمجيات</li>
                                <li>الواجهات</li>
                                <li>التصاميم</li>
                                <li>العلامات التجارية</li>
                            </ul>
                            <p className="text-sm font-semibold">هي ملك حصري لـ Sadem Inc.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">ب. محتوى المستخدم</h3>
                            <ul className="list-disc list-inside space-y-1 marker:text-primary">
                                <li>يحتفظ المستخدم بكامل حقوقه على المحتوى الذي يقوم بإدخاله.</li>
                                <li>يحتفظ المستخدم بحق استخدام المخرجات التي تم إنشاؤها عبر حسابه.</li>
                                <li>لا تقوم سديم ببيع أو إعادة استخدام محتوى المستخدم خارج نطاق تقديم الخدمة.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 7. Plans */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">7. الخطط، الدفع، والرصيد (Credits)</h2>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                        <li>تعمل بعض ميزات سديم بنظام الرصيد (Credits).</li>
                        <li>تختلف تكلفة العمليات حسب نوع الأداة المستخدمة.</li>
                        <li>جميع الرسوم غير قابلة للاسترداد ما لم يُنص على خلاف ذلك.</li>
                        <li>تحتفظ سديم بحق تعديل الأسعار أو الخطط مع إشعار المستخدم عند الحاجة.</li>
                    </ul>
                </div>

                {/* 8. Integrations */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">8. التكامل مع منصات خارجية</h2>
                    <p className="mb-4">قد تتيح سديم تكاملات مع منصات خارجية مثل TikTok أو غيرها.</p>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                        <li>استخدام هذه التكاملات يخضع أيضًا لشروط وسياسات تلك المنصات.</li>
                        <li>سديم غير مسؤولة عن أي تغيير أو انقطاع في خدمات الطرف الثالث.</li>
                        <li>المستخدم هو المسؤول عن أي محتوى يتم نشره أو تحليله عبر هذه التكاملات.</li>
                    </ul>
                </div>

                {/* 9. Disclaimer */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">9. إخلاء المسؤولية</h2>
                    <p className="mb-4">يتم تقديم خدمات سديم "كما هي" و "حسب التوفر" دون أي ضمانات صريحة أو ضمنية.</p>
                    <p className="mb-2">لا تضمن سديم:</p>
                    <ul className="list-disc list-inside space-y-1 marker:text-primary">
                        <li>تحقيق نتائج تسويقية معينة</li>
                        <li>زيادة المبيعات أو الأرباح</li>
                        <li>توافق المخرجات مع جميع القوانين المحلية أو الدولية</li>
                    </ul>
                </div>

                {/* 10. Liability */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">10. تحديد المسؤولية</h2>
                    <p className="mb-2">إلى أقصى حد يسمح به النظام:</p>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                        <li>لا تتحمل سديم أي مسؤولية عن أضرار مباشرة أو غير مباشرة ناتجة عن استخدام المنصة.</li>
                        <li>لا تتجاوز مسؤولية سديم الإجمالية أي مبالغ مدفوعة من المستخدم خلال آخر 3 أشهر.</li>
                    </ul>
                </div>

                {/* 11. Termination */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">11. إنهاء الحساب</h2>
                    <p className="mb-2">يحق لسديم:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4 marker:text-primary">
                        <li>تعليق أو إنهاء حسابك في حال مخالفة الشروط.</li>
                        <li>إزالة أو تقييد الوصول إلى المحتوى المخالف.</li>
                    </ul>
                    <p>كما يحق لك إيقاف استخدام الخدمة في أي وقت عبر إلغاء حسابك.</p>
                </div>

                {/* 12. Amendments */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">12. التعديلات على الشروط</h2>
                    <p>
                        تحتفظ سديم بحق تعديل شروط الاستخدام في أي وقت. سيتم إشعار المستخدم بأي تغييرات جوهرية. استمرارك في استخدام المنصة بعد التعديل يُعد موافقة صريحة على الشروط المحدثة.
                    </p>
                </div>

                {/* 13. Governing Law */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">13. القانون المنظم</h2>
                    <p>
                        تخضع هذه الشروط وتُفسر وفقًا للأنظمة المعمول بها في المملكة العربية السعودية، وأي نزاع يخضع للاختصاص القضائي للجهات المختصة داخل المملكة.
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
};

export default TermsOfUse;
