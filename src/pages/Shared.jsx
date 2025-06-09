import React from "react";
import shareIcon from "../assets/shareIcon.svg";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import styles from "../styles/style";

const Sharedprofiles = () => {
	const { data } = useContext(ProfileContext);

	return (
		<section className="font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center min-h-[80vh]">
			{/**header */}
			<div className=" sm:mt-10 mt-1 xs:p-3 w-full font-montserrat">
				<div className="flex items-center ">
					<img
						src={shareIcon}
						alt="icon"
					/>
					<p className="mx-1">Your shared profiles</p>
				</div>
				<hr />
				<div className={`${styles.flexBtw} my-2 opacity-70`}>
					<p className="">Here, you'll find all the profiles you've shared</p>
					<button
						title="clear all items"
						className="bg-slate-200 rounded-2xl text-[14px] py-1 px-2"
					>
						Clear
					</button>
				</div>
			</div>

			{/**shared profiles list section */}
			<div className={`flex justify-center items-center flex-wrap `}>
				{data.map((item) => (
					<div
						title="click to view"
						className="xs:w-[200px] w-full m-4 cursor-pointer"
						key={item.id}
					>
						<div
							className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
							style={{ backgroundImage: `url(${item.photo})` }}
						>
							<div className="profilesOverlay p-1 flex flex-col justify-between flex-wrap rounded-sm">
								<div className="text-[15px]">
									<div
										className={`flex justify-start items-center uppercase tracking-[1px]`}
									>
										<h1 className="my-1">{item.name}</h1>
									</div>
									<h3 className="capitalize">{item.work}</h3>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Sharedprofiles;
