import dotenv from "dotenv";

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export const appConfig = {
    port: process.env.PORT || 4200
};