import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Namas from "./Namas";
import Narvas from "./Narvas";
import {seaPlaners} from '../../Duomenys'

export default function Pasaulis({ kazkas }) {
    return (
      <div className="squares">
        <h4>{kazkas}</h4>
        {seaPlaners
          .filter((kaka) => (kazkas === 'porinis' ? kaka.id % 2 === 0 : kaka.id % 2 !== 0))
          .map((lele) => (lele.type === 'man' ? 
            <Namas key={lele.id} item={lele} /> : null
            )
            )
        }
        {seaPlaners
          .filter((kaka) => (kazkas === 'porinis' ? kaka.id % 2 === 0 : kaka.id % 2 !== 0))
          .map((lele) => (lele.type === 'animal' ? 
            <Narvas key={lele.id} item={lele} /> : null
            )
            )
        }
        {seaPlaners
          .filter((kaka) => (kazkas === 'porinis' ? kaka.id % 2 === 0 : kaka.id % 2 !== 0))
          .map((lele) => (lele.type === 'car' ? 
            <Garazas key={lele.id} item={lele} /> : null
            )
            )
        }
        {seaPlaners
          .filter((kaka) => (kazkas === 'porinis' ? kaka.id % 2 === 0 : kaka.id % 2 !== 0))
          .map((lele) => (lele.type === 'fish' ? 
            <Akvariumas key={lele.id} item={lele} /> : null
            )
            )
        }
      </div>
    );
}