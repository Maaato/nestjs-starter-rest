import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): Record<string,string> {
    return { 'msg':'Hello, this is a Simple REST API with NestJS! ♥' , 'API': '/users'}
  }
}
