import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");

	if (code) {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				grant_type: "authorization_code",
				code: code,
				client_id: process.env.CLIENT_ID || "",
				client_secret: process.env.CLIENT_SECRET || "",
			}),
		};

		fetch("https://www.bungie.net/Platform/App/OAuth/token/", options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	}
}
