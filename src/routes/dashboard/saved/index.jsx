import React from "react";
import heartIcon from "../../../assets/heartIcon.svg";
import DashboardHeaders from "../../../components/dashboard/DashboardHeaders";
import { ProfileContext } from "../../../context/ProfileContext";
import image from "../../../assets/saveProfile.svg";
import styles from "../../../style";
import { Link } from "react-router-dom";
import { useContext } from "react";

const SavedProfiles = () => {
	const { favorites, removeFromFavorites } = useContext(ProfileContext);

	return (
		<section className="font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center min-h-[80vh]">
			{/**header component */}
			<DashboardHeaders
				title={"Saved profiles"}
				subtitle={"See and manage your saved profiles"}
				icon={heartIcon}
			/>

			{/**saved profiles section */}
			<div className={`flex justify-center items-center flex-wrap `}>
				{favorites.length ? (
					favorites.map((item) => (
						<div
							className="xs:w-[200px] w-full m-4"
							key={item.id}
						>
							<Link to={`/profiles/user/${item.id}`}>
								<div
									className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
									style={
										item.photo
											? { backgroundImage: `url(${item.photo})` }
											: {
													backgroundImage: `url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')`,
											  }
									}
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
										<h6 className="uppercase text-[12px] tracking-[2px]">
											sept 10, 2022
										</h6>
									</div>
								</div>
							</Link>

							<div
								className={`${styles.flexCenter} px-1 py-3 mt-1 text-slate-600 font-[600] `}
							>
								<button onClick={() => removeFromFavorites(item.id)}>
									Remove
								</button>
							</div>
						</div>
					))
				) : (
					<div
						className={`${styles.flexCenter} flex-col sm:w-[70vw] w-full mt-6`}
					>
						<h2 className="font-semibold">
							You do not have any saved profile.{" "}
							<Link
								to="/profiles"
								className="text-slate-500"
							>
								Like
							</Link>{" "}
							some profiles and check back!
						</h2>
						<div className="mb-5 mt-10">
							<img
								src={image}
								alt="like a profile"
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default SavedProfiles;
