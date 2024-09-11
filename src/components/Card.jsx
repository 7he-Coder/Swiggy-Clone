import React from "react";
import styles from "./TopRest.module.css";
import { MdStars } from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";
import { HiMinusSm } from "react-icons/hi";

const Card = (props) => {
	return (
		<div
			className={` ${props.width} shrink-0 cursor-pointer hover:scale-95 duration-75 ease-in`}
		>
			<div className="h-[182px] rounded-2xl overflow-hidden relative drop-shadow-xl">
				<img
					className="object-cover w-full h-full "
					src={`http://localhost:5000/images/`.concat(props.image)}
					alt="images"
				/>
				<div
					className="absolute w-full h-full top-0 uppercase"
					id={styles.CardGradient}
				>
					<h2 className="uppercase text-2xl font-extrabold absolute bottom-3 left-3 text-neutral-200 text-pretty">
						{props.offer}
					</h2>
				</div>
			</div>

			<div className="px-3 py-2">
				<div className="font-bold tracking-wide text-lg">{props.title}</div>

				<div className="max-w-40 flex items-center justify-between text-lg font-semibold">
					<MdStars className="text-green-600 text-2xl" />
					{props.rating}
					<span>
						<PiDotOutlineFill />
					</span>
					{props.minTime}
					<span>
						<HiMinusSm />
					</span>
					{props.maxTime}
					<p>mins</p>
				</div>

				<div className="text-neutral-700 text-md">
					<div>{props.name}</div>
					<div>{props.place}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
