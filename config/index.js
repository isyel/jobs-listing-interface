const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "http://localhost:3000"
	: "https://jobs-listing-interface.vercel.app";
