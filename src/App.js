import { useState } from "react";
import "./App.css";
import { Users } from "./users";
// import Table1 from "./Table1";
import Table2 from "./Table2";

function App() {
  const [query, setQuery] = useState("");
  // console.log(query);
  
  //! Table1
  /*
  const filteredData = Users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(query.toLowerCase()) ||
      user.last_name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
  );
*/

  //! Table2
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* <ul className="list">
        {filteredData.map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}

      {/* <Table1 filteredData={filteredData} /> */}
      <Table2 data={search(Users)} />
    </div>
  );
}

export default App;
