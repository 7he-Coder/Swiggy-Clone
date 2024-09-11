import React, { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";

import Card from "./Card";

const OnlineDelevery = () => {
	const [data, setData] = useState([""]);

	const fetchTopRestaurant = async () => {
		const response = await fetch(
			`http://localhost:5000/top-restaurant-chains#`
		);
		const apiData = await response.json();
		setData(apiData);
	};

	useEffect(() => {
		fetchTopRestaurant();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between my-5 ">
				<div className="">
					<h1 className="text-2xl font-bold">
						Restaurants with online food delivery in Kanpur
					</h1>
				</div>
			</div>

			<div
				id="onlineDelevery"
				className="lg:-ml-6 lg:px-6 px-0 md:-ml-0 h-[72px] flex items-center justify-between mb-10 sticky top-0 z-[2] bg-white"
			>
				<div className="absolute lg:right-10 md:right-10 right-4 lg:hidden md:block sm:block">
					<span className="font-bold text-4xl">
						<FaHamburger />
					</span>
				</div>
				<div className="my-6 mt-8 lg:flex hidden ">
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Default
					</button>

					<form className="max-w-sm inline-flex mx-3">
						<select
							id="countries"
							className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
						>
							<option selected>Sort By</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</form>

					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Alternative
					</button>
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Dark
					</button>
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Light
					</button>
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Green
					</button>
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Red
					</button>
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Yellow
					</button>
					<button
						type="button"
						className="text-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border border-neutral-400"
					>
						Purple
					</button>
				</div>
				<div className="">
					<form className="max-w-4xl mx-auto">
						<label
							for="default-search"
							className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Search
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									claclassNamess="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className="block w-full py-3 px-10 ps-10 text-sm text-gray-900 border border-neutral-400 rounded-full  dark:placeholder-gray-400 dark:text-white "
								placeholder="Search for restaurant and foods..."
								required
							/>
							<button
								type="submit"
								className="text-neutral-600 absolute end-1 bottom-1 bg-white border border-neutral-300 hover:bg-neutral-100 font-medium rounded-full text-sm px-6 py-2"
							>
								Search
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
				{data.map((d, i) => {
					return <Card {...d} key={i} />;
				})}
			</div>

			<hr className="border-neutral-200 my-6" />
		</>
	);
};

export default OnlineDelevery;
