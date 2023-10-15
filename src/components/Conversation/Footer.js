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
import { styled, useTheme } from "@mui/material/styles";
import StyledInput from "../StyledInput";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,

        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={3}>
        <StyledInput
          fullWidth
          placeholder="Write a message ..."
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
