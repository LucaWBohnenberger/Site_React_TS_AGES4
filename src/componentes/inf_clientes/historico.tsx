import { useParams } from "react-router-dom"
import Data from "../../mock/Mock.json"


function Historico() {
    const { id } = useParams()
    const data = (Data.find(item => item.id === id));

    return (
        <div className="Leo">
            <h3>Historico</h3>
            <div className="hist_inf">
                <div className="flex4">
                    <p className="feedback">Feedback</p>
                    <p className="feedback">Data da Viagem</p>
                </div>

                {
                    data?.history.map((item) => (
                        <div className="hist">
                            <p className="descricao">{item.feedback}</p>
                            <p className="data">{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Historico;