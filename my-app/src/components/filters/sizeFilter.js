import React from "react";
import './style.scss'

const SizeFilters = (props) => {
    const filters = ["P", "M", "G", "GG", "U", "36", "38", "40", "42", "44", "46"]
    const handleChange = (e) => {
        return props.onChange(e.target.value);
    }

    return (
        <div className="filtro__box tamanhos" >
            <div className="filtro__box-titulo">
                TAMANHOS
            </div>

            <div className="filtro__box-opcoes">
                <ul>
                    {filters.map((filter, index) => (

                        <li key={filter}>
                            <div href="/" onClick={handleChange} >{filter}</div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )};

export default SizeFilters;

