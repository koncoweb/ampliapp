import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("KoncoPro")
  .setDescription(
    'Property Business Management App\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with HTTP Basic authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBasicAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "KoncoPro",
};
