import { useEffect, useState } from "react";
import "./scroll indicator.css";

export function ScrollIndicator() {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prddata, setPrdData] = useState([]);
  const [scrollPercentage, setScrollpercentage] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      if (data && data.products && data.products.length) {
        setPrdData(data.products);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErr(err);
      console.log(err.message);
    }
  }

  function handleScrollPercent() {
    // console.log(document.body.scrollTop,document.documentElement.scrollTop,document.documentElement.scrollHeight,document.documentElement.clientHeight);
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const hgt =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollpercentage((howMuchScrolled / hgt) * 100);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <h1>loading.....</h1>;
  }

  if (err) {
    return <h2>{setErr}</h2>;
  }

  console.log(scrollPercentage);

  return (
    <div className="scroll-con">
      <div className="top-con">
      <h1>Custom Scroll Indicator</h1>
      <div className="scroll-progress-tracking-con">
        <div
          className="crnt-progress-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      </div>
      <div className="data-con">
        {prddata.map((prdct) => (
          <p>{prdct.title}</p>
        ))}
      </div>
    </div>
  );
}
