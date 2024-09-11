import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./Header.module.css";
import { FaXmark } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const showSideMenu = () => {
		setToggle(true);
	};

	const hideSideMenu = () => {
		setToggle(false);
	};

	const links = [
		{
			icon: <BiBriefcase className="inline-flex mr-2 text-xl " />,
			name: "Swiggy Corporate",
		},
		{
			icon: <IoSearchSharp className="inline-flex mr-2 text-xl " />,
			name: "Search",
		},
		{
			icon: <TbRosetteDiscount className="inline-flex mr-2 text-xl " />,
			name: `Offers`,
			sup: ` NEW`,
		},
		{
			icon: <MdHelpOutline className="inline-flex mr-2 text-xl " />,
			name: "Help",
		},
		{
			icon: <FaRegUser className="inline-flex mr-2 text-xl " />,
			name: "Sign in",
		},
		{
			icon: <BsCart3 className="inline-flex mr-2 text-xl " />,
			name: "Cart",
			sup: `[2]`,
		},
	];

	return (
		<>
			<div
				className={`${style.blackOverlay} duration-500 `}
				onClick={hideSideMenu}
				style={{
					opacity: toggle ? 1 : 0,
					visibility: toggle ? "visible" : "hidden",
				}}
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
					className="lg:w-[500px] md:w-[500px] sm:w-[150px] bg-white h-full absolute top-0 left-0 z-[99999] duration-[400ms] p-10"
					style={{ left: toggle ? `0%` : `-100%` }}
				>
					<div className="text-3xl">
						<FaXmark
							onClick={hideSideMenu}
							className="cursor-pointer  hover:text-orange-500 duration-200 ease-in"
						/>
					</div>
					<div>
						<input
							type="search"
							className="border border-neutral-300 px-3 py-4 outline-none shadow-lg w-full rounded-md my-6"
							placeholder="Search for area, street name..."
						/>
					</div>
					<div>
						<div
							type="url"
							className="border border-neutral-300 px-3 py-4 shadow-lg w-full rounded-md flex z-10"
						>
							<MdMyLocation className="mt-[2px] text-2xl" />{" "}
							<div className="ml-4 text-xl">
								<span className="hover:text-orange-600 duration-75 cursor-pointer">
									<a
										href="https://maps.app.goo.gl/VRfDERxwvDc6EpnB7"
										target="-blank"
									>
										Get current location
									</a>
								</span>
								<p className="text-neutral-400 text-sm">Using GPS</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<header className="px-6 py-3 shadow-lg bg-white shadow-slate-100 sticky top-0 z-[1]">
				<div className="max-w-7xl w-full mx-auto flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-[50px] hover:scale-110 duration-75 ease-in cursor-pointer">
							<img
								className="w-full"
								src="images/logo.png"
								alt="swiggy logo"
								href="#"
							/>
						</div>

						<div>
							<a
								onClick={showSideMenu}
								href="#"
								className="sideMenu inline-flex justify-center items-center ml-2 md:ml-6 lg:ml-8 cursor-pointer"
							>
								<span className="mr-2 hover:text-orange-500 hover:border-orange-500 duration-200 border-b-2 border-black font-semibold">
									Other
								</span>{" "}
								<IoIosArrowDown
									fontSize={`18px`}
									className="font-semibold text-orange-500 "
								/>
							</a>
						</div>
					</div>

					<div className="absolute right-6 lg:hidden md:block sm:block">
						<span className="font-bold text-4xl">
							<FaUserCircle />
						</span>
					</div>

					<nav className=" ">
						<ul className="hidden lg:flex gap-12 ml-auto">
							{links.map((link, index) => {
								return (
									<li
										key={index}
										className="hover:text-orange-500 duration-200 ease-in"
									>
										<a href="#" className="font-semibold">
											{link.icon}
											{link.name}
											<sup className="text-[10px] text-orange-500 font-bold ml-1 tracking-wider">
												{link.sup}
											</sup>
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
