export type Locale = "ie" | "us" | "au" | undefined;

export function isLocale(locale: string | undefined): locale is Locale {
  console.log(locale);
  return ["ie", "us", "au", undefined].includes(locale);
}
