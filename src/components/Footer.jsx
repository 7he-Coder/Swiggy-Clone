const Footer = () => {
	return (
		<>
			<div className="bg-[#02060c] h-full">
				<div className="max-w-6xl m-auto py-12 lg:grid-cols-4 px-6 md:grid-cols-2 grid items-start justify-between">
					<div className="w-[100px]">
						<div className="inline-flex items-center cursor-pointer">
							<img
								className="w-[40px]"
								src="swiggy.svg"
								alt="swiggy logo"
								href="#"
							/>
							<span className="text-neutral-200 text-pretty text-3xl w-full font-bold">
								Swiggy
							</span>
						</div>
						<div className="w-[335px] mt-3">
							<p className="text-neutral-300 text-balance ml-3 ">
								&copy; 2024 Swiggy Clone Made by{" "}
								<a
									className="text-sky-400"
									href="https://github.com/7he-Coder/Swiggy-Clone"
								>
									Abhay Gautam
								</a>
								.
							</p>
						</div>
					</div>

					<div className="menus text-white text-md my-8 md:my-0 lg:my-0 mx-4">
						<h3 className="font-bold text-lg">Company</h3>
						<ul className="text-neutral-300 cursor-pointer">
							<li className="py-1">About</li>
							<li className="py-1">Careers</li>
							<li className="py-1">Team</li>
							<li className="py-1">Swiggy One</li>
							<li className="py-1">Swiggy Instamart</li>
							<li className="py-1">Swiggy Genie</li>
						</ul>
					</div>

					<div className="md:-mt-10 lg:mt-0 ">
						<div className="menus text-white text-md mb-10 my-0 mx-4">
							<h3 className="font-bold text-lg">Contact us</h3>
							<ul className="text-neutral-300 cursor-pointer">
								<li className="py-1">Help & Support</li>
								<li className="py-1">Partner with us</li>
								<li className="py-1">Ride with us</li>
							</ul>
						</div>
						<div className="menus text-white text-md my-0 mx-4">
							<h3 className="font-bold text-lg">Legal</h3>
							<ul className="text-neutral-300 cursor-pointer">
								<li className="py-1">Terms & Conditions</li>
								<li className="py-1">Cookie Policy</li>
								<li className="py-1">Privacy Policy</li>
								<li className="py-1">Investor Relations</li>
							</ul>
						</div>
					</div>

					<div className="menus text-white text-md my-4 mx-4 lg:mt-0">
						<h3 className="font-bold text-lg">We deliver to:</h3>
						<ul className="text-neutral-300 cursor-pointer">
							<li className="py-1">Bangalore</li>
							<li className="py-1">Gurgaon</li>
							<li className="py-1">Hyderabad</li>
							<li className="py-1">Delhi</li>
							<li className="py-1">Mumbai</li>
							<li className="py-1">Pune</li>
							<select className="py-4 px-3 outline-none border-none bg-transparent">
								<option>589 cities</option>
							</select>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
