import React from "react"

export default function Main() {
    const [Ing, setIng] = React.useState([])

    const ingriedientlist = Ing.map(ingrient => (
        <li key={ingrient}>{ingrient}</li>
    ))

    function onsubmit(event){
        event.preventDefault()
        const formdata = new FormData(event.currentTarget)
        const newingredeint = formdata.get("ingredient")
        setIng(preIngList => [...preIngList, newingredeint])
    }
    return (
        <main>
            <form className="addIngForm" onSubmit={onsubmit}>
                <input 
                aria-label="Add ingredient"
                type="text"
                placeholder="e.g Oregano"
                name="ingredient" />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingriedientlist}
            </ul>
        </main>
    )
}