import Laivas from './Laivas'
import Valtis from './Valtis'
import Sala from './Sala'


export default function Jura({ seaPlaners, kazkas }) {
    return (
      <div className="squares">
        <h4>{kazkas}</h4>
        {seaPlaners
          .filter((kaka) => (kazkas === kaka.type ? kaka.type : null))
          .map((lele) => (
            kazkas === 'man' ? <Valtis key={lele.id} item={lele}/> : null
          ))
        }
        {seaPlaners
          .filter((kaka) => (kazkas === kaka.type ? kaka.type : null))
          .map((lele) => (
            kazkas === 'car' ? <Laivas key={lele.id} item={lele}/> : null
          ))
        }
        {seaPlaners
          .filter((kaka) => (kazkas === kaka.type ? kaka.type : null))
          .map((lele) => (
            kazkas === 'animal' ? <Sala key={lele.id} item={lele}/> : null
          ))
        }
        {seaPlaners
          .filter((kaka) => (kazkas === kaka.type ? kaka.type : null))
          .map((lele) => (
            kazkas === 'fish' ? <div className="square" key={lele.id}>
            <p>ID: {lele.id}</p>
            <p>Type: {lele.type}</p>
            <p>Name: {lele.name}</p>
            <p>Color: {lele.color}</p>
          </div> : null
          ))
        }
      </div>
    );
}