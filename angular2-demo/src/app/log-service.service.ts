import { Injectable } from '@angular/core';

@Injectable()
export class LogServiceService {

  constructor() { }

  //log-service中的一个方法 msg：string类型  这是typescript语法
  debug(msg:string){
     console.info(msg);
  }
}
