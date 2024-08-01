import style from './Tabela.module.css'
function Tabela () {
    return (
        <div className={style.DivTabela}>
         <table className={style.Tabela} id="thrs">
            <thead>
              <tr>
                <th scope="col">Horários</th>
                <th scope="col">Segunda</th>
                <th scope="col">Terça</th>
                <th scope="col">Quarta</th>
                <th scope="col">Quinta</th>
                <th scope="col">Sexta</th>
              </tr>
            </thead>
            <tbody>
              <tr id="trDas730">
                <th scope="row">07:30</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="trDas10">
                <th scope="row">10:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="trDas1">
                <th scope="row">13:30</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="trDas4">
                <th scope="row">16:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="trDas7">
                <th scope="row">19:10</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="trDas9">
                <th scope="row">21:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
    </div>
    );
}

export default Tabela;