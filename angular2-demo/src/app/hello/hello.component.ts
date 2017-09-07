import { Component, OnInit } from '@angular/core';

import { LogServiceService } from '../log-service.service';
import { MyFirstDirectiveDirective } from '../my-first-directive.directive';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  private name : string;

  constructor(private log : LogServiceService) {

  }

  ngOnInit() {
    this.name = 'hello';
    this.log.debug("hello component 初始化...");
  }

}
