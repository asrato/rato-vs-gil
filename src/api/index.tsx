import axios from 'axios';
import Papa from 'papaparse';
import { MatchI } from './models';

const fileUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4F_b_bTV96TxtijYvhWHPjBIVhbhN6idOJRou50noE7O60fS4PNM6VPp0HE0c1g/pub?gid=388600914&single=true&output=csv';

export async function fetchCSVData(): Promise<MatchI[]> {
    const response = await axios.get(fileUrl);

    return new Promise((resolve) => {
        Papa.parse(response.data, {
            complete: (result: { data: MatchI[] }) => {
                console.log(result.data)
                resolve(result.data);
            },
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
        });
    });
}
