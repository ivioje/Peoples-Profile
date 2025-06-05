import { Button } from "@mui/material";
import styles from "../../../style";
import GenericPdfDownloader from "../../utils/GenericPdfDownloader";

const PageButtons = () => {
	return (
		<div className={`${styles.flexCenter}`}>
			<GenericPdfDownloader
				downloadFileName="MyProfile"
				rootElementId="template"
			/>
			<Button
				style={{
					background: "#171F3A",
					color: "whitesmoke",
					padding: "5px",
					margin: ".2rem",
				}}
			>
				Print
			</Button>
		</div>
	);
};

export default PageButtons;
