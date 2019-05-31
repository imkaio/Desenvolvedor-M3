import React, { useState } from "react"
import './style.scss'

function SizeFilters({ onChange }) {
    const [active, setActive] = useState()
    const filters = ["P", "M", "G", "GG", "U", "36", "38", "40", "42", "44", "46"]
    const handleChange = (index, filter) => () => {
        setActive(index)
        return onChange(filter)
    }

    return (
        <div className="filtro__box tamanhos" >
            <div className="filtro__box-titulo">
                TAMANHOS
            </div>

            <div className="filtro__box-opcoes">
                <ul>
                    {filters.map((filter, index) => (
                        <li
                            key={filter}
                            className={active === index ? 'filtro__box-opcao--ativa' : ''}
                        >
                            <div onClick={handleChange(index, filter)}>{filter}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SizeFilters

