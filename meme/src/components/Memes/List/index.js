import { Stack } from "@chakra-ui/react";

import MemeItem from "../Item";
//Handles the meme column display and selection process
// Stack was so damn helpful, arrange in nice column
export default function MemeList({ data, onClick }) {
	if (!data) {
		return null;
	}

	return (
		<Stack direction="column">
			{data.map((meme, index) => (
				<MemeItem key={index} {...meme} onClick={() => onClick(meme)} />
			))}
		</Stack>
	);
}
