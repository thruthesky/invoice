import { csvData } from "./features.csv";

type LineData = {
  discount: string;
  no: string;
  category: string;
  feature: string;
  description: string;
  page: string;
  amount: string;
};

const csv = csvData;

function parseCSV(csv: string): string[][] {
  const lines = csv.split("\n");

  // each line is split by comma and trimmed
  const data = lines.map((line) => line.split(","));

  return data;
}

const parsedData = parseCSV(csv);

const lines: LineData[] = [];

for (const line of parsedData) {
  const lineData: LineData = {
    discount: line[1],
    no: line[2],
    category: line[6],
    feature: line[7],
    description: line[8],
    amount: line[14],
    page: "1",
  };
  lines.push(lineData);
}

console.log(lines);
