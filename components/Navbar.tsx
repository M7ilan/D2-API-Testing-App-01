import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<div className="flex justify-between items-center text-center py-2 px-4 mb-8">
				<Link href="/" className="p-2 hover:bg-OpenColor-gray-2 rounded-lg sm:text-4xl font-bold break-all">
					D2CV
				</Link>
				<div>
					<Link href="/Search" className="p-2 hover:bg-OpenColor-gray-2 rounded-lg break-all">
						Search
					</Link>
				</div>
			</div>
		</>
	);
}
