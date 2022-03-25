import React, { useState } from "react";

function Todolist() {
	const [lista, setLista] = useState([]);
	const [texto, setTexto] = useState([]);

	return (
		<div className="container">
			<h1 className="text-secondary text-center">TODO LIST</h1>
			<div>
				{lista.map(function (e, index) {
					console.log(e);
					return (
						<div>
							{e}
							<button
								onClick={(e) => {
									let nuevaLista = [...lista];
									nuevaLista.splice(index, 1);
									setLista(nuevaLista);
								}}>
								x
							</button>
						</div>
					);
				})}
			</div>

			<input
				onChange={(e) => {
					setTexto(e.target.value);
				}}
				type="text"
			/>
			<button
				onClick={(e) => {
					setLista([...lista, texto]);
				}}>
				agregar
			</button>
		</div>
	);
}
export default Todolist;
