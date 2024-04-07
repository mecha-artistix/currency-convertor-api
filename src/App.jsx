import { useState, useEffect } from "react";

import "./App.css";

`https://api.frankfurter.app/latest?amount=100&from=USD&to=EUR`;

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setfromCur] = useState("USD");
  const [toCur, settoCur] = useState("EUR");
  const [converted, setconverted] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();

      setconverted(data.rates[toCur]);
    }
    if (fromCur === toCur) return setconverted(amount);
    fetchData();
  }, [amount, fromCur, toCur]);

  return (
    <>
      <div>
        <input
          type="text"
          name="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCur}
          name="from"
          onChange={(e) => setfromCur(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={toCur}
          name="to"
          onChange={(e) => settoCur(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>
          {converted} {toCur}
        </p>
      </div>
    </>
  );
}

export default App;
