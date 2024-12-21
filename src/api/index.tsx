import axios from 'axios';
import Papa from 'papaparse';
import { ScoreI } from '../scenes/Home/hooks';

const fileUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQZQu_XS9Iv1mguo_1UyhoLEdBTT7HFJ5e_WS26u9xtuIaWf1EDsBgESMuMsVmEWQ0kUD70_a-LYIBu/pub?gid=0&single=true&output=csv';

export async function fetchCSVData(): Promise<ScoreI[]> {
    const response = await axios.get(fileUrl);

    return new Promise((resolve) => {
        Papa.parse(response.data, {
            complete: (result: { data: ScoreI[] }) => {
                resolve(result.data);
            },
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
        });
    });
}