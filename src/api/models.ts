export interface PlayersI {
    gil: number;
    rato: number;
}

export interface ResultI extends PlayersI {
    summary: string[];
}

export interface MatchI extends ResultI {
    date: string;
}