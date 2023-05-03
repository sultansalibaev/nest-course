import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModules} from "./app.modules";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModules)

    const config = new DocumentBuilder()
        .setTitle("Уроки по продвинотому BACKEND")
        .setDescription('Документаций REST API')
        .setVersion('1.0.0')
        .addTag('Sula_002')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
