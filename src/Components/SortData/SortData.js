import React, { useEffect, useState } from "react";
import "./SortData.css";

export default function SortData() {
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [users, setUsers] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const result = await response.json();
      // console.log(result);

      if (result && result.users && result.users.length > 0) {
        setUsers(result.users);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    let cpyUsers=[...users];
   if(sort==="ascending")
   {
       cpyUsers = cpyUsers.sort((first,second)=>first.firstName>second.firstName?1:-1)
       setUsers(cpyUsers)
   }
   else if(sort==="descending")
   {
    cpyUsers = cpyUsers.sort((first,second)=>first.firstName>second.firstName?-1:1)
    setUsers(cpyUsers)  
   }
  },[sort])

  if (loading) {
    return <h4>Loading....!!!!</h4>;
  }

  console.log(sort);

  return (
    <div className="sort-data-con">
             <h2>SortData</h2> 
             <div className="sort-dropDown">
        <select name="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Please Select Option</option>
          <option value="ascending">Sort A-Z</option>
          <option value="descending">Sort Z-A</option>
        </select>
      </div>
      <ul className="user-con">
        {users && users.length
          ? users.map((userItem) => (
              <li className="user">
                <p>{userItem.firstName}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
