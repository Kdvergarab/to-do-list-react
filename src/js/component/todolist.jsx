import React, { useState } from "react";

function Todolist() {
	const [lista, setLista] = useState([]);
	const [texto, setTexto] = useState("");

	return (
		<div className="container">
			<h1 className="text-secondary text-center" m-3>
				TODO LIST
			</h1>
			{lista.map(function (e, index) {
				return (
					<div>
						<div className="d-flex">
							{e}
							<button
								onClick={(e) => {
									let nuevaLista = [...lista];
									nuevaLista.splice(index, 1);
									setLista(nuevaLista);
								}}>
								X
							</button>
						</div>
					</div>
				);
			})}
			<div>
				<input
					type="inserte contenido"
					onChange={(e) => {
						setTexto(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						setLista([...lista, texto]);
					}}>
					agregar
				</button>
			</div>
		</div>
	);
}
export default Todolist;
