import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import FilterType from "./FilterType.jsx";

import categories from "./constants/categories";
import brands from "./constants/brands";
import colors from "./constants/colors";
import connectivity from "./constants/connectivity";
import releaseYear from "./constants/releaseYear";
import tags from "./constants/tags";

const Filters = ({ cols, setCols, filters, setFilters }) => {
  const handleCheckboxChange = (filterType, value, checked) => {
    setFilters((prev) => {
      const current = prev[filterType] || [];

      return {
        ...prev,
        [filterType]: checked
          ? [...current, value]
          : current.filter((v) => v !== value),
      };
    });
  };

  return (
    <div className="w-[20%] border my-3 ml-2 rounded-xl p-3 shadow-lg shadow-purple-300/30 bg-white">
      <div className="text-center my-3 ">
        <p>Number of cards per row:</p>
        <Input
          type="number"
          value={cols}
          placeholder="cols"
          min="2"
          max="4"
          className="m-2 h-5 w-15 focus-visible:ring-[1px] focus-visible:border-purple-300 pl-3 pr-0"
          onChange={(e) => setCols(Number(e.target.value))}
        />
      </div>

      <div className="">
        <h2 className="font-bold text-2xl text-center underline text-purple-500 ">
          FILTERS
        </h2>

        <Form>
          <form className="w-2/3 space-y-2 w-full py-3">
            <FilterType
              type="brand"
              label="Brands"
              filterData={brands}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="category"
              label="Categories"
              filterData={categories}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="color"
              label="Colors"
              filterData={colors}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="connectivity"
              label="Connectivity"
              filterData={connectivity}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="releaseYear"
              label="Release Year"
              filterData={releaseYear}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="tags"
              label="Tags"
              filterData={tags}
              handleCheckboxChange={handleCheckboxChange}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
