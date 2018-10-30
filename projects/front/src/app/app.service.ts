import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, from } from 'rxjs';
import { League, Season, LeagueInput, TopScore } from './app.model';
import { map } from 'rxjs/operators';

@Injectable()
export class LeaguesService {
    constructor(private httpClient: HttpClient, private apollo: Apollo) {}

    getLeagues(): Observable<[League]> {
        return this.apollo
            .watchQuery<[League]>({
                query: gql`
                    {
                        getLeagues {
                            name
                            league_slug
                            nation
                        }
                    }
                `,
                fetchPolicy: 'cache-first'
            })
            .valueChanges.pipe(map(x => x.data['getLeagues']));
    }

    getSeasonAvailable(param: string): Observable<[Season]> {
        return this.apollo
            .watchQuery<[Season]>({
                query: gql`
                    {
                            getSeasonAvailable(league_slug: "${param}") {
                                season_slug
                                name
                                season_start
                                season_end
                            }
                    }
                `,
                fetchPolicy: 'network-only'
            })
            .valueChanges.pipe(map(x => x.data['getSeasonAvailable']));
    }

    getLeageTopScore(leagueInput: LeagueInput): Observable<[TopScore]> {
        return this.apollo
            .query<[TopScore]>({
                query: gql`
                    query getLeageTopScore($leagueInput: LeagueInput) {
                        getLeageTopScore(leagueInput: $leagueInput) {
                            fullname
                            player_identifier
                            nationality
                            position
                            goals
                            penalties
                            matches
                        }
                    }
                `,
                variables: {
                    leagueInput: leagueInput
                }
            })
            .pipe(map(x => x.data['getLeageTopScore']));
    }
}
