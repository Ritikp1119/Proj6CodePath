import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function LifeSpanChart({ cats }) {
  const data = cats.map((c) => ({
    name: c.name,
    life: Number(c.life_span.split(" - ")[0])
  }));

  return (
    <div className="chart-container">
      <h2>Life Span of Cat Breeds</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Bar dataKey="life" fill="#8BC34A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
