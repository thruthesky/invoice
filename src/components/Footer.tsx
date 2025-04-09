"use client";
import ChooseLanguage from "./ChooseLanguage";

export default function Footer({ locale }: { locale: string }) {
  return (
    <footer className="bg-gray-100 text-gray-800 p-8">
      <div className="flex justify-between mb-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold">InvoiceGen AI</h2>
          <p className="text-sm">The heart of AI-powered invoicing.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-xl text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube text-xl text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-xl text-gray-600 hover:text-gray-800"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">More InvoiceGen</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About InvoiceGen</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline text-gray-600">
                Contact Us
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
