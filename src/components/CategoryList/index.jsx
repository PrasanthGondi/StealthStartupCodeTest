/* eslint-disable react/prop-types */
import "./index.css";

const CategoryList = ({ Name, labelsArray }) => {
  return (
    <ul className="CategoryListUL">
      <p className="CatergoryListItemsHeading">{Name}</p>
      {labelsArray.map((everyLabel) => (
        <div key={everyLabel.id} className="CatergoryListItems">
          <input type="checkbox" className="CatergoryListItemsCheckbox" />
          <li key={everyLabel.id} className="CatergoryListItemsLists">
            {everyLabel.Name}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default CategoryList;
