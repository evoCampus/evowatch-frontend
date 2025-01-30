import MainPage from "./pages/mainPage/MainPage";
import Sidebar from "./components/sidebar/Sidebar.tsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070707] text-[#dbdbdb]">
      <header className="sticky top-0 min-h-20 w-full border-b-2 border-[#1f1f1f] bg-[#070707] z-30">
        Header placeholder
      </header>
      <div className="flex flex-grow">
        <div>
          <Sidebar />
        </div>
        <main className="flex-grow">
          <MainPage />
        </main>
      </div>
    </div>
  );
}
export default App;
