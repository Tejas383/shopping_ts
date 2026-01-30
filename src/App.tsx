import { useState } from "react";
import "./App.css";
import HomePageItems from "./HomePageItems";
import Filters from "./Filters";

function App() {
  const [cols, setCols] = useState(3);

  const [filters, setFilters] = useState({});
  
  return (
    <div className="bg-blue-50">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 text-white p-5 text-center">
        SHOPPING APP
      </h1>
      <div className="flex">
        <Filters
          cols={cols}
          setCols={setCols}
          filters={filters}
          setFilters={setFilters}
        />
        {/* <HomePageItems cols={cols} filters={filters} /> */}
        <HomePageItems cols={cols} />
      </div>
    </div>
  );
}

export default App;
