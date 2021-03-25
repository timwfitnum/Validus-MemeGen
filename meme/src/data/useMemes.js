import { systemProps } from "@chakra-ui/styled-system";
import useSWR from "swr";

//use the swr hook manager to handle the fetch and return 
//the specific array of memes from the json object returned

export default function useMemes() {
	return useSWR("/memes");
}
