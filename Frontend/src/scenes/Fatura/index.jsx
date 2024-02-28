import React from "react";
import { Box } from "@mui/material";
import './index.css'
import generatePDF, { Margin } from 'react-to-pdf'
const personalizacao = {
    method: 'open',
    page: {
        margin: Margin.MEDIUM,
        format: 'A4',
        orientation:'portrait'

    }
}
const recupeparConteudoParaPDF = () => document.getElementById('conteudo')
const Fatura = ({ alunoData, setAlunoData,setnewFactura, newFactura }) => {
    console.log(alunoData);

  return (
    <Box m="20px" >
        <button onClick={()=> generatePDF(recupeparConteudoParaPDF, personalizacao)}>
            GERAR PDF
        </button>
        <div className="container" id="conteudo">
            <div className="top">
                <div className="leftTop">
                    <div className="header"> 
                        <div className="logo">
                            <img src={`../../assets/logoRodas.jpg`} alt="" />
                        </div>
                        <span> RODAS TRANSPORTES, (SU) LDA</span>
                        <div><strong>NIF:324234235</strong></div>
                        <span>Rua Direita do Patriota de Frente ao Largo do Patriota</span>
                    </div>
                    <div className="table">
                        <strong>Dados do Pagamento</strong>
                        <span>Impressão : 2024-21-21 03:32:03</span>
                        <span>Estado : Concluido</span>
                        <span>Deposito : 2024-21-21 03:32:03</span>
                        <span>Cordenadas Bancarias : 12312312312</span>
                        <span>Forma de Pagamento : Deposito </span>
                    </div>
                </div>
                <div className="rightTop">
                    <div className="rightHeader">
                        <span>Emitio por programa validado nº 123/AGT/2024</span>
                    </div>
                    <div className="datas">
                        <span className="Adjetivo">Exmo. sr</span>
                        <span className="name">{ alunoData.nomeCompleto}</span>
                        <span className="span">92323242/923445453</span>
                        <span className="span">V/Contribuinte Consumidor final</span>
                    </div>
                    <div className="datas">
                        <span className="Matricula">Dados da Matricula</span>
                        <span className="span">Processo: { alunoData.numeroDeprocesso }</span>
                        <span className="span">Curso : { alunoData.curso }</span>
                        <span className="span">Classe : { alunoData.classe }</span>
                        <span className="span">Turma :{ alunoData.turma }</span>
                    </div>
                </div>
            </div>
            <div className="middle">
                <table>
                    <tr>
                        <th>Nº</th>
                        <th>OP. Nº</th>
                        <th>Descrição</th>
                        <th>QT</th>
                        <th>Preço</th>
                        <th>IVA %</th>
                        <th>Desc.</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>{ newFactura.numeroDeFactura}</td>
                        <td>2.024</td>
                        <td>{newFactura.mes}</td>
                        <td>1</td>
                        <td>{ alunoData.valor }</td>
                        <td>0</td>
                        <td>0,00</td>
                        <td>34.000.00 kzs</td>
                    </tr>
                </table>
            </div>
            <div className="botton">
                <div className="leftTop">
                    <div className="header"> 
                        <div><strong>Coordenadas Bancárias</strong></div>
                    </div>
                    <div className="table">
                        <strong>CONTA: 18898824610001</strong>
                        <strong>IBAN: AO06 0051.0000.8898.8246.1010.9</strong>
                        <strong>CONTA: 18898824610003</strong>
                        <strong>IBAN: AO06 0051.0000.8898.8246.1030.3</strong>
                    </div>
                </div>
                <div className="rightTop">
                    <div className="rightHeader">
                        <span>Decreto Presidencial 123/12, de 2 de Dezembro</span>
                    </div>
                    <div className="datas">
                        <span className="AdjetivoDoOperador">Operador</span>
                        <span className="nameDoOperador">Joao Meti</span>
                    </div>
                </div>

            </div>
        </div>
    </Box>
  );
};

export default Fatura;
