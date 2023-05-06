import crypto from "crypto";
import pjson from "../../../package.json";

export const getVersion = () => {
  return process.env.NODE_ENV === "production"
    ? pjson.version
    : pjson.version + "." + crypto.randomBytes(4).toString("hex");
};
