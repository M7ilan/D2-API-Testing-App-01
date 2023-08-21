import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");

	if (code) {
		console.log(code);
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

		const res = await fetch("https://www.bungie.net/Platform/App/OAuth/token/", options);
		return NextResponse.json(res);
	}
}
