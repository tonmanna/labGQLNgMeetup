export interface League {
    identifier: string;
    league_slug: string;
    name: string;
    nation: string;
    level: number;
    federation: string;
    cup: boolean;
}

export interface Season {
    identifier: string;
    league_identifier: string;
    season_slug: string;
    name: string;
    season_start: Date;
    season_end: Date;
}

export interface TopScore {
    identifier: string;
    fullname: string;
    player_identifier: string;
    nationality: string;
    number: number;
    position: string;
    goals: number;
    penalties: number;
    matches: number;
    team: string;
    team_identifier: string;
}

export class LeagueInput {
    league_slug: string;
    season_slug: string;
}
