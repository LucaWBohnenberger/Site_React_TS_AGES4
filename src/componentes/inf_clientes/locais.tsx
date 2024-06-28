import { useParams } from "react-router-dom"
import Data from "../../mock/Mock.json"


function Locais() {
    const { id } = useParams()
    const data = (Data.find(item => item.id === id));

    return (
        <div className="local">
            <h2 className="titulo_local">Locais Visitados</h2>
            <div className="caixote">
                {
                    data?.visits.map((item) => (
                        <div className="local_visita">
                            <p className="lcl_data">{item.city}</p>
                            <p className="lcl_data">{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Locais;