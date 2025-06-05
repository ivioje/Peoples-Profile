import { createContext } from "react";
import { ProfileContextProvider } from "./ProfileContext";
import { TemplateContextProvider } from "./TemplateContext";
import { AuthContextProvider } from "./AuthenticationContext";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const generateId = (upperLimit) => Math.floor(Math.random() * upperLimit);

	return (
		<AuthContextProvider>
			<TemplateContextProvider>
				<ProfileContextProvider>
					<Context.Provider value={generateId}>{children}</Context.Provider>
				</ProfileContextProvider>
			</TemplateContextProvider>
		</AuthContextProvider>
	);
};
