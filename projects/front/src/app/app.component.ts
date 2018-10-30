import { Component } from '@angular/core';
import { LeaguesService } from './app.service';
import { League, Season, TopScore, LeagueInput } from './app.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LeaguesService]
})
export class AppComponent {
    leagueList: Observable<[League]>;
    seasonList: Observable<[Season]>;
    topScoreList: Observable<[TopScore]>;
    currentLeage: League;
    constructor(private leaguesService: LeaguesService) {
        this.leagueList = leaguesService.getLeagues();
    }
    cickedLeagues(ev: League) {
        this.currentLeage = ev;
        this.seasonList = this.leaguesService.getSeasonAvailable(this.currentLeage.league_slug);
    }
    cickedSeason(ev: Season) {
        const input = new LeagueInput();
        input.league_slug = this.currentLeage.league_slug;
        input.season_slug = ev.season_slug;

        this.topScoreList = this.leaguesService.getLeageTopScore(input);
    }
}
