import { SignJWT } from "jose";

async function signJWT(payload, secretKey) {
  const secret = new TextEncoder().encode(secretKey);

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
}

export default signJWT;
