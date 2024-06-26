import React, { createContext } from "react";
import { ProfileContextProvider } from "./ProfileContext";
import { TemplateContextProvider } from "./TemplateContext";
import { AuthContextProvider } from "./AuthenticationContext";

export const Context = preserveRef("c", createContext());

function preserveRef(key, v) {
	if (import.meta.env.PROD) return v;

	const old = import.meta.hot.data[key];
	const now = old || v;

	import.meta.hot.on("vite:beforeUpdate", () => {
		import.meta.hot.data[key] = now;
	});

	return now;
}

export const ContextProvider = ({ children }) => {
	const generateId = (upperLimit) => {
		return Math.floor(Math.random() * upperLimit);
	};

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
