// authContext.js

//web 748725839536-jkobkoroekamealpqtjvt4hl1qvcb8hn.apps.googleusercontent.com
//android 748725839536-c38mub3sb97saltgtq5stgv6p5vb9u5o.apps.googleusercontent.com
import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import * as Google from "expo-auth-session/providers/google";

const AuthContext = createContext({
	user: null,
	signInWithGoogle: () => {},
	signOut: () => {},
});

interface User {
	token: string;
}

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [request, response, promptAsync] = Google.useAuthRequest({
		webClientId: "748725839536-jkobkoroekamealpqtjvt4hl1qvcb8hn.apps.googleusercontent.com",
		androidClientId: "748725839536-c38mub3sb97saltgtq5stgv6p5vb9u5o.apps.googleusercontent.com",
	});

	// Restore user session on app start
	useEffect(() => {
		const checkExistingAuth = async () => {
			const token = await SecureStore.getItemAsync("googleToken");
			if (token) {
				setUser({ token });
			}
		};
		checkExistingAuth();
	}, []);

	// Handle Google sign-in response
	useEffect(() => {
		const handleSignInResponse = async () => {
			if (response?.type === "success" && response.authentication?.accessToken) {
				const token = response.authentication.accessToken;
				setUser({ token });
				await SecureStore.setItemAsync("googleToken", token);
			}
		};
		handleSignInResponse();
	}, [response]);

	const signInWithGoogle = () => promptAsync();

	const signOut = async () => {
		await SecureStore.deleteItemAsync("googleToken");
		setUser(null);
	};

	return <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
