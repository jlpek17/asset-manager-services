import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error("Erreur au démarrage de l'application :", err);
  process.exit(1); // optional, to stop the process in case of error
});
