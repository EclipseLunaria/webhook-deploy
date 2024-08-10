import { createHmac } from "crypto";

export const verifySignature = (
  payload: string,
  signature: string,
  secret: string
): boolean => {
  const hmac = createHmac("sha256", secret);
  const digest = `sha256=${hmac.update(JSON.stringify(payload)).digest("hex")}`;
  return signature === digest;
};
