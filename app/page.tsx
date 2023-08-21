import Link from "next/link";

const Home = () => {
	return (
		<>
			<div className="col-start-3 col-end-11 text-center">
				<div className="text-4xl font-bold mb-8">Welcome to D2CV</div>
				<Link href={`https://www.bungie.net/en/OAuth/Authorize?client_id=${process.env.CLIENT_ID}&response_type=code`} className="py-2 px-4 bg-OpenColor-gray-2 rounded-lg ring-default text-xl">
					Authenticate
				</Link>
			</div>
		</>
	);
};

export default Home;
