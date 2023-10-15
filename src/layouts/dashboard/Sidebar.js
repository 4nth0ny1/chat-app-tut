import {
  Avatar,
  Box,
  Divider,
  Icon,
  IconButton,
  Stack,
  Switch,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React, { useState } from "react";
import Logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Nav_Buttons } from "../../data/index";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        spacing={3}
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: 64,
              height: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="chat app logo" />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(el.index)}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear></Gear>
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => setSelected(3)}
              >
                <Gear></Gear>
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch defaultChecked onChange={() => onToggleMode()} />

          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
