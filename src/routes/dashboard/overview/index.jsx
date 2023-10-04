import React from "react";
import {
	BsArrowRight,
	BsClockHistory,
	BsHeart,
	BsShareFill,
} from "react-icons/bs";

import { tempItems } from "../../../constants";
import styles from "../../../style";
import { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileContext";

const Overview = () => {
	const { data } = useContext(ProfileContext);

	return (
		<section className="font-poppins pl-2 pr-2 min-h-[80vh]">
			{/**header */}
			<div className="sm:mt-3 mt-8 mb-10 text-[17px] font-normal text-center font-montserrat">
				<p>
					Hello {"Taylor"}, welcome to your dashboard. Create something awesome
					😎
				</p>
			</div>

			{/**recent profiles section */}
			<div className="text-[18px] px-4 sm:px-1 z-[-1] ">
				<div className={`${styles.flexBtw} mb-6`}>
					<div className="text-[16px] flex items-center font-montserrat">
						<span className="mx-1">
							<BsClockHistory />
						</span>
						<h4 className="mx-1"> Recent profiles</h4>
					</div>
					<span className="cursor-pointer">
						<BsArrowRight />
					</span>
				</div>

				<div
					className={`${styles.flexBtw} overflow-x-scroll overflow-y-hidden relative font-[400] overviewScroll`}
				>
					{data.length ? (
						data.map((item, index) => (
							<div
								key={index}
								className="m-1 h-[120px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary rounded-[15px] cursor-pointer"
								style={{ backgroundImage: `url(${item.photo})` }}
							>
								<div className="profilesOverlay w-[200px] rounded-[15px] p-1">
									<h1 className="h-fit p-1 uppercase font-firaSans text-[16px] ">
										{item.name}
									</h1>
									<h4 className="h-fit px-1 text-[16px]">{item.work}</h4>
									<div
										className={`${styles.flexBtw} absolute bottom-0 w-[200px] p-2`}
									>
										<span className="cursor-pointer">
											<BsShareFill />
										</span>
										<span className="cursor-pointer">
											<BsHeart />
										</span>
									</div>
								</div>
							</div>
						))
					) : (
						<div>No recent profiles</div>
					)}
				</div>
			</div>

			{/**recent templates section */}
			<div className="font-poppins text-[16px] mt-10 px-4 sm:px-1 z-[-1]">
				<div className={`${styles.flexBtw} mb-6`}>
					<div className=" flex items-center font-montserrat">
						<span className="mx-1">
							<BsClockHistory />
						</span>
						<h4 className="mx-1"> Recent templates</h4>
					</div>
					<span className="cursor-pointer">
						<BsArrowRight />
					</span>
				</div>

				<div
					className={`${styles.flexBtw} overflow-x-scroll overflow-y-hidden relative font-[400] overviewScroll`}
				>
					{tempItems.length ? (
						tempItems.map((item) => (
							<div
								key={item.id}
								className={`m-1 h-[120px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary rounded-[15px] cursor-pointer p-4`}
								style={{
									background: `linear-gradient(180deg, ${item.color} 0%, rgba(0, 0, 0, 0.85) 100%) `,
								}}
							>
								<div className=" h-[20px] w-fit font-firaSans text-text_color text-[11px]">
									<h4 className="absolute top-3 rounded-sm bg-lightGray py-[2px] px-2">
										Template
									</h4>
								</div>
								<div className={`w-[190px] rounded-[15px]`}>
									<h1 className="h-fit mt-2 ">
										{item.type} {" Template"}
									</h1>
								</div>
							</div>
						))
					) : (
						<div>No recent templates</div>
					)}
				</div>
			</div>
		</section>
	);
};
export default Overview;
