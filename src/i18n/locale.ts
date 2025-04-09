"use server";

import { cookies } from "next/headers";
import { Locale } from "next-intl";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale(): Promise<Locale> {
  const cookie = await cookies();
  return cookie.get(COOKIE_NAME)?.value || "ko";
}

export async function setUserLocale(locale: Locale) {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
}
