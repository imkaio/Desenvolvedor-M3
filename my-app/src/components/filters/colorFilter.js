import React from "react"
import './style.scss'

function ColorFilters({ onChange }) {
    const filters = ["Amarelo", "Azul", "Branco", "Cinza", "Laranja"]
    const handleChange = (e) => {
        return onChange(e.target.value)
    }

    return (
        <div className="filtro__box">
            <div className="filtro__box-titulo">
                Cores
            </div>

            <div className="filtro__box-opcoes">
                <ul>
                    {filters.map((filter, index) => (
                        <li key={filter}>
                            <input
                                value={filter}
                                type="checkbox"
                                onChange={handleChange}
                                id={`checkbox_${index}`}
                                className="filtro__input-custom"
                            />
                            <label htmlFor={`checkbox_${index}`}>{filter}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ColorFilters
