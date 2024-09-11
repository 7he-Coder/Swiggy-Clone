import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Card from "./Card";

const TopRest = () => {
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
					<h1 className="text-2xl font-bold">What's on your mind?</h1>
				</div>
				<div className="flex">
					<div
						className="w-[40px] h-[40px] bg-[#e2e2e7] rounded-full flex items-center justify-center mr-3 cursor-pointer active:bg-orange-500 active:text-neutral-50"
						// onClick={prevSlide}
					>
						<IoMdArrowRoundBack />
					</div>
					<div
						className="w-[40px] h-[40px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer active:bg-orange-500 active:text-neutral-50"
						// onClick={nextSlide}
					>
						<IoMdArrowRoundForward />
					</div>
				</div>
			</div>

			<div className="flex gap-5 overflow-hidden">
				{data.map((d, i) => {
					return <Card width="w-full md:w-72" {...d} key={i} />;
				})}
			</div>

			<hr className="border-neutral-200 my-6" />
		</>
	);
};

export default TopRest;
