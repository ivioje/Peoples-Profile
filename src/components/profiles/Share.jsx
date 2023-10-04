import React from "react";
import {
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsWhatsapp,
	BsX,
} from "react-icons/bs";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";

import styles from "../../style";

const Share = ({ item, open, setOpen }) => {
	const shareLink = `${window.location.href}/${item.id}`;

	return (
		<section
			className={`${
				open ? "block" : "hidden"
			} absolute border-4 border-gray-100 pt-6 px-2 xs:p-4 w-auto h-auto bottom-[-20px] right-0 bg-white shadow`}
		>
			<button
				className="absolute top-0 right-0 text-[26px]"
				onClick={() => setOpen(!open)}
			>
				<BsX />
			</button>
			<small className="font-firaSans text-gray-500">Share on</small>
			<div
				className={`${styles.flexBtw} flex-wrap text-xl text-primary share mt-1`}
			>
				<FacebookShareButton url={shareLink}>
					<BsFacebook />
				</FacebookShareButton>
				<TwitterShareButton url={shareLink}>
					<BsTwitter />
				</TwitterShareButton>
				<LinkedinShareButton url={shareLink}>
					<BsLinkedin />
				</LinkedinShareButton>
				<WhatsappShareButton url={shareLink}>
					<BsWhatsapp />
				</WhatsappShareButton>
			</div>
		</section>
	);
};

export default Share;
