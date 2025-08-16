import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white shadow-lg text-mongolian-600 hover:bg-mongolian-50 transition-colors duration-200"
      size="sm"
    >
      {t("ENGLISH", "한국어")}
    </Button>
  );
}
