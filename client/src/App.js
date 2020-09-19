import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Components/auth/Login.js";
import Register from "./Components/auth/Register.js";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation.js";
import Discover from "./Components/Pages/Discover";
import Home from "./Components/Pages/Home.js";
import Likes from "./Components/Pages/Likes";
import Profile from "./Components/Pages/Profile.js";
import Search from "./Components/Pages/Search";
import UserContext from "./context/UserContext";
import RecoAlgo from "./RecoAlgorithm/RecoAlgo.js";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let profileSet = [];
let likesSet = [];
export default function App() {
  const [userData, setUserData] = useState({
    token: "",
    user: "",
  });

  // useEffect(()=>{
  //     retrieveAllPersons();
  //     retrieveAllLikes();
  // },[]);

  // Checks if user logged in before
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        setUserData({ token, user: tokenRes.data });
      }
    };
    checkLoggedIn();
    retrieveAllPersons();
    // retrieveAllLikes();
  }, []);

  const retrieveAllPersons = () => {
    const token = localStorage.getItem("auth-token");
    console.log(token);
    Axios({
      method: "GET",
      url: "/profile/find",
      headers: { "x-auth-token": token },
    })
      //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjU1YjdmYTIyOTYwMGMwYWVkYzZhZiIsImlhdCI6MTYwMDQ3ODA3OX0.kQ8MUrCyL_LpdXiPujUo8s8D8Lp3FlR9pbR0lQ-4vlU

      // .get("/profile/find", token)
      //.then(({ data }) => {
      .then(({ data }) => {
        // console.log(data);
        if (!data) {
          console.log("this is no recommendation");
          Axios.get("/profile/discover").then((response) => {
            profileSet = [];
            profileSet = response.data;
            setProfileArray([...profileSet]);
          });
        } else {
          RecoAlgo(data).then((response) => {
            // console.log(response);
            // profileSet = [];
            // profileSet = response;
            // console.log(profileSet[0].loveFactor);
            setProfileArray(response);
            // console.log(profileSet);
          });
        }
      })
      // Axios.get("/profile/discover")
      //   .then((response) => {
      //     profileSet = [];
      //     profileSet = response.data;
      //     setProfileArray([...profileSet]);
      //   })
      .catch((err) => console.log(err));
  };

  const updateLikesSet = (id) => {
    const token = localStorage.getItem("auth-token");
    Axios({
      method: "POST",
      url: "/profile/newlikes",
      headers: { "x-auth-token": token },
      data: { id: id },
    })
      .then((res) => console.log("from newLikes", res))
      // let newLikes = [];
      // Axios.get("/profile/findProfile/" + id)
      //   .then((response) => {
      //     newLikes = response.data;
      //     let found = false;
      //     likesArray.forEach((like) => {
      //       if (like._id === newLikes._id) {
      //         found = true;
      //       }
      //     });
      //     if (!found) {
      //       Axios.post("/profile/newlikes", newLikes)
      //         .then(() => {
      //           // retrieveAllLikes();
      //         })
      //         .catch((err) => console.log(err));
      //     }
      //   })
      .catch((err) => console.log(err));
  };

  const personSearch = (e) => {
    setSearch({ ...search, name: e.target.value });
  };

  const [search, setSearch] = useState({
    name: "",
  });

  const [profileArray, setProfileArray] = useState(profileSet);
  const [likesArray, setLikesArray] = useState(likesSet);

  const personList = profileArray.filter(function (profile) {
    if (search.name.length < 0) {
      return profile;
    } else if (profile.first_name.includes(search.name)) {
      return profile;
    }
  });

  return (
    <>
      <BrowserRouter>
        {/* to give state to all of these components, can access userData and store current userData */}
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/discover">
              <Search personSearch={personSearch} />
              {personList.map((profile, id) => (
                <Discover key={id} updateLikes={updateLikesSet}>
                  {profile}
                </Discover>
              ))}
            </Route>
            <Route exact path="/profile/likes" component={LikesContainer} />
            {/* <Route exact path="/profile/likes">
              {likesArray.map((likes, id) => (
                <Likes key={id}>{likes}</Likes>
              ))}
            </Route> */}
          </Switch>
          <BottomNavigation />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

const LikesContainer = () => {
  const [likesArray, setLikesArray] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem("auth-token");
    const retrieveAllLikes = () => {
      Axios({
        method: "GET",
        url: "/profile/likes",
        headers: { "x-auth-token": token },
      })
        .then((response) => {
          console.log(response.data);
          // likesSet = [];
          // likesSet = response.likes;

          //setLikesArray([...likesSet]);
          setLikesArray(response.data.likes);
        })
        .catch((err) => console.log(err.response));
    };
    retrieveAllLikes();
  }, []);

  return (
    <div>
      {likesArray.map((likes, id) => (
        <Likes key={id}>{likes}</Likes>
      ))}
    </div>
  );
};
