import Spalva from "./Spalva";
import Tipas from "./Tipas";
import Vardas from "./Vardas";
import {seaPlaners} from '../../Duomenys'

export default function Vandenynas({ kazkas }) {

  const surusiuotasSeaPlaners = kazkas === 'type' 
  ? seaPlaners.sort((a, b) => a.type.localeCompare(b.type))
  : kazkas === 'name' 
  ? seaPlaners.sort((a, b) => a.name.localeCompare(b.name)) 
  : seaPlaners.sort((a, b) => a.color.localeCompare(b.color));

  const ComponentoPasirinkimas = kazkas === 'type' 
  ? Tipas 
  : kazkas === 'name' 
  ? Vardas 
  : Spalva;

    return (
      <div className="squares">
        <h4>{kazkas}</h4>
        {
        surusiuotasSeaPlaners.map((lele) => (
          <ComponentoPasirinkimas key={lele.id} item={lele}/>
        ))
        };
      </div>
    );
}