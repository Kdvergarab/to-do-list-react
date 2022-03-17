import Header from "./header.jsx";

import React, { useState } from "react";

function Todolist() {
	const [lista, setLista] = useState([]);
	return (
		<div className="App">
			<Header />
			<div>
				{lista}
				<br />
			</div>
			<input
				placeholder="ingrese el nuevo titulo"
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						console.log(lista);
						let listanueva = lista.push(e.target.value);

						setLista(listanueva);
					}
				}}
			/>
		</div>
	);
}

export default Todolist;
