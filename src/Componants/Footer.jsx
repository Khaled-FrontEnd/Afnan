export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant pt-20 pb-12">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img alt="Logo" className="h-20 mb-6" src="./logo.png" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8">
              أكاديمية تعليمية متخصصة في تعليم تجويد القرآن الكريم وتدريسه
              للأطفال.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">call</span>
              </a>
            </div>
          </div>
          {/* <div>
              <h5 className="font-bold mb-6 text-primary">روابط سريعة</h5>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    عن الأكاديمية
                  </a>
                  </li>
                  <li>
                  <a className="hover:text-primary transition-colors" href="#">
                  الدورات والبرامج
                  </a>
                </li>
                <li>
                <a className="hover:text-primary transition-colors" href="#">
                    مكتبة الدروس
                    </a>
                </li>
                <li>
                <a className="hover:text-primary transition-colors" href="#">
                    الأسئلة الشائعة
                  </a>
                  </li>
              </ul>
            </div> */}

        </div>
        <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-md text-label-md text-on-surface-variant text-center md:text-right">
            © 2026 أكاديمية أفنان لتعليم الأطفال احكام تجويد القران. جميع الحقوق
            محفوظة.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              language
            </span>
            <select className="bg-transparent border-none text-on-surface-variant font-label-md text-label-md focus:ring-0">
              <option>العربية</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
