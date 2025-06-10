import React, { useRef } from "react";
import Hero from "../components/home/hero";
import Stats from "../components/home/stats";
import Upload from "../components/home/upload";
import ViewProfiles from "../components/home/viewProfiles";
import UseTemplates from "../components/home/useTemplates";
import Testimonials from "../components/home/testimonial";

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
