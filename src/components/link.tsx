import { use } from "react";
import { AppContext } from "../context/locale";

const LocaleLink = () => {
  const { locale } = use(AppContext);

  return <div>Locale is {locale}</div>;
};

export default LocaleLink;
