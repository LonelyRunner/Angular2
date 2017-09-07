import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appMyFirstDirective]'
})
export class MyFirstDirectiveDirective {

  constructor(el:ElementRef,ren:Renderer) {
    //参数:元素的本地引用 style-name style-value
      ren.setElementStyle(el.nativeElement,'backgroundColor','yellow');
  }

}
