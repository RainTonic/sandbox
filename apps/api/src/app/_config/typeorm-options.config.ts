import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function typeormOptionsModuleFactory(
  configService: ConfigService
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    synchronize: process.env.ORM_SYNCHRONIZE === 'true',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
  };
}
