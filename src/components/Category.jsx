import { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Category = () => {
	const [slide, setSlide] = useState(0);
	const [categories, setCategory] = useState([""]);

	const fetchCategory = async () => {
		const response = await fetch(`http://localhost:5000/categories`);
		const data = await response.json();
		setCategory(data);
	};

	useEffect(() => {
		fetchCategory();
	}, []);

	const prevSlide = () => {
		if (slide === 0) return false;
		setSlide(slide - 3);
	};

	const nextSlide = () => {
		if (categories.length - 8 === slide) return false;
		setSlide(slide + 3);
	};

	return (
		<>
			<div>
				<div className="flex items-center justify-between my-5 ">
					<div className="">
						<h1 className="text-2xl font-bold">What's on your mind?</h1>
					</div>
					<div className="flex">
						<div
							className="w-[40px] h-[40px] bg-[#e2e2e7] rounded-full flex items-center justify-center mr-3 cursor-pointer active:bg-orange-500 active:text-neutral-50"
							onClick={prevSlide}
						>
							<IoMdArrowRoundBack />
						</div>
						<div
							className="w-[40px] h-[40px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer active:bg-orange-500 active:text-neutral-50"
							onClick={nextSlide}
						>
							<IoMdArrowRoundForward />
						</div>
					</div>
				</div>

				<div className="flex overflow-hidden ">
					{categories.map((cat, index) => {
						return (
							<div
								key={index}
								style={{ transform: `translateX(-${slide * 100}%)` }}
								className="w-[150px] shrink-0 duration-500 cursor-pointer mr-5"
							>
								<img
									src={`http://localhost:5000/images/`.concat(cat.image)}
									alt="images"
								/>
							</div>
						);
					})}
				</div>

				<hr className="border-neutral-200 my-6" />
			</div>
		</>
	);
};

export default Category;
