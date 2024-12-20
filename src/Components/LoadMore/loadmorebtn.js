import { useEffect, useState } from "react";
import "./loadmorebtn.css";

export function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setPrdcts] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [disablebtn,setDisablebtn]=useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            cnt === 0 ? 0 : cnt * 20
          }`
        );
        const data = await response.json();
        console.log(data);
        if (data && data.products && data.products.length) {
          setPrdcts((prev)=>[...prev,...data.products]);
          setLoading(false);
        }
      } catch (e) {
        console.log(e.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, [cnt]);

  useEffect(()=>
    {
      products.length === 100?setDisablebtn(true):setDisablebtn(false);  
    },[products])


  if (loading) {
    return <div>LOADING............</div>;
  }

  return (
    <div className="load-more-container">
      <div className="prdct-con">
        {products && products.length
          ? products.map((item,index) => (
              <div key={index} className="prdct">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-con">
        <button disabled={disablebtn} onClick={()=>setCnt(cnt+1)}>Load More.....</button>
          {disablebtn && <p>You have reached 100 products</p>}
      </div>
    </div>
  );
}
