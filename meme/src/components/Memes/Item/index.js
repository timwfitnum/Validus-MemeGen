import React from "react";
import { Box, Image, Button, Tooltip } from "@chakra-ui/react";
//handles each meme in the list and sets the disabled property
// Or allows user to select and then create meme from it
function MemeItem({ title, disabled, image, onClick }) {
	const { thumbnail } = image;

	return (
		<Tooltip label={title}>
			<Box as={Button} boxSize="50px" p={0} isDisabled={disabled} onClick={onClick}>
				<Image boxSize="50px" objectFit="cover" src={thumbnail} alt={title} />
			</Box>
		</Tooltip>
	);
}

export default React.memo(MemeItem);
