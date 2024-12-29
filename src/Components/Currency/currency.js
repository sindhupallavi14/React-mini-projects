import React, { useEffect, useState } from "react";
import "./currency.css"

export default function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromcurrency, setFromCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmt, setConvertedAmt] = useState();
  const [toCurrency, setToCurrency] = useState("INR");

  async function CurrencyConverter() {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${fromcurrency}`,
      { method: "GET" }
    );
    const result = await response.json();

    console.log(result);
    const calculatedRate = result?.rates[`${toCurrency}`];

    setExchangeRate(calculatedRate);
    setConvertedAmt((amount * calculatedRate).toFixed(2));
  }
  useEffect(() => {
    CurrencyConverter();
  }, [amount, fromcurrency, toCurrency]);

  return (
    <div className="currency-converter-con">
      <h1>Currency converter</h1>
      <div className="input-con">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
          type="number"
          placeholder="Enter Amount"
        />
        <select
          value={fromcurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
          <option value={"EUR"}>EUR</option>
        </select>
      </div>
      <p>TO</p>
      <div className="input-con">
        <input type="text" value={convertedAmt} readOnly />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value={"EUR"}>EUR</option>
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
        </select>
      </div>
      <p>
        Exchnage Rate : 1 {fromcurrency} ={exchangeRate} {toCurrency}
      </p>
    </div>
  );
}
