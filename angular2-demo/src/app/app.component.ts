import { Component,OnInit } from '@angular/core';

import { LogServiceService } from './log-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
   private title : string;
   private isShowMore : boolean;

   constructor(private logService : LogServiceService){

   }

   ngOnInit(){
      this.title = 'Angular 2';
      this.logService.debug("根组件被初始化...");
   }
}
