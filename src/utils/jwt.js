import { SignJWT } from "jose";

async function generateJWT(payload, secretKey) {
	const secret = new TextEncoder().encode(secretKey);

	const jwt = await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256", typ: "JWT" })
		.setIssuedAt()
		.setExpirationTime("1h")
		.sign(secret);

	return jwt;
}

export default generateJWT;
