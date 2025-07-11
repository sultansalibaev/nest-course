import {Module} from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import {UsersModule} from "./users/users.module";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/users.model";
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import {RolesModule} from "./roles/roles.module";
import {AuthModule} from "./auth/auth.module";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT) || 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule
    ],
})
export class AppModules {}
