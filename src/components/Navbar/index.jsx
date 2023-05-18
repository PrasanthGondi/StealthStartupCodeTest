import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex Navbar">
      <h1 className="NavbarText">File Manager</h1>
      <button className="uploadButton">
        <div className="flex uploadButtonImageText">
          <AiOutlinePlus className="uploadIcon" />
          <p className="uploadText">Upload</p>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
