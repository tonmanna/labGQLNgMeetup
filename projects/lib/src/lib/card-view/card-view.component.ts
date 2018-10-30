import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'lib-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
    @Input()
    lists: Observable<[any]>;

    @Output()
    clicked = new EventEmitter<string>();
    constructor() {}

    ngOnInit() {}

    click(league_slug: string) {
        this.clicked.emit(league_slug);
    }
}
