import Logo from "../../../img/Logo.svg";
import { FiUsers } from "react-icons/fi";

function BarraLateral( item: {classe: string, icon: string}) {
  return (
    <div className={item.classe}>
      <img src={Logo} alt="Logo" className="Logo"/>
      <button className="iconeRoxo">
        <FiUsers className={item.icon}/>
      </button>
    </div>
  );
}

export default BarraLateral;