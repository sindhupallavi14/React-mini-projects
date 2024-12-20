import { useState } from "react";
import data from "./accordianData";
import "./accordian.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enablemulti, setEnablemulti] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleSelection(crntid) {
    setSelected(crntid === selected ? null : crntid);
  }

  function handlemultiSelection(crntid) {
    let cpymulti = [...multi];
    const findindexOfcrntid = cpymulti.indexOf(crntid);
    //  console.log(findindexOfcrntid);
    if (findindexOfcrntid == -1) {
      cpymulti.push(crntid);
    } else {
      cpymulti.splice(findindexOfcrntid, 1);
    }
    setMulti(cpymulti);
  }
  console.log(selected, multi);

  return (
    <div className="wrapper">
      <button onClick={() => setEnablemulti(!enablemulti)}>
        {enablemulti ? "Enable Single Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enablemulti
                    ? () => handlemultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enablemulti
                ? multi.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
              {/* {selected ===item.id ? 
                            <div  className="content">{item.answer}</div>
                        :null } */}
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}
