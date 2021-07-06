import "./App.css";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons.js";

function App() {
	return (
		<div className="app">
			<Header />
			{/* TinderCards */}
			<TinderCards />
			{/* SwipeButtons */}
			<SwipeButtons />
		</div>
	);
}

export default App;
