import Daiktas from './Daiktas'
export default function Tvenkinys({ seaPlaners, kazkas }) {
    return (
      <div className="squares">
        <h4>{kazkas === 'poriniai' ? 'Poriniai ID' : 'nePoriniai ID'}</h4>
        {seaPlaners
          .filter((kaka) => (kazkas === 'poriniai' ? kaka.id % 2 === 0 : kaka.id % 2 !== 0))
          .map((lele) => (
            <Daiktas key={lele.id} item={lele} />
            )
            )
        }
      </div>
    );
  }