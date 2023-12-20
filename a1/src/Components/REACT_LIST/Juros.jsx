import Jura from './Jura'
import {tipai} from '../../Duomenys'

export default function Juros() {
    const pagalTipa = [...tipai]
    const juraComponents = pagalTipa.map((item, index) => (
        <Jura key={index} kazkas={item}/>
    ))
    return (
        <>
            {juraComponents}
        </>
    )
}