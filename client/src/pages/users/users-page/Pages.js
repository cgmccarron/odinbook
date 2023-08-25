import React, { useState, useEffect } from "react";
import UserSearch from "../UserSearch";
import Users from "../Users";
import instance from "../../../axios";
import "./Pages.css";

const Pages = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    console.log("rerender");
    const timer = setTimeout(() => {
      getUsers();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getUsers = async () => {
    try {
      const res = await instance.get("user/users");
      setUsersData(res.data);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className="page">
      <UserSearch className="page__top" />

      {usersData.length > 0 ? (
        <>
          {usersData.map((e) => {
            return (
              <Users key={e._id} name={e.username} profilePic={e.avatar} />
            );
          })}{" "}
        </>
      ) : (
        <div>Pending</div>
      )}
    </div>
  );
};

export default Pages;
