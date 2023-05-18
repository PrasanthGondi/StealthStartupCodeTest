import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import "./index.css";

const DeleteAction = ({ id }) => {
  const PopupId = `myPopup${id}`;
  function myFunction() {
    var popup = document.getElementById(PopupId);
    popup.classList.toggle("show");
  }

  return (
    <div className="actionIcons">
      <FaEdit className="editIcon" />
      <div className="popup" onClick={myFunction}>
        <MdDelete className="deleteIcon" />
        <span className="popuptext" id={PopupId}>
          {/* <div className="popupContainer"> */}
          <div className="popupContainerTop">
            <MdDelete className="popupDeleteIcon" />
            <p className="popupRemove">Remove</p>
          </div>
          <div className="popupContainerBottom">
            <p className="popupSure">Are you sure</p>
            <div className="popupIcons">
              <RxCross2 className="popupWrong" />
              <TiTick className="popupTick" />
            </div>
          </div>
          {/* </div> */}
        </span>
      </div>
    </div>
  );
};

export default DeleteAction;
