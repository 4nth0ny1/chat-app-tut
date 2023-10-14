import React, { Suspense, lazy } from "react";
import { Stack, Box } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation/index";

// Dynamic loading
const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor: "#fff",
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
