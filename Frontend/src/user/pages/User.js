import React from "react";
import UserList from "../components/UserList";

const User = () => {
  const USERS=[
    {id:'1',name:'Siddhant',image:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1', places:'4'},
    {id:'1',name:'Romi',image:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1', places:'4'}
  ];
  return <UserList items={USERS}/>;
};

export default User;
