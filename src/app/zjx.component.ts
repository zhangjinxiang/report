import { Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'zjx-event',
    template:'<div (click)=childClick()>click me</div>'
})
export class ZjxComponent {
    @Output() fromInside=new EventEmitter();
   
    childClick()
    {
        this.fromInside.emit({name:'my name is zhangjinxiang.'});
    }
}