import React from "react";
import { useState, useEffect, createContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
// Router
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";
// Components
import { FetchAPI } from "./components/FetchAPI";

export const UserContext = createContext();

export default function App() {
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    FetchAPI()
      .then((res) => {
        // console.log(res);
        setPosts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const value = {
    id: id,
    setId: setId,
    posts: posts,
    setPosts: setPosts,
  };

  return (
    <UserContext.Provider value={value}>
      <SafeAreaView>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add" element={<AddPost />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </NativeRouter>
      </SafeAreaView>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
