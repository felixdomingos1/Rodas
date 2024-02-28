import { useEffect, useState } from "react";
import { Routes, Route, json } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import LoginForm from "./scenes/Login";
import Fatura from "./scenes/Fatura";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [currentSecretario, setcurrentSecretario] = useState(false);
    const [newFactura, setnewFactura] = useState({});

    const [alunoData, setAlunoData] = useState({
        "nomeCompleto": "",
        "numeroDeprocesso": "",
        "email": "",
        "BI": "",
        "turma": "",
        "classe": "",
        "curso": "sem curso",
    });


    useEffect(() => {
        const data = localStorage.getItem('currentUser')

        if (data) {
            setisAuthenticated(true)
            setcurrentSecretario(JSON.parse(data))
        }
    }, [])

    function mudarUser(params) {
        setAlunoData(alunoData)
    }
    function logarSecretario(secretarioData) {
        setcurrentSecretario(secretarioData)
        localStorage.setItem('currentUser', JSON.stringify(secretarioData))
        setisAuthenticated(!isAuthenticated)
    }
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    {!isAuthenticated && (
                        <main className="content">
                            <Routes>
                                <Route path="/" element={<LoginForm logarSecretario={logarSecretario} />} />
                            </Routes>
                        </main>
                    )}

                    {isAuthenticated && (
                        <>
                            <Sidebar currentSecretario={currentSecretario} isSidebar={isSidebar} />
                            <main className="content">
                                <Topbar setIsSidebar={setIsSidebar} />
                                <Routes>
                                    <Route path="/" element={<Dashboard currentSecretario={currentSecretario} />} />
                                    <Route path="/team" element={<Team />} />
                                    <Route path="/cadastramentos-de-usuario" element={<Contacts />} />
                                    <Route path="/invoices" element={<Invoices />} />
                                    <Route path="/form"
                                        element={<Form
                                            alunoData={alunoData}
                                            setAlunoData={setAlunoData}
                                            mudarUser={mudarUser}
                                            newFactura={newFactura}
                                             setnewFactura={setnewFactura}  />} />
                                    <Route path="/bar" element={<Bar />} />
                                    <Route path="/pie" element={<Pie />} />
                                    <Route path="/line" element={<Line />} />
                                    <Route path="/faq" element={<FAQ />} />
                                    <Route path="/calendar" element={<Calendar />} />
                                    <Route path="/geography" element={<Geography />} />
                                    <Route path="/gerando-fatura" element={<Fatura
                                        alunoData={alunoData} setAlunoData={setAlunoData}
                                        newFactura={newFactura} setnewFactura={setnewFactura} />} />
                                </Routes>
                            </main>
                        </>
                    )}
                </div>

            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
