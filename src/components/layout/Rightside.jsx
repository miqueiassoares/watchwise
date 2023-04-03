import Arrow from "../../assets/img/rightside/arrow.png";
import Drop from "../../assets/img/rightside/arrow-drop.svg";
import Notification from "../../assets/img/rightside/Notification-enable.svg";
import Avatar from "../../assets/img/rightside/user-logo.png";

const Rightside = ({ handleClosed }) => {
  return(
    <div className="rightside">
      <button onClick={handleClosed} className="closed">
        <img src={Arrow} alt="" />
      </button>
      <div className="rightside__user">
        <div className="rightside__user__notification">
          <img src={Notification} alt="Notifications" />
        </div>
        <div className="rightside__user__data">
          <span className="rightside__user__data__name">User</span>
          <img src={Drop} alt="More" className="dropdawn" />
          <img src={Avatar} alt="Avatar" className="rightside__user__data__avatar" />
        </div>
      </div>
      <div className="rightside__contitnue">
          <h2>Continue</h2>
          <div className="bloco-avancar-recuar">
            
          </div>
      </div>
    </div>
  )
}

export default Rightside;