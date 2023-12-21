import Jura from './Jura'
import {tipai} from '../../Duomenys'

export default function Juros() {
    
    return (
        <>
            {
            [...tipai].map((item, index) => (
                <Jura key={index} kazkas={item}/>
            ))
            }
        </>
    )
}