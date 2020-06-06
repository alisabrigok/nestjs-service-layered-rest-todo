import { createParamDecorator } from "@nestjs/common";
import i18n from "src/config/i18n";

type Translator = (key: string, options: unknown) => string;

const translator: Translator = (key, options) => i18n.__(key, options);

export interface LanguageProvider {
  locale: string;
  t: Translator;
}

export const Language = createParamDecorator(
  (): LanguageProvider => {
    return {
      locale: i18n.getLocale(),
      t: translator,
    };
  },
);
