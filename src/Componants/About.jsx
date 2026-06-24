import React from 'react';
import { FaFlag, FaEye, FaCheckCircle, FaMedal, FaUsers, FaSchool, FaStar, FaHistory, FaMicrophone, FaLaptop, FaBrain, FaTasks, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="bg-surface text-on-surface font-sans">
      {/* TopAppBar */}
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdneD0DbOcYC6iyqh_9YuYDemD49wR4dGMCG1pf098D0qxw6hYbDkGOeO0OHRX1hefhHIe5HlPfhtti83-QY_VLmta2dWa1Jf7xsk_78dvCdPVPUV4k42V44_y9E6TFzdH8WNHKpW6QOoAcAgAKe7AbB6v-hgGqTJWwCp_bSEsnNCga9QOqDMxsxqmUfVvfq-0qs784P9LYqhYcNQIC6lBAMO7py987aEEikd-4xzobXmafwXF8dY2JTX39P8V5DY9Y_h2PHPncg')",
            }}
          />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="relative w-full max-w-container-max mx-auto px-margin-desktop px-margin-mobile text-center">
            <h1 className="font-display-lg text-display-lg text-on-primary mb-6">
              أكاديمية الشيخ محمد حامد مدني إسماعيل
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mx-auto opacity-90">
              صرح تعليمي رائد مخصص لتعلم العلوم الإسلامية وتجويد القرآن الكريم، يجمع بين الأصالة والحداثة في التعليم.
            </p>
          </div>
        </section>

        {/* Section 2: Our Story */}
        <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-secondary font-medium tracking-widest uppercase mb-4 block">رحلتنا</span>
              <h2 className="text-3xl font-semibold text-on-surface mb-8">قصة التأسيس والجذور</h2>
              <div className="space-y-6 text-base text-on-surface-variant leading-relaxed">
                <p>
                  تأسست الأكاديمية على يد فضيلة الشيخ محمد حامد مدني إسماعيل، الذي رأى حاجة ماسة في المجتمع لوجود صرح تعليمي يربط الأجيال الجديدة بجذور دينها بطريقة منهجية وعلمية حديثة.
                </p>
                <p>
                  بدأت المسيرة بحلقات تعليمية صغيرة، وسرعان ما تطورت بفضل الله ثم بفضل الالتزام بأعلى معايير الدقة العلمية والتربوية، لتصبح اليوم منارة يقصدها الطلاب من كل مكان سعياً وراء العلم الشرعي الموثوق.
                </p>
                <p>
                  نحن نؤمن بأن التعليم ليس مجرد نقل للمعلومات، بل هو صياغة للشخصية الإسلامية المتوازنة التي تخدم دينها ومجتمعها بكل إخلاص وإتقان.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtmAjYHXxn9SkUKXe1OIr_az3S5_celEJ5-i_hYqZ2I95Ag-iYprVZvA5CgcqZqjvvW96o4T2X23gQo78NngdQV_YqNwkPsk1xB0aUCbwkgBPwSXddusTt4D0VW3CZpIHqdHxcKeYuWQVW_P2IRXEkUP9-SQNK49WB1BgeX0WfZY8aSe6ta351KT25AbQZJE_Wl6krX7AUE0vtJYoMKSo01j0t5tFBSvikpbPqQgmH5lHYERmmBKveJZ_IOZAAb23ywa3waZrz8Q"
                  alt="A close-up shot of a hand-written Arabic calligraphy scroll being examined with a magnifying glass on a rustic wooden desk."
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center -z-10 opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Section 3 & 4: Mission, Vision & Values */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-primary mb-4">الرؤية والرسالة والقيم</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mission */}
              <div className="md:col-span-2 bento-card bg-surface-container-lowest p-10 rounded-xl border border-outline-variant">
                <FaFlag className="text-primary text-4xl mb-6" />
                <h3 className="text-2xl font-semibold text-on-surface mb-4">رسالتنا</h3>
                <p className="text-base text-on-surface-variant">
                  تمكين الطلاب من فهم القرآن الكريم وعلومه بعمق، وتوفير بيئة تعليمية محفزة تجمع بين القيم الروحية والأكاديمية، لإعداد جيل متمسك بهويته ومساهم في نهضة أمته.
                </p>
              </div>
              {/* Vision */}
              <div className="bento-card bg-primary-container p-10 rounded-xl text-on-primary-container">
                <FaEye className="text-secondary-fixed text-4xl mb-6" />
                <h3 className="text-2xl font-semibold mb-4">رؤيتنا</h3>
                <p className="text-base">
                  أن نكون الأكاديمية الرائدة عالمياً في تقديم التعليم الشرعي والقرآني بنماذج تعليمية مبتكرة تلهم العقول وتطمئن بها القلوب.
                </p>
              </div>
              {/* Values */}
              <div className="bento-card bg-surface-container-lowest p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-tertiary text-xl" />
                </div>
                <h4 className="text-2xl font-semibold text-on-surface mb-2">الأصالة</h4>
                <p className="text-sm font-medium text-on-surface-variant">التمسك بالمنهج النبوي الصحيح والعلوم الشرعية الموثوقة.</p>
              </div>
              <div className="bento-card bg-surface-container-lowest p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center mb-4">
                  <FaMedal className="text-secondary text-xl" />
                </div>
                <h4 className="text-2xl font-semibold text-on-surface mb-2">الإتقان</h4>
                <p className="text-sm font-medium text-on-surface-variant">السعي الدائم نحو التميز في الأداء التعليمي والإداري.</p>
              </div>
              <div className="bento-card bg-surface-container-lowest p-8 rounded-xl border border-outline-variant flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-primary text-xl" />
                </div>
                <h4 className="text-2xl font-semibold text-on-surface mb-2">التركيز على الطالب</h4>
                <p className="text-sm font-medium text-on-surface-variant">وضع احتياجات الطالب ونموه الروحي في قمة أولوياتنا.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: About the Sheikh */}
        <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="bg-surface-container-highest rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[500px] lg:h-full relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj_3z8vlR0CHtBZzQIqEzbENzMUl_rD7OJ9BSj8jrmVFl-vRP7bQjz5Ougzd_AkwcaX2Xk9PJYOlGM4yxgC1BuNPhPPQE-KrVkW2LEiUCJp-nwZcK0eLHMpK8CYUWLV4wSeUwcqM3mwa3AvtNClnICsW1oKY7bxlsm0AhNQWHzY3ESpWN2_BSNllBlfPGaqfS_x_GhmEczO9F4Mn4-5RjgvpLQyJi6HcIeZZRjmJyggW0zPERtgXOhq7IUVU4KcWjabW4qz_M_A"
                alt="A professional, dignified portrait of a scholar in traditional Islamic attire."
              />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-primary mb-2">عن فضيلة الشيخ</h2>
              <h3 className="text-2xl font-semibold text-on-surface mb-6">محمد حامد مدني إسماعيل</h3>
              <div className="space-y-6 text-base text-on-surface-variant">
                <p>
                  يعتبر الشيخ محمد حامد مدني إسماعيل من أبرز القراء والعلماء المشهود لهم بالكفاءة في تعليم القرآن الكريم وعلومه. قضى عقوداً في خدمة كتاب الله وتدريسه للأجيال.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaSchool className="text-secondary shrink-0 mt-1" />
                    <span>حاصل على أعلى الإجازات العلمية في القراءات العشر من كبار علماء العصر.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaStar className="text-secondary shrink-0 mt-1" />
                    <span>مؤسس ورئيس الأكاديمية والمشرف العام على مناهجها التعليمية.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaHistory className="text-secondary shrink-0 mt-1" />
                    <span>مؤلف لعدة كتب ومنهجيات في تيسير حفظ القرآن وتجويده.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Educational Approach */}
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-[1280px] mx-auto px-4 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-4">منهجيتنا التعليمية</h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">نعتمد في الأكاديمية على مزيج فريد بين طرق التلقي التقليدية والتقنيات التعليمية الحديثة.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-primary-fixed/20 rounded-xl bg-primary-container">
                <div className="w-16 h-16 bg-on-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaMicrophone className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-2">التلقي المشافهة</h4>
                <p className="text-sm font-medium opacity-80">الحفاظ على سند القراءة من خلال التلقي المباشر من المعلم.</p>
              </div>
              <div className="text-center p-6 border border-primary-fixed/20 rounded-xl bg-primary-container">
                <div className="w-16 h-16 bg-on-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaLaptop className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-2">التعليم الرقمي</h4>
                <p className="text-sm font-medium opacity-80">استخدام أحدث المنصات والأدوات التفاعلية لتسهيل التعلم عن بعد.</p>
              </div>
              <div className="text-center p-6 border border-primary-fixed/20 rounded-xl bg-primary-container">
                <div className="w-16 h-16 bg-on-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBrain className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-2">المسارات المخصصة</h4>
                <p className="text-sm font-medium opacity-80">تصميم خطط دراسية تتناسب مع مستوى وقدرات كل طالب بشكل فردي.</p>
              </div>
              <div className="text-center p-6 border border-primary-fixed/20 rounded-xl bg-primary-container">
                <div className="w-16 h-16 bg-on-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaTasks className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-2">التقييم المستمر</h4>
                <p className="text-sm font-medium opacity-80">متابعة دقيقة لتقدم الطالب مع اختبارات دورية لضمان الجودة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-24 px-4 md:px-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-6">ابدأ رحلتك في رحاب القرآن اليوم</h2>
            <p className="text-lg text-on-surface-variant mb-10">انضم إلى مئات الطلاب الذين اختاروا التميز العلمي والروحي في أكاديمية الشيخ محمد حامد.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full text-2xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95">
                سجل الآن
              </button>
              <button className="border-2 border-secondary text-secondary px-10 py-4 rounded-full text-2xl font-semibold hover:bg-secondary-fixed-dim hover:text-on-secondary transition-all active:scale-95">
                استعرض الدورات
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .hero-gradient {
          background: linear-gradient(to bottom, rgba(7, 33, 0, 0.7), rgba(7, 33, 0, 0.9));
        }
        .bento-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(39, 106, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;