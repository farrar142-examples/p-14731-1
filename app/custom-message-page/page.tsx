'use client'
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

const CustomMessagePage = () => {

  useEffect(() => {
    Sentry.captureMessage("This is a custom message page");
  }, [])
  return <></>
}

export default CustomMessagePage;