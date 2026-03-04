'use client'
import { NextPage } from "next";
import { useEffect } from "react";

const CustomErrorPage: NextPage = () => {
  useEffect(() => {
    throw new Error("This is a custom error page");
  }, [])
  return <></>
}

export default CustomErrorPage;