import {Link} from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos'
import {GrFormEdit} from 'react-icons/gr'
import { GrTrash } from "react-icons/gr";

export default function Produtos(){
    return(
        <section className="produtos">
            <h1>LISTA DE PRODUTOS</h1>

            <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link>
                    <GrFormEdit />
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link>
                    <GrTrash />
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </section>
    )
}