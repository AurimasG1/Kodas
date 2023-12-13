import Rabit from './Rabit'

export default function Racoon({randomColor, svoris, name, color, children}) {

    const doThing = _ => {
        return 'Nice animal doThing funkcija'
    }

    const yes = <><h3>Yes, True H3 const yes</h3>{doThing()}</>

    return (
        <>       
        <h2 style={{color}}>Racoon H2
            {name}
            {' '}
            <div style={{color: randomColor()}}>{svoris * 2} kg</div>
        </h2>
        {children}
        <i>
            {
                doThing()
            }
            {
                0 
                ? 
                yes
                : 
                <Rabit randomColor={randomColor}/>
            }
            {children}
            {
                2 && <h3>False su &&</h3>
            }

        </i>
        </>
    );
}