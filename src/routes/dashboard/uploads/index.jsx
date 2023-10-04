import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";

import uploadIcon from "../../../assets/cloud-upload.svg";
import DashboardHeaders from "../../../components/dashboard/DashboardHeaders";
import { ProfileContext } from "../../../context/ProfileContext";
import styles from "../../../style";

const UploadedProfiles = () => {
	const { data } = useContext(ProfileContext);

	return (
		<section className="font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center min-h-[80vh]">
			<DashboardHeaders
				title={"Your uploaded profiles"}
				subtitle={"Here, you'll find all the profiles you've created"}
				icon={uploadIcon}
			/>

			{/**uploaded profiles section */}
			<div className={`flex justify-center items-center flex-wrap `}>
				{data.slice(0, 5).map((item) => (
					<div
						className="xs:w-[200px] w-full m-4"
						key={item.id}
					>
						<div
							className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
							style={{ backgroundImage: `url(${item.photo})` }}
						>
							<div className="profilesOverlay p-1 flex flex-col justify-between flex-wrap rounded-sm">
								<div className="text-[15px]">
									<div
										className={`flex justify-start items-center uppercase tracking-[1px] font-bold`}
									>
										<h1 className="border-l border-gray-500 pl-1 my-1">
											{item.name}
										</h1>
									</div>
									<h3 className="capitalize font-medium">{item.work}</h3>
								</div>
								<h6 className="uppercase text-[12px] tracking-[2px]">
									sept 10, 2022
								</h6>
							</div>
						</div>

						<div
							className={`${styles.flexBtw} px-1 py-3 mt-1 text-slate-600 font-[600] `}
						>
							<button className="text-[25px]">
								<BsTrash />{" "}
							</button>
							<button>Edit</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default UploadedProfiles;
