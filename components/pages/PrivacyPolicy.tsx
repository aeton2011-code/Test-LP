
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-6 max-w-4xl mx-auto" dir="rtl">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">سياسة الخصوصية</h1>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">
            <div className="bg-[#0E0E10] border border-white/10 rounded-3xl p-6 md:p-12 space-y-10">
                
                {/* Section 1 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">1. مقدمة</h2>
                    <p>
                        في سديم (Sadem Inc) نولي خصوصية مستخدمينا أهمية قصوى. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات عند استخدامك لمنصتنا وخدماتنا، بما في ذلك الأدوات المعتمدة على الذكاء الاصطناعي والتكاملات مع منصات خارجية.
                    </p>
                    <p className="mt-2">باستخدامك لمنصة سديم، فإنك توافق على الممارسات الموضحة في هذه السياسة.</p>
                </div>

                {/* Section 2 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">2. المعلومات التي نقوم بجمعها</h2>
                    <p className="mb-4">نقوم بجمع الحد الأدنى من البيانات اللازمة لتشغيل الخدمة بكفاءة، وتشمل:</p>
                    
                    <div className="space-y-4 pr-4">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">أ. معلومات الحساب</h3>
                            <ul className="list-disc list-inside space-y-1 marker:text-primary">
                                <li>الاسم</li>
                                <li>البريد الإلكتروني</li>
                                <li>رقم الهاتف (إن وُجد)</li>
                                <li>معلومات تسجيل الدخول</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">ب. معلومات المتجر والمنصات المرتبطة</h3>
                            <p className="mb-2 text-sm">عند ربط متجرك أو حساباتك التسويقية (مثل سلة، زد، أو غيرها مستقبلًا):</p>
                            <ul className="list-disc list-inside space-y-1 marker:text-primary">
                                <li>بيانات المنتجات</li>
                                <li>بيانات الطلبات والمبيعات</li>
                                <li>بيانات الحملات الإعلانية (إن وُجد)</li>
                            </ul>
                            <p className="text-sm mt-2 text-text-tertiary">يتم استخدام هذه البيانات لأغراض التحليل والتحسين داخل حسابك فقط.</p>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">ج. المحتوى الذي تقوم بإدخاله</h3>
                            <ul className="list-disc list-inside space-y-1 marker:text-primary">
                                <li>النصوص، الصور، الفيديوهات</li>
                                <li>أي مدخلات أخرى تستخدمها أدوات سديم لتوليد أو تحليل المحتوى.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">3. استخدام البيانات</h2>
                    <p className="mb-4">نستخدم بياناتك للأغراض التالية فقط:</p>
                    <ul className="list-disc list-inside mb-6 space-y-2 marker:text-primary">
                        <li>تشغيل وتقديم خدمات سديم كما هو موضح في المنصة.</li>
                        <li>تنفيذ الأوامر والتحليلات التي تطلبها بنفسك.</li>
                        <li>تحسين أداء النظام واستقراره وتجربة الاستخدام بشكل عام.</li>
                        <li>التواصل معك بخصوص التحديثات، الفواتير، أو الإشعارات المتعلقة بالخدمة.</li>
                    </ul>
                    
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex items-start gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <strong className="text-yellow-200 block mb-1">مهم:</strong>
                            <p className="text-yellow-100/80 text-sm">
                                لا نستخدم بياناتك أو محتواك لتدريب نماذج ذكاء اصطناعي عامة، ولا يتم مشاركتها أو إتاحتها لمستخدمين آخرين بأي شكل.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">4. الذكاء الاصطناعي والبيانات</h2>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                        <li>جميع مخرجات الذكاء الاصطناعي في سديم يتم إنشاؤها حسب طلب المستخدم فقط.</li>
                        <li>البيانات المدخلة تُستخدم لحظيًا لتنفيذ الطلب ولا تُعاد استخدامها خارج نطاق حسابك.</li>
                        <li>لا يتم استخدام بياناتك لتغذية أو تحسين نماذج عامة قد يستفيد منها أطراف خارجية أو منافسون.</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">5. التكامل مع منصات خارجية (مثل TikTok)</h2>
                    <p className="mb-4">قد تتيح سديم تكاملات مع منصات طرف ثالث مثل TikTok عبر واجهات برمجة التطبيقات (APIs). عند ربط حسابك:</p>
                    <ul className="list-disc list-inside space-y-2 mb-4 marker:text-primary">
                        <li>يتم الوصول فقط إلى البيانات التي توافق عليها صراحة.</li>
                        <li>يتم استخدام البيانات لتحليل الأداء، إنشاء محتوى، أو تحسين الحملات داخل سديم.</li>
                        <li>تخضع هذه التكاملات أيضًا لسياسات الخصوصية الخاصة بالمنصات المعنية (مثل سياسة TikTok).</li>
                    </ul>
                    <p>سديم لا تقوم بنشر أي محتوى أو تنفيذ أي إجراء نيابةً عنك دون إذن صريح منك.</p>
                </div>

                {/* Section 6 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
                    <p className="mb-2">تستخدم سديم ملفات تعريف الارتباط وتقنيات مشابهة من أجل:</p>
                    <ul className="list-disc list-inside space-y-1 mb-2 marker:text-primary">
                        <li>تحسين تجربة المستخدم</li>
                        <li>حفظ التفضيلات</li>
                        <li>تحليل الأداء العام للمنصة</li>
                    </ul>
                    <p>يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.</p>
                </div>

                {/* Section 7 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">7. حماية وأمن البيانات</h2>
                    <p className="mb-4">نلتزم باتباع أفضل الممارسات الأمنية المعتمدة عالميًا لحماية بياناتك، بما في ذلك:</p>
                    <ul className="list-disc list-inside space-y-2 mb-4 marker:text-primary">
                        <li>تشفير البيانات أثناء النقل والتخزين.</li>
                        <li>أنظمة حماية لمنع الوصول غير المصرح به.</li>
                        <li>عزل بيانات كل مستخدم بشكل مستقل.</li>
                    </ul>
                    <p className="font-bold text-white">نحن لا نبيع، ولا نؤجر، ولا نشارك بياناتك مع أي طرف ثالث لأغراض تسويقية.</p>
                </div>

                {/* Section 8 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">8. مدة الاحتفاظ بالبيانات</h2>
                    <p>
                        نحتفظ ببياناتك طالما كان حسابك نشطًا أو حسب الحاجة لتقديم الخدمة. عند إلغاء الحساب، يمكن حذف البيانات وفقًا للأنظمة المعمول بها وطلبات المستخدم.
                    </p>
                </div>

                {/* Section 9 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">9. حقوقك</h2>
                    <p className="mb-2">لديك الحق في:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4 marker:text-primary">
                        <li>طلب الوصول إلى بياناتك.</li>
                        <li>تصحيح أو تحديث بياناتك.</li>
                        <li>طلب حذف حسابك وبياناتك.</li>
                        <li>سحب أي موافقات متعلقة بالتكاملات الخارجية.</li>
                    </ul>
                    <p>يمكنك ممارسة هذه الحقوق عبر التواصل مع فريق الدعم.</p>
                </div>

                {/* Section 10 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">10. التغييرات على سياسة الخصوصية</h2>
                    <p>
                        قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إشعارك بأي تغييرات جوهرية عبر المنصة أو البريد الإلكتروني. استمرارك في استخدام سديم بعد التحديث يعني موافقتك على النسخة المحدثة.
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
};

export default PrivacyPolicy;
