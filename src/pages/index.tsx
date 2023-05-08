import styles from "../styles/Formulario.module.css"
import Cartao from '../../components/Cartao'
import Link from "next/link"
import EntradaNumerica from "../../components/EntradaNumerica"
import { useState } from "react"

export default function Formulario() {
  const [qtdePortas, setqtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
        <h1>Nonty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de Portas?"
           value={qtdePortas} 
           onChange={novaqtde => setqtdePortas(novaqtde)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Qual a porta com o Presente?"
           value={comPresente} 
           onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}