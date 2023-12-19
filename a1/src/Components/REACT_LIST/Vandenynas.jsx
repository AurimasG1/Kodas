import Spalva from "./Spalva";
import Tipas from "./Tipas";
import Vardas from "./Vardas";

export default function Vandenynas({ seaPlaners, kazkas}) {
    return (
      <div className="squares">
        <h4>{kazkas}</h4>
        {seaPlaners
          .sort((a, b) => (a.type[0].localeCompare(b.type[0])))
          .map((lele) => (
            kazkas === 'Pagal tipą' ? <Tipas key={lele.id} item={lele}/> : null
          ))
        }
        {seaPlaners
          .sort((a, b) => (a.name[0].localeCompare(b.name[0])))
          .map((lele) => (
            kazkas === 'Pagal vardą' ?<Vardas key={lele.id} item={lele}/> : null
          ))
        }{seaPlaners
            .sort((a, b) => (a.color[0].localeCompare(b.color[0])))
            .map((lele) => (
            kazkas === 'Pagal spalvą' ? <Spalva key={lele.id} item={lele}/> : null
            ))
          }
      </div>
    );
}