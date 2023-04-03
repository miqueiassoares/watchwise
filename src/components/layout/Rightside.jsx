import Arrow from "../../assets/img/rightside/arrow.png";

const Rightside = ({ handleClosed }) => {
  return(
    <div className="rightside">
      <button onClick={handleClosed} className="closed">
        <img src={Arrow} alt="" />
      </button>
      
      Right side
    </div>
  )
}

export default Rightside;