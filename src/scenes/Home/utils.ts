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
    }));
}

export function getWinnerColor(rato: number, gil: number) {
    if (rato > gil) return '#FA0E0E1F';
    if (rato < gil) return '#096a001F';
    return '#0000001F';
}

export function formatDate(date: string) {
    return format(date, 'MMM dd, yyyy');
}