import notfound from "../../assets/404.jpg";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
export default function NotFound({ darkMode, setDarkMode }) {

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-row">
                <Sidebar />
                <img className="w-full" src={notfound} alt="Notfound" />
            </div>
        </div>
    );
}