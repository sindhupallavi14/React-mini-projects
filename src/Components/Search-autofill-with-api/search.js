import { useEffect, useState } from "react";
import "./search.css";
import { Suggestion } from "./suggestion";

export function SearchAutofill() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setErr(null);
      }
    } catch (err) {
      setLoading(false);
      setErr(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users, filterUsers);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filterData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(e)
  {
     setSearchParam(e.target.innerText);
     setFilterUsers([])
     setShowDropDown(false)
  }

  return (
    <div className="search-autofill-con">
      {loading ? (
        <h3>loading....!!</h3>
      ) : (
        <input
          name="search-user"
          placeholder="search users....."
          value={searchParam}
          onChange={handleChange}
        />
      )}

      {showDropDown && <Suggestion data={filterUsers} onClick={handleClick}/>}
    </div>
  );
}
