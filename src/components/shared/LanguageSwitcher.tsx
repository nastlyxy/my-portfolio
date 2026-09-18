"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname, routing } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const localeLabels = {
  en: "English",
  pl: "Polski",
  ru: "Русский",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };
  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[100px] sm:w-[120px] bg-transparent border-slate-200 dark:border-slate-800 focus:ring-0">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {routing.locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {localeLabels[loc as keyof typeof localeLabels]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
