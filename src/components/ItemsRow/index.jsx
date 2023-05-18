/* eslint-disable react/prop-types */
import "./index.css";
import ImageText from "../ImageText";
import DeleteAction from "../DeleteAction";

const ItemsRow = ({
  preview_image,
  file,
  Type,
  Owner,
  Name,
  ModifiedAt,
  id,
}) => {
  //dateFormatter Code Begins
  const dateString = ModifiedAt;
  const date = new Date(dateString);

  const day = date.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);
  const formattedDay = `${day}${ordinalSuffix}`;

  const options = { year: "2-digit", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const monthYear = formattedDate.split(" ")[0];

  const finalFormat = `${formattedDay} ${monthYear} '${formattedDate.slice(
    -2
  )}`;

  // Function to get the ordinal suffix for a given day
  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  //Date Formatter Code Ends

  return (
    <div className="itemsRowContainer">
      <div className="itemsRow">
        <div className="itemsRowCheckboxcontainer">
          <input type="checkbox" className="itemsRowCheckbox" />
        </div>
        <div className="itemsRowImageText">
          <div className="itemsRowImageTextIT">
            <ImageText imageUrl={file} TextContent={Name} Type={Type} Link="" />
          </div>
        </div>
        <div className="itemsRowOwnerContainer">
          <img src={Owner} className="itemsRowOwner" />
        </div>
        <p className="itemsRowLabel">Label 1</p>
        <p className="itemsRowType">{Type}</p>
        <p className="itemsRowModified">{finalFormat}</p>
        <DeleteAction className="itemsRowDeleteAction" id={id} />
      </div>
      <hr className="itemsRowLine" />
    </div>
  );
};

export default ItemsRow;
