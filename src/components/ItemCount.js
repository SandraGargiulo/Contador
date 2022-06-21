import React from "react";
import { useState } from "react";

function ItemCount() {
    const [contadorValue, actualizarContador] = useState(0);

    return (
        <div className="container">
            <h3>Camisa tiger: {contadorValue}</h3>
            <button
                className="btn btn-primary m-2"
                onClick={() => {
                    actualizarContador(contadorValue + 1);
                }}
            >
                Incrementar +
            </button>
            <button
                className="btn btn-danger"
                onClick={() => {
                    actualizarContador(contadorValue - 1);
                }}
            >
                Decrementar -{" "}
            </button>
        </div>
    );
}

export default ItemCount;
