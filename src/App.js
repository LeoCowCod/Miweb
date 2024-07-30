import React from "react"

const Texto = (props) => {
    return <p>Hola mi nombre es: {props.name} {props.apellido} y mi edad es: {props.edad}</p>
}

const App = () => {
    return <div>
        <Texto
            name="Leonardo"
            apellido = "Baca"
            edad = {24}
        />

        <Texto
            name="Gladys"
            apellido = "Carretero"
            edad = {60}
        />
        <Texto
            name="Martin"
            apellido = "Baca"
            edad = {55}
        />
    </div>
}

export default App