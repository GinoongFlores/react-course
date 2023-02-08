import { useGetCat } from "../useGetCat";

export const Cat = () => {
	const { data, isCatLoading, refetchData, isCatError } = useGetCat();

	if (isCatLoading) return <h1>The Cat is Sleeping...</h1>;
	if (isCatError) return <h1>Something went wrong...</h1>;

	return (
		<div>
			<h2>{data?.fact}</h2>
			<button onClick={refetchData}>Give Another Cat Fact</button>
		</div>
	);
};
