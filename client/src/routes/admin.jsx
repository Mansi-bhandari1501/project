import { useState, useEffect } from "react";
// import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
//   const [auth, setAuth] = useAuth();
const token = useSelector((state) => state.user.userToken)
  useEffect(() => {
    const authCheck = async (token) => {
        console.log(token)
      const res = await axios.get("http://localhost:8080/users/admin-auth",
      {headers:{Authorization: token}});
      console.log(res)
      if (res.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (token) authCheck();
  }, [token]);

  return ok ? <Outlet /> :<> "Loading"</>;
}