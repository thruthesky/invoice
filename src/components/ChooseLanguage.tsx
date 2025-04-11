"use client";

import React from "react";

import { setUserLocale } from "@/i18n/locale";

export default function ChooseLanguage({
  defaultLocale,
}: {
  defaultLocale: string;
}) {
  return (
    <>
      <select
        onChange={(e) => {
          const locale = e.target.value;
          if (locale !== "") {
            setUserLocale(locale);
          }
        }}
        defaultValue={defaultLocale}
      >
        <option value="">Choose Language</option>
        <option value="en">English</option>
        <option value="ko">한국어</option>
      </select>
    </>
  );
}
