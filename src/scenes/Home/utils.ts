import { format } from "date-fns";
import { MatchI, PlayersI, ResultI } from "../../api/models";

export function aggregateScoresByDate(data: MatchI[]): MatchI[] {
    const aggregatedData = data.reduce((acc, { date, rato, gil }) => {
        if (!acc[date]) {
            acc[date] = { rato: 0, gil: 0, summary: [] };
        }
        acc[date].rato += rato;
        acc[date].gil += gil;
        acc[date].summary.push(rato > gil ? 'rato' : 'gil');
        return acc;
    }, {} as Record<string, ResultI>);

    return Object.keys(aggregatedData).map(date => ({
        date,
        rato: aggregatedData[date].rato,
        gil: aggregatedData[date].gil,
        summary: aggregatedData[date].summary
    })).reverse();
}

export function formatDate(date: string) {
    return format(date, 'MMM dd, yyyy');
}

export function calculateTotalScore(data: MatchI[]): PlayersI {
    return data.reduce(
        (totals, entry) => {
            totals.rato += entry.rato;
            totals.gil += entry.gil;
            return totals;
        },
        { rato: 0, gil: 0 }
    );
}

export function calculateFirstGameWinPercentage(data: MatchI[]): PlayersI {
    let ratoWins = 0;
    let gilWins = 0;
    let totalGames = 0;
    let lastDate: string | null = null;

    for (const game of data) {
        if (game.date !== lastDate) {
            // first game of the match
            totalGames++;
            if (game.rato > game.gil) {
                ratoWins++;
            } else if (game.gil > game.rato) {
                gilWins++;
            }
            lastDate = game.date; // updates last processed match date
        }
    }

    return {
        rato: Number(((ratoWins / totalGames) * 100).toFixed(2)),
        gil: Number(((gilWins / totalGames) * 100).toFixed(2))
    };
}

export function calculateMeanWinPercentage(data: MatchI[]): { rato: number; gil: number } {
    const percentages = data.map(({ rato, gil }) => {
        const total = rato + gil;
        return {
            rato: (total > 0 ? (rato / total) * 100 : 0),
            gil: (total > 0 ? (gil / total) * 100 : 0),
        };
    });

    const totalPercentages = percentages.reduce(
        (acc, { rato, gil }) => {
            acc.rato += rato;
            acc.gil += gil;
            return acc;
        },
        { rato: 0, gil: 0 }
    );

    const numMatches = data.length;

    return {
        rato: Number((totalPercentages.rato / numMatches).toFixed(0)),
        gil: Number((totalPercentages.gil / numMatches).toFixed(0)),
    };
}

export function calculateHighestWinStreak(data: MatchI[]): PlayersI {
    const streaks = { rato: 0, gil: 0 };

    for (const match of data) {
        let currentStreakRato = 0, currentStreakGil = 0;

        for (const player of match.summary) {
            if (player === 'rato') {
                currentStreakRato++;
                currentStreakGil = 0;  // Reset Gil's streak if Rato wins
            } else if (player === 'gil') {
                currentStreakGil++;
                currentStreakRato = 0;  // Reset Rato's streak if Gil wins
            }

            // Update the highest streak for each player if necessary
            streaks.rato = Math.max(streaks.rato, currentStreakRato);
            streaks.gil = Math.max(streaks.gil, currentStreakGil);
        }
    }

    return streaks;
}
