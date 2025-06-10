import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipSelectorPage from "./pages/skipSelectorPage";

function App() {
  return (
    <div className="container min-h-screen min-w-screen bg-gray-200 flex items-center justify-center p-4">
      <div>
        <Header />
        <main>
          <SkipSelectorPage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
