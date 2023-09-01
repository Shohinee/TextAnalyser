/** @format */

// import { useState } from "react";
import { useState } from "react";

export default function TextForm(props: any) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleDownClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};
	const handleOnChange = (event: any) => {
		setText(event.target.value);
	};
	function resizeText() {
		console.log("resize");
		// let heit = enent.target?.value;
		// let wed = enent.width.value;
		// setSize(heit);
		// setWid(wed);
	}
	const handleClearClick = () => setText("");
	const [text, setText] = useState("");
	// const [size, setSize] = useState("330");
	// const [wid, setWid] = useState("450");
	return (
		<>
			<div className="container">
				<div className="mb-3">
					<h1>{props.heading}</h1>
					<label htmlFor="myBox" className="form-label">
						Enter the text
					</label>
					<p>{/* {size}x{wid} */}</p>
					<textarea
						className="form-control"
						value={text}
						onChange={handleOnChange}
						onResize={resizeText}
						id="myBox"
						placeholder="Enter something here"></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
					Convert to Upper Case
				</button>
				<button className="btn btn-primary mx-2" onClick={handleDownClick}>
					Convert to Lower Case
				</button>
				<button className="btn btn-primary mx-2" onClick={handleClearClick}>
					Clear All
				</button>
			</div>
			<div className="container my-3">
				<h2>Your Text Summary is </h2>
				<p>
					{text.length} number of character {text.split(" ").length} number of
					words
				</p>
				<h3>Preview</h3>
				<p>{text}</p>
			</div>
		</>
	);
}
