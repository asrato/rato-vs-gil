import { format } from "date-fns";

export interface ScoreI {
    date: string;
    rato: number;
    gil: number;
    summary: string[];
}

export interface ResultI {
    rato: number;
    gil: number;
    summary: string[];
}

export interface TotalI {
    rato: number;
    gil: number;
}

export function aggregateScoresByDate(data: ScoreI[]): ScoreI[] {
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

export function calculateTotalScore(data: ScoreI[]): TotalI {
    return data.reduce(
        (totals, entry) => {
            totals.rato += entry.rato;
            totals.gil += entry.gil;
            return totals;
        },
        { rato: 0, gil: 0 }
    );
}