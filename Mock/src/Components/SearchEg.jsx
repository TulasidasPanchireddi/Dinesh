import React, { useState } from "react";

const SearchEg = () => {
  const [search, setSearch] = useState("");

  const usersData = [
    { id: 1, name: "Tulasi", age: 22, city: "Hyderabad" },
    { id: 2, name: "Sameer", age: 24, city: "Mumbai" },
    { id: 3, name: "Ganesh", age: 21, city: "Delhi" },
    { id: 4, name: "Ramesh", age: 23, city: "Chennai" },
  ];
     const filteredUsers = usersData.filter((ele) =>
        ele.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    let handelChange=(e)=>[
        setSearch(e.target.value)
    ]

  return (
    <>
    <div className="border flex flex-col justify-center items-center h-[500px] gap-2.5 p-4">
   
    <input type="text" placeholder="Search by name..." value={search} onChange={handelChange} className="border" />
    <table className="border" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (filteredUsers.map(({id,name,age,city}) => (
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          )}
        </tbody>
    </table>
</div>
    </>
  );
};

export default SearchEg;
