import MainPage from "./pages/mainPage/MainPage";

function App() {
    return (
        <>
            <header className="w-full min-h-20 border-b-2 sticky top-0 bg-white">Header placeholder</header>
            <div className="flex h-full">
                <div className="h-full min-w-64 border-r-2">Sidebar placeholder</div>
                <main className="h-full flex-grow"><MainPage /></main>
            </div>
        </>
    );
}
export default App;
