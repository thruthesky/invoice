"use client";
import { useTranslations } from "use-intl";
import ChooseLanguage from "./ChooseLanguage";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations();
  return (
    <footer className="bg-gray-100 text-gray-800 p-8">
      <div className="flex justify-between mb-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold">{t("app-name")}</h2>
          <p className="text-sm">{t("app-name-slogan")}</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">{t("more-invoicegen")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("features")}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("pricing")}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("blog")}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("support")}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">{t("about-invoicegen-ai")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("privacy-policy")}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("terms-of-service")}
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                {t("contact-us")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
        <p className="text-xs text-gray-600">
          © 2023 InvoiceGen AI. All rights reserved.
        </p>
        <ChooseLanguage defaultLocale={locale} />
        <p className="text-xs text-gray-600">Made with ❤️ by InvoiceGen AI</p>
      </div>
    </footer>
  );
}
