import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  getData(): any {
    console.log('c');
    return this.connection.query('SELECT * FROM todo;');
  }

  createData(data: { description: string }): any {
    return this.connection.query(
      'INSERT INTO todo (description) VALUES ($1);',
      [data.description]
    );
  }
}
