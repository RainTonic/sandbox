import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function typeormOptionsModuleFactory(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    synchronize: configService.get<'true' | 'false'>('ORM_SYNCHRONIZE') === 'true',
    host: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
  };
}
