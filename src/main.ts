import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import appConfig from "./config/app.config"
import { generateSchema } from "@common"

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule)
    await app.listen(3003 || appConfig().port)
}

generateSchema().then(() => bootstrap())

