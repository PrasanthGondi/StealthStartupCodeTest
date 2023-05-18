const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex stealthImageText">
        <img src="/mainImage.png" className="stealthImage" />
        <h1 className="stealthText">Stealth</h1>
      </div>
      <hr className="sidebarLine" />
      <button className="sidebarButton">
        <div className="flex sidebarButtonImageText">
          <img src="/functionImage.png" className="sidebarButtonImage" />
          <p className="sidebarButtonText">File Manager</p>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
