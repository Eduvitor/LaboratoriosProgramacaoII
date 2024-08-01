import style from './Tabela.module.css'
function Tabela ( {horarios} ) {
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
                <td>{horarios[0] ? horarios[0].materia : ''}</td>
                <td>{horarios[1] ? horarios[1].materia : ''}</td>
                <td>{horarios[2] ? horarios[2].materia : ''}</td>
                <td>{horarios[3] ? horarios[3].materia : ''}</td>
                <td>{horarios[4] ? horarios[4].materia : ''}</td>
              </tr>
              <tr id="trDas9">
                <th scope="row">21:00</th>
                <td>{horarios[0] ? horarios[0].materia : ''}</td>
                <td>{horarios[1] ? horarios[1].materia : ''}</td>
                <td>{horarios[2] ? horarios[2].materia : ''}</td>
                <td>{horarios[3] ? horarios[3].materia : ''}</td>
                <td>{horarios[4] ? horarios[4].materia : ''}</td>
              </tr>
            </tbody>
          </table>
    </div>
    );
}

export default Tabela;