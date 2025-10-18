interface TableRow {
  [key: string]: string;
}

interface ComparisonTableProps {
  headers: string[];
  rows: TableRow[];
  highlightColumn?: number;
}

export default function ComparisonTable({ headers, rows, highlightColumn }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse" data-testid="table-comparison">
        <thead>
          <tr className="bg-muted">
            {headers.map((header, index) => (
              <th 
                key={index}
                className={`px-6 py-4 text-left font-bold text-foreground border border-border ${
                  highlightColumn === index ? 'bg-primary/10' : ''
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover-elevate">
              {headers.map((header, colIndex) => (
                <td 
                  key={colIndex}
                  className={`px-6 py-4 text-muted-foreground border border-border ${
                    highlightColumn === colIndex ? 'bg-primary/5 font-medium text-foreground' : ''
                  }`}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
