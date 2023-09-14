export default function CustomButton({ title }: { title: string }) {
	return (
		<button
			type="button"
			className="flex flex-row relative justify-center items-center py-3 px-6 outline-none hover:bg-red-400 bg-red-600 text-white rounded-full mt-10"
		>
			<span className="flex-1">{title}</span>
		</button>
	);
}
