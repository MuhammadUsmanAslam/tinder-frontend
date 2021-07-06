import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

function TinderCards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			// Below this 2 lines are using AXIOS
			// const request = await axios.get("http://localhost:8001/tinder/cards");
			const request = await axios.get(
				"https://tinder-clone-b920f.herokuapp.com/tinder/cards"
			);
			setPeople(request.data);
			// console.log(request.data);
			// Below this 6 lines are for fetch APi
			// await fetch("http://localhost:8001/tinder/cards")
			// 	.then((response) => response.json())
			// 	.then((data) => setPeople(data))
			// .catch((error) => {
			// //Code for handling the error
			//   });
		};
		fetchData();
	}, [people]);

	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
	};

	return (
		<div className="tinderCards">
			{people.map((person) => {
				return (
					<TinderCard
						className="tinderCards__container"
						onSwipe={onSwipe}
						onCardLeftScreen={() => onCardLeftScreen("fooBar")}
						preventSwipe={["up", "down"]}
					>
						<div
							className="tinderCards__card"
							style={{
								backgroundImage: `url(${person.imgUrl})`,
							}}
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				);
			})}
		</div>
	);
}

export default TinderCards;
