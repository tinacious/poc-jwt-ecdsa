import JWT from "jsonwebtoken";

/**
 * Verifies the authenticity of the provided token and public key
 * @param {JWTToken} token
 * @param {String} publicKey  ES256 algorithm
 */
export const readToken = (token, publicKey) => {
  if (!token || !publicKey)
    throw new Error("Token and public ES256 key required");

  const decoded = JWT.verify(token, publicKey, { algorithm: "ES256" });
  console.log("Successfully decoded!", decoded);

  return decoded;
};
