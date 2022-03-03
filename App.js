import React from "react";
import { useState, createContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
// Router
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";

export const UserContext = createContext();

export default function App() {
  const [id, setId] = useState(0);

  const value = {
    id: id,
    setId: setId,
  };

  return (
    <UserContext.Provider value={value}>
      <SafeAreaView>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add" element={<AddPost />} />
            <Route exact path="/Profile" element={<Profile />} />
          </Routes>
        </NativeRouter>
      </SafeAreaView>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
