import { format } from "date-fns";

interface Score {
    date: string;
    rato: number;
    gil: number;
}

interface Result {
    rato: number;
    gil: number;
}

export function aggregateScoresByDate(data: Score[]): Score[] {
    const aggregatedData = data.reduce((acc, { date, rato, gil }) => {
        if (!acc[date]) {
            acc[date] = { rato: 0, gil: 0 };
        }
        acc[date].rato += rato;
        acc[date].gil += gil;
        return acc;
    }, {} as Record<string, Result>);

    return Object.keys(aggregatedData).map(date => ({
        date,
        rato: aggregatedData[date].rato,
        gil: aggregatedData[date].gil
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