/* eslint-disable react/prop-types */
import "./index.css";

const ImageText = (props) => {
  const { imageUrl, TextContent, Type, Link = "" } = props;
  return (
    <div className="ImageTextContainer1">
      <img src={imageUrl} alt="avatar" className="ImageTextImage" />
      <div className="ImageTextContainer2">
        <p className="ImageTextContent">{TextContent}</p>
        {Type === "Link" ?? <p className="ImageTextLink">{Link}</p>}
      </div>
    </div>
  );
};

export default ImageText;
