import { Config } from "@/config/config";
import ChooseLanguage from "./ChooseLanguage";

export default function Footer() {
  return (
    <footer>
      <p>© 2023 InvoiceGen AI. All rights reserved.</p>
      <ChooseLanguage defaultLocale={Config.locale} />
      <p>Made with ❤️ by InvoiceGen AI</p>
    </footer>
  );
}
