import { useEffect, useMemo, useState } from "react";
import { fetchCSVData } from "../../api";
import { aggregateScoresByDate, calculateTotalScore, ScoreI } from "./utils";

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
    const totalScore = useMemo(() => calculateTotalScore(data), [data]);

    return {
        lastMatch,
        matchHistory,
        state,
        totalScore
    };
}