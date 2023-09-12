import React from "react";
import Navagationbar from "./Navagationbar";
import "./RootLayout.module.css";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navagationbar />
      <Outlet className="container" />
    </>
  );
}
