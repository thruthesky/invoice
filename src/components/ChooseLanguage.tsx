"use client";

import React from "react";

import { setUserLocale } from "@/i18n/locale";

export default function ChooseLanguage({
  defaultLocale,
}: {
  defaultLocale: string;
}) {
  console.log(defaultLocale);
  return (
    <>
      <select
        className="text-black border border-gray-300 rounded-md p-2"
        onChange={(e) => {
          const locale = e.target.value;
          if (locale) {
            setUserLocale(locale);
          }
        }}
        defaultValue={defaultLocale}
      >
        <option>Choose Language</option>
        <option value="en">English</option>
        <option value="ko">한국어</option>
      </select>
    </>
  );
}
