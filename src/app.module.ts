import { Module } from "@nestjs/common"
import {
    ApolloFederationDriver,
    ApolloFederationDriverConfig,
} from "@nestjs/apollo"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloServerPluginInlineTrace } from "@apollo/server/plugin/inlineTrace"
import { ResolversModule } from "@resolvers"
import { databaseConfig, jwtConfig } from "@config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [databaseConfig, jwtConfig],
        }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: databaseConfig().mysql.host,
            port: +databaseConfig().mysql.port,
            username: databaseConfig().mysql.username,
            password: databaseConfig().mysql.password,
            database: databaseConfig().mysql.schema,
            autoLoadEntities: true,
            synchronize: true,
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            typePaths: ["./**/*.gql"],
            playground: true,
            plugins: [ApolloServerPluginInlineTrace()],
            buildSchemaOptions: {
                orphanedTypes: [],
            },
        }),

        ResolversModule
    ],

    controllers: [],
    providers: [
    ],
})
export class AppModule {}
