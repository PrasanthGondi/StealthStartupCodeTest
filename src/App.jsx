import { useEffect, useState } from "react";
import "./App.css";
import { BsGearWide } from "react-icons/bs";
import CategoryList from "./components/CategoryList";
import ItemsRow from "./components/ItemsRow";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const itemsURL = "https://646312614dca1a661353d0ee.mockapi.io/api/Files";
  const categoriesURL =
    "https://646312614dca1a661353d0ee.mockapi.io/api/Category";

  const getData = async () => {
    const categoriesDataFetch = await fetch(categoriesURL);
    const categoriesData = await categoriesDataFetch.json();
    const itemsDataFetch = await fetch(itemsURL);
    const itemsData = await itemsDataFetch.json();
    setCategories(categoriesData);
    setItems(itemsData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mainContainer flex">
      <Sidebar />
      <div className="mainPage">
        <Navbar />
        <SearchBar />
        <div className="flex CategoriesItemsSplitter">
          <div className="CategoriesContainer">
            <div className="flex categoriesTextIcon">
              <p className="categoriesText">CATEGORIES</p>
              <BsGearWide className="categoriesIcon" />
            </div>
            <div className="listsContainer">
              {categories.map((every) => (
                <CategoryList
                  Name={every.Name}
                  labelsArray={every.Labels}
                  key={every.id}
                />
              ))}
            </div>
          </div>
          <div className="itemsContainer">
            <h1 className="itemsText">All items</h1>
            <div className="flex itemsHeadingRow">
              <div className="icheckbox">
                <input type="checkbox" className="itemsCheckBox" />
              </div>
              <div className="iname">
                <p className="itemsHeadingText name">NAME</p>
              </div>
              <div className="iowner">
                <p className="itemsHeadingText owner">OWNER</p>
              </div>
              <div className="ilabels">
                <p className="itemsHeadingText labels">LABELS</p>
              </div>
              <div className="itype">
                <p className="itemsHeadingText type">TYPE</p>
              </div>
              <div className="imodified">
                <p className="itemsHeadingText modified">MODIFIED</p>
              </div>
              <div className="iaction">
                <p className="itemsHeadingText action">ACTION</p>
              </div>
            </div>
            <hr />
            {items.map((everyItem) => (
              <ItemsRow
                preview_image={everyItem.preview_image}
                file={everyItem.file}
                Type={everyItem.Type}
                Owner={everyItem.Owner}
                Name={everyItem.Name}
                ModifiedAt={everyItem.ModifietAt}
                key={everyItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
