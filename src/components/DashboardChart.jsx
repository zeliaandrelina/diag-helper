import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const data = [
  { name: "Total de Usuários", value: 40 },
  { name: "Usuários Ativos", value: 25 },
  { name: "Usuários Inativos", value: 15 },
  { name: "Solicitações de Senhas", value: 10 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="p-8 max-w-7xl mx-auto">
        {/* TÍTULO */}
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Dashboard
        </h1>

       <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-7 justify-items-center">
  {[
    { title: "Total de Usuários", value: "5" },
    { title: "Usuários Ativos", value: "3" },
    { title: "Usuários Inativos", value: "2" },
    { title: "Solicitações de Senhas", value: "2" },
  ].map((card) => (
    <div
      key={card.title}
      className="border rounded-xl p-4 shadow-md bg-white flex flex-col justify-center items-center min-h-[110px] w-full max-w-[220px]"
    >
      <p className="text-2xl text-gray-600 mb-2 font-medium  justify-center text-center  whitespace-normal max-w-[120px]">
        {card.title}
      </p>
      <p className="font-bold text-2xl text-gray-900 text-center">
        {card.value}
      </p>
    </div>
  ))}
</div>


        {/* GRÁFICO + RESUMO */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* GRÁFICO */}
          <div className="flex-1 flex justify-center">
            <PieChart width={350} height={350}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                dataKey="value"
                label={({ value }) => (
                  <text fill="#333" fontSize={14} fontWeight="bold">
                    {value}
                  </text>
                )}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* RESUMO */}
          <div className="flex-1">
            <h2 className="font-bold text-3xl mb-4">Resumo</h2>
            <ul className="space-y-3">
              {data.map((entry, index) => (
                <li
                  key={entry.name}
                  className="flex items-center space-x-3"
                >
                  <span
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  {/* TEXTO COM QUEBRA AUTOMÁTICA */}
                  <span className="text-2xl text-gray-700 font-medium break-words whitespace-normal">
                    {entry.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
