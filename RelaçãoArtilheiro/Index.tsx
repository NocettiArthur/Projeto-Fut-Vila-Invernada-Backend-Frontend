import Notificar from '../Notificar/Index'
import './Style.css'
import { useState } from 'react'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RelaçãoArtilheiro() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date ();
    
    const [minDate, setMinDate] = useState (min);
    const [maxDate, setMaxDate] = useState (max);

    return (
        <div className="FundoPreto">
            <h2> Relação de gols dos jogadores </h2>
            <div>
                <div className="ControleAlfa">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate (date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="ControleAlfa">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate (date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Data:</th>
                            <th>Jogador:</th>
                            <th>Quantidade de Gols:</th>
                            <th>Notificar SMS:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Arthur Nocetti</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Arthur Marcato</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Daniel</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Eduardo</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Gabriel Alencar</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Ivan</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>João Ciardullo</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Jonas</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Lucas Angelo</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Marcelo</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Miguel</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Nathan</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Nicolas</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Raphael</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Samuel</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Silas</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Thiago Araujo</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Thiago Fusco</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03/09/2022</td>
                            <td>Walison</td>
                            <td> 0 gols</td>
                            <td>
                                <div className="botão2">
                                    <div className="botão">
                                        <Notificar />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RelaçãoArtilheiro
