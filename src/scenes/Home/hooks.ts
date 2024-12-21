import { useEffect, useMemo, useState } from "react";
import { fetchCSVData } from "../../api";
import { aggregateScoresByDate } from "./utils";

export interface ScoreI {
    date: string;
    rato: number;
    gil: number;
}

export default function useHome() {
    const [state, setState] = useState<string>('loading');
    const [data, setData] = useState<ScoreI[]>([]);

    useEffect(() => {
        if (state === 'loading') {
            fetchCSVData().then(results => {
                setData(results);
                setState('idle');
            });
        }
    }, [state]);

    const matchHistory = useMemo(() => aggregateScoresByDate(data), [data]);
    const lastMatch = useMemo(() => matchHistory.at(-1), [matchHistory]);

    return {
        lastMatch,
        matchHistory,
        state
    };
}