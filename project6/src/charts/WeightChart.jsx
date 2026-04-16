import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function WeightChart({ cats }) {
  const data = cats.map((c, index) => {
    const [min, max] = c.weight.metric.split(" - ").map(Number);
    const avg = (min + max) / 2;

    return {
      index: index + 1,   // simple numeric x-axis
      weight: avg
    };
  });

  return (
    <div className="chart-container">
      <h2>Weight Distribution of Cat Breeds</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis 
            dataKey="index"
            tick={{ fontSize: 12 }}
            stroke="#333"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="#333"
          />
          <Tooltip />
          <Line 
            type="monotone"
            dataKey="weight"
            stroke="#FF8A80"
            strokeWidth={3}
            dot={{ r: 4, fill: "#FF8A80" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
