import Logo from "../../../img/Logo.svg";
import { FiUsers } from "react-icons/fi";

function BarraLateral() {
  return (
    <div className="barra_lateral">
      <img src={Logo} alt="Logo" className="Logo"/>
      <button className="iconeRoxo">
        <FiUsers
        color="white"
          className="iconeUsers"
          style={{ color: "#FFFFFF !important", fontSize: "1.5rem" }}
        />
      </button>
    </div>
  );
}

export default BarraLateral;