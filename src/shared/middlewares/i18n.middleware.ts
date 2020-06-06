import { Request, Response, NextFunction } from "express";
import i18n from "src/config/i18n";

export default function i18nMiddleware(
  req: Request,
  _: Response,
  next: NextFunction,
): void {
  const userLocale = i18n.getLocale(req);
  i18n.setLocale(userLocale);
  next();
}
