import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
export default function Home({ navigation }) {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const adminLogin = localStorage.getItem("adminLogin");
  //   console.log("inside home useEffect--", window.location.pathname);
  //   if (window.location.pathname === "/home") {
  // console.log(" home useEffect inside if --");
  // window.onpopstate = () => {
  //   // console.log(" home useEffect- if inside onpop-------");
  //   // console.log("hello");
  //   // console.log("location ===>", window.location.pathname);
  //   // console.log("location ===>");
  // alert("You're not logged in!");
  // navigate("/home");
  // };
  //   }
  // }, []);
  // const [text, setText] = useState("");
  // const hasUnsavedChanges = Boolean(text);

  // useEffect(
  //   () =>
  //     navigation.addListener("beforeRemove", (e) => {
  //       // if (!hasUnsavedChanges) {
  //       //   // If we don't have unsaved changes, then we don't need to do anything
  //       //   return;
  //       // }

  //       // Prevent default behavior of leaving the screen
  //       e.preventDefault();

  //       // Prompt the user before leaving the screen
  //       Alert.alert(
  //         "Discard changes?",
  //         "You have unsaved changes. Are you sure to discard them and leave the screen?"
  //         [
  //           { text: "Don't leave", style: "cancel", onPress: () => {} },
  //           {
  //             text: "Discard",
  //             style: "destructive",
  //             // If the user confirmed, then we dispatch the action we blocked earlier
  //             // This will continue the action that had triggered the removal of the screen
  //             onPress: () => navigation.dispatch(e.data.action),
  //           },
  //         ]
  //       );
  //     }),
  //   [navigation]
  // );
  return (
    <div>
      <Navbar isLoggedIn={false} user={null} />
      <h1>Welcome to Home</h1>
    </div>
  );
}
