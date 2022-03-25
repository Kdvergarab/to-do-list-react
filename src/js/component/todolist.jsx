import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

function Todolist() {
	const [lista, setLista] = useState([]);
	const [texto, setTexto] = useState([]);

	return (
		<div className="container">
			<h1 className="text-secondary text-center m-5">TODO LIST</h1>
			<div className="todolista">
				{lista.map(function (e, index) {
					return (
						<div className="cajalista">
							<ListGroup className="cajalista">
								<ListGroup.Item className="lista">
									{e}
								</ListGroup.Item>
							</ListGroup>

							<button
								className="boton"
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
			<div className="inpuut">
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
		</div>
	);
}
export default Todolist;
