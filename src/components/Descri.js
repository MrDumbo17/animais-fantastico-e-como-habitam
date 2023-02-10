

function Descri({Nome,Desc, ShowDesc}) {

    return (
        <>
            {
            ShowDesc && (
                <>
                
                <h1>{Nome}</h1>
                <p>{Desc}</p>
                </>
            )}
        </>
    )
}


export default Descri