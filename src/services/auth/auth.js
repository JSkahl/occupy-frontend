import api from "@/plugins/axios";
import { hashPassword } from "@/utils";
import signJWT from "@/utils/auth/jwt.js";

const secret = import.meta.env.VITE_JWT_SECRET

export default async function loginService(email, password) {
	const hashedPassword = hashPassword(password);
	console.log(
		"email:",
		email,
		"senha:",
		password,
		"encriptada:",
		hashedPassword,
	);
	const jwt = await signJWT({ lgn: email, pwd: hashedPassword }, secret);

	console.log(secret);
	const response = await api.post(
		"/auth/login",
		{},
		{
			headers: {
				token: jwt,
			},
		},
	);

  console.log(jwt)
	localStorage.setItem("token", jwt);
	return response.data;
}
