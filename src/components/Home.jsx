import React, { useRef } from "react";
import {
	Hero,
	Stats,
	Testimonials,
	Upload,
	UseTemplates,
	ViewProfiles,
} from "../routes";

const Home = () => {
	const scrollRef = useRef(null);

	return (
		<div>
			<Hero />
			<Stats scrollref={scrollRef} />
			<Upload />
			<ViewProfiles />
			<UseTemplates />
			<Testimonials />
		</div>
	);
};

export default Home;
