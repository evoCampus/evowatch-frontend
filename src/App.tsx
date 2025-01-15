import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070707] text-[#dbdbdb]">
      <header className="sticky top-0 min-h-20 w-full border-b-2 border-[#1f1f1f] bg-[#070707]">
        Header placeholder
      </header>
      <div className="flex flex-grow">
        <div className="min-w-64 border-r-2 border-[#1f1f1f]">
          Sidebar placeholder
        </div>
        <main className="flex-grow">
          <MainPage />
        </main>
      </div>
    </div>
  );
}
export default App;
