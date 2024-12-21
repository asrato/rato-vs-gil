import { useEffect, useMemo, useState } from "react";
import { fetchCSVData } from "../../api";

export interface ScoreI {
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

    const lastMatch = useMemo(() => data.at(-1), [data]);
    const matchHistory = data;

    return {
        lastMatch,
        matchHistory,
        state
    };
}