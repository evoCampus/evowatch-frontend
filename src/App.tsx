import MainPage from "./pages/mainPage/MainPage";

function App() {
    return (
        <>
            <header className="w-full h-20 border-b-2">Header placeholder</header>
            <div className="flex h-full">
                <div className="h-full w-64 border-r-2">Sidebar placeholder</div>
                <main className="h-full w-full"><MainPage /></main>
            </div>
        </>
    );
}

export default App;
