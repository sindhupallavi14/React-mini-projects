import { useEffect, useRef, useState } from "react";
import "./scroll.css";

export function ScrollTopBottom() {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prddata, setPrdData] = useState([]);
  const [scrollPercentage, setScrollpercentage] = useState(0);

  const bottomRef=useRef(null)

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      if (data && data.products && data.products.length){
        setPrdData(data.products);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErr(err);
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <h1>loading.....</h1>;
  }

  if (err) {
    return <h2>{setErr}</h2>;
  }

  console.log(scrollPercentage);

  function handleScrollToTop()
  {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
  }

  function handleScrollToBottom()
  {
     bottomRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="scroll-container">
      <div className="top-container">
        <h1>Scroll to Top And Bottom Feature</h1>
        <h4>This is the Top section</h4>
        <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      </div>
      <div className="data-container">
        {prddata.map((prdct) => (
          <p>{prdct.title}</p>
        ))}
      </div>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h4>This is the Bottom section</h4>
    </div>
  );
}
