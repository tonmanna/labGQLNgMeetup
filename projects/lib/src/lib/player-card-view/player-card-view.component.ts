import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'lib-player-card-view',
    templateUrl: './player-card-view.component.html',
    styleUrls: ['./player-card-view.component.css']
})
export class PlayerViewComponent implements OnInit {
    @Input()
    lists: Observable<[any]>;

    ngOnInit() {}
}
