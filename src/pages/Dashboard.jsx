import React, { useEffect, useState } from "react";
import TradeTable from "../components/TradeTable";

export default function Dashboard() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetch("/src/data/mockTrades.json")
      .then((res) => res.json())
      .then((data) => setTrades(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">RichieRich AI Dashboard</h1>
      <TradeTable trades={trades} />
    </div>
  );
}
