import React, { Suspense, lazy } from "react";
import Chats from "./Chats";

// Dynamic loading
const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <>
      {/* <h2>App Component</h2> */}
      <Chats />
    </>
  );
};

export default GeneralApp;
