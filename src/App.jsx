import Category from "./components/Category";
import Header from "./components/Header";
import OnlineDelevery from "./components/OnlineDelevery";
import TopRest from "./components/TopRest";
import Restaurants from "./components/Restaurants";
import Action from "./components/Action";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto pt-5 px-6">
				<Category />
				<TopRest />
				<OnlineDelevery />
				<Restaurants />
			</div>
			<Action />
			<Footer />
		</>
	);
}

export default App;
