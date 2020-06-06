import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import i18n from "./config/i18n";
import i18nMiddleware from "./shared/middlewares/i18n.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(i18n.init);
  app.use(i18nMiddleware);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.APP_ENV !== "development",
    }),
  );
  await app.listen(3000);
}
bootstrap();
