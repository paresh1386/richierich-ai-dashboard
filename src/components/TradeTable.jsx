import React from "react";

export default function TradeTable({ trades }) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">Stock</th>
          <th className="border p-2">Entry</th>
          <th className="border p-2">SL</th>
          <th className="border p-2">Target</th>
          <th className="border p-2">Score</th>
          <th className="border p-2">Type</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade, i) => (
          <tr key={i}>
            <td className="border p-2">{trade.stock}</td>
            <td className="border p-2">{trade.entry}</td>
            <td className="border p-2">{trade.sl}</td>
            <td className="border p-2">{trade.target}</td>
            <td className="border p-2">{trade.sniperScore}</td>
            <td className="border p-2">{trade.type}</td>
            <td className="border p-2">{trade.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
