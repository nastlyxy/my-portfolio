import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const t = useTranslations("Footer");

  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-9xl mx-auto px-4 sm:px-6 mb-6 w-full mt-20">
      {/* Bento Box Container */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col gap-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Slogan */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-2xl text-white tracking-tight">
              Anastasiya Haiduk
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              {t("slogan")}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white tracking-wide">
              {t("navTitle")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("services")}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("portfolio")}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("about")}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer w-fit">
                {t("contact")}
              </li>
            </ul>
          </div>

          {/* Socials & Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white tracking-wide">
              {t("socialTitle")}
            </h3>

            <a
              href="mailto:anastasiagajduk24@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors w-fit"
            >
              <FiMail className="w-4 h-4" />
              anastasiagajduk24@gmail.com
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <FaTelegramPlane className="w-5 h-5" /> {/* Telegram */}
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Anastasiya Haiduk. {t("copyright")}.
          </p>
          <p>{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}
