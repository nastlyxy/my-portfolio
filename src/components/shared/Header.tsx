import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "../ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const t = useTranslations("Header");

  const NavLinks = () => (
    <>
      <li className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap">
        {t("services")}
      </li>
      <li className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap">
        {t("portfolio")}
      </li>
      <li className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap">
        {t("about")}
      </li>
      <li className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap">
        {t("contact")}
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center gap-4">
        {/* Logo*/}
        <div className="font-bold text-lg sm:text-2xl text-slate-900 dark:text-white tracking-tight shrink-0">
          Anastasiya Haiduk
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-lg text-slate-600 dark:text-slate-300">
          <NavLinks />
        </ul>
        <div className="shrink-0 flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <div className="mt-12 mx-6 flex flex-col gap-8">
                <div className="font-bold text-xl text-slate-900 dark:text-white tracking-tight border-b pb-4">
                  Anastasiya Haiduk
                </div>
                <ul className="flex flex-col gap-6 font-medium text-2xl text-slate-600 dark:text-slate-300">
                  <NavLinks />
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
