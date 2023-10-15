import {
  Stack,
  Box,
  Avatar,
  Badge,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Icon,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlane,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      {/* Chat Header */}
      <Header />
      {/* Msg */}
      <Box width="100%" sx={{ flexGrow: 1 }}></Box>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
