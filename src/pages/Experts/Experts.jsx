import { Navbar } from "react-bootstrap";
import Helper from "../../components/Helper";
import Sidebar from "../../components/Sidebar";

export default function Experts({ darkMode, setDarkMode }) {
    return <>
        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[60px]"
                style={{
                    flexGrow: 2,
                    marginTop: "116px",
                    // padding: "0 40px 60px",
                    height: "100%",
                    width: "calc(100% - 260px)",
                    minHeight: "100vh",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <div className="Reports">Reports</div>
            </main>
        </div>
    </>
}
