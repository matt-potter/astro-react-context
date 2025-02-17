import { type FC } from "react";
import { AppContextProvider, type AppContext } from "../../context/locale";
import LocaleLink from "../link";

const HomePage: FC<AppContext> = ({ locale }) => {
  return (
    <AppContextProvider locale={locale}>
      <div>
        <h1>Home Page</h1>
        <LocaleLink />
      </div>
    </AppContextProvider>
  );
};

export default HomePage;
