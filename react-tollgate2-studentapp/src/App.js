import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import "./App.css";
import ShowStudent from "./pages/ShowStudent";
import AddStudent from "./pages/AddStudent";
import { StudentContextProvider } from "./context/StudentContext";
function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <StudentContextProvider>
            <CssBaseline />
            <Header />
            <Routes>
              <Route path='/' element={<ShowStudent />} />
              <Route path='add-students' element={<AddStudent />} />
            </Routes>
          </StudentContextProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
