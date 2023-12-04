export const generateNonce = () =>
  Buffer.from(crypto.randomUUID()).toString("base64");
