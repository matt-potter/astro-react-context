import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import type { Locale } from "../type/locale";

export type AppContext = {
  locale: Locale | undefined;
};

export const AppContext = createContext<AppContext>({
  locale: undefined,
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context.locale === undefined) {
    throw new Error("useLocale must be used within a AppContextProvider");
  }

  return context;
};

export const AppContextProvider: FC<PropsWithChildren<AppContext>> = ({
  children,
  locale,
}) => {
  console.log("daskdsakld", locale);
  return (
    <AppContext.Provider value={{ locale }}>{children}</AppContext.Provider>
  );
};
