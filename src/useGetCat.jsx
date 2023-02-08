import { useQuery } from "@tanstack/react-query";

// here we should wrapped the axios with curly brackets because it cannot detect the default export of axios
import Axios from "axios";

export const useGetCat = () => {
	const {
		data,
		refetch,
		isLoading: isCatLoading,
		isRefetchError: isCatError,
	} = useQuery(["cat"], async () => {
		return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
	});

	const refetchData = () => {
		alert("DATA REFETCH!");
		refetch();
	};

	return { data, refetchData, isCatLoading, isCatError };
};
