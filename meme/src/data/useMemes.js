import useSWR from "swr";
export default function useMemes() {
	return useSWR("/memes");
}
