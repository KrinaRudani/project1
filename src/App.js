import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Feed from './components/feed';
import Rightbar from './components/right';
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/navbar";
import Add from "./components/add"
import { useEffect, useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  // const [theme, setTheme] = useState(createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // }));

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // useEffect(()=>{
  //   const darkTheme = createTheme({
  //     palette: {
  //       mode: mode,
  //     },
  //   });
  //   setTheme(darkTheme)
  // },[mode])

  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>

        <Add />

      </Box>
    </ThemeProvider>
  );
}

export default App;