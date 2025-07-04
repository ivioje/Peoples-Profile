import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import footerBg from "../../assets/vanishing-stripes.svg";
import { quickLinks } from "../../constants";

const Footer = () => (
	<section
		className="flex flex-col pt-10 md:px-[53px] text-lightGray 
    font-poppins bg-primary text-[15px] sm:text-[16px] bg-cover bg-no-repeat"
		style={{ backgroundImage: `url(${footerBg})` }}
	>
		<div className="flex flex-col md:flex-row justify-between pb-10 relative">
			<div className="p-4">
				<div className="">
					<img
						src={logo}
						alt="peoples profile logo"
					/>
				</div>
				<div
					className="flex text-center justify-between flex-wrap px-4 my-8 
                text-xl w-[150px]"
				>
					<a href="#">
						<BsTwitter />
					</a>
					<a href="#">
						<BsGithub />
					</a>
					<a href="#">
						<BsLinkedin />
					</a>
				</div>
			</div>

			<div className="p-4">
				<h3 className="font-firaSans">Quick Links</h3>
				<hr className="opacity-20" />
				<div className="flex justify-between flex-wrap my-4 ">
					<div className="flex flex-col mr-20 pt-2">
						{quickLinks.slice(0, 5).map((link) => (
							<NavLink
								to={`/${link.id}`}
								key={link.id}
								className="p-1"
							>
								{link.title}
							</NavLink>
						))}
					</div>
					<div className="flex flex-col pt-2">
						{quickLinks.slice(5, 8).map((link) => (
							<NavLink
								to={`/${link.id}`}
								key={link.id}
								className="p-1"
							>
								{link.title}
							</NavLink>
						))}
					</div>
				</div>
			</div>

			<div className="p-4 mt-1 sm:mt-9">
				<h3 className="font-firaSans text-[20px] py-2">
					Subscribe to join our mailing list
				</h3>
				<div className="flex flex-col justify-between xs:flex-row xs:justify-start">
					<input
						type="text"
						name="email"
						placeholder="Email address"
						className="sm:h-[47px] p-3 mb-3 xs:mb-0 bg-lightGray xs:rounded-tl-lg 
                        xs:rounded-bl-lg xs:rounded-tr-none xs:rounded-br-none w-full  
                        xs:w-3/4 text-text_color rounded-[10px]"
					/>
					<button
						className="h-[46px] rounded-[10px] font-bold xs:rounded-none p-2 border 
                    border-gray-100 xs:font-normal"
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
		<hr className="opacity-10" />
		<div className="text-center py-6 font-[300]">
			<p>
				&#169;{new Date().getFullYear()} Peoples profile. All rights reserved.
			</p>
			<small className="font-firaSans font-extralight opacity-90">
				Built by{" "}
				<a
					href="#"
					className="underline"
				>
					Rhoda I.E.
				</a>
			</small>
		</div>
	</section>
);

export default Footer;
