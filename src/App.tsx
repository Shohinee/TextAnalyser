/** @format */

// import { useState } from "react";
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import About from "./componants/About";
// const name = "shohinee";
function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="dark">
				<Navbar title="TextUtils" aboutText="About2" />
				<div className="contai">
					<About />
					<TextForm heading="Enter The Text To Analize" />
				</div>
			</div>
		</>
	);
}

export default App;
