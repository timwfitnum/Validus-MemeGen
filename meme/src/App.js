import { useState, useRef } from "react";
import { Text, Button, Box, Heading, Spinner, Image, Input, Stack } from "@chakra-ui/react";
import useMemes from "./data/useMemes";

import { MemeList } from "./components/Memes";
import { TextOverlayList } from "./components/TextOverlay";
import html2canvas from "html2canvas";

function App() {
	const [selectedMeme, setSelectedMeme] = useState(null);
	const [textBlocks, setTextBlocks] = useState([]);
	// used to receive from the api fetch - help check for errors and 
	// mutate changes cached data so can be used to swap meme display? yes?
	const { data, error, mutate } = useMemes();

	// store my memes if fetched - else store empty object
	const { memes } = data ?? {};

	// reference to image so once selected can make big and overlay text
	const imageRef = useRef(null);

	//Set selected meme and setUp the number of textblocks needed
	// by reading in from the memes data
	const onMemeSelected = (meme) => {
		setSelectedMeme(meme);
				//... is to mean all other data is still there and unchanged
		const textBlocks = meme.textBlocks?.map((textBlock) => ({ ...textBlock, text: "" }));
		setTextBlocks(textBlocks);
	};
	// update text in textbox and realtime display over image
	const onTextBlockChange = (value, index) => {
		// Deep clone list of text blocks
		const textBlocksClone = [...textBlocks];

		// Mutate text block to update the text - 
		textBlocksClone[index] = { ...textBlocksClone[index], text: value };

		// Apply mutation to state
		setTextBlocks(textBlocksClone);
	};
//Spinner for when are waiting for data to load and no errors
	if (!data && !error) {
		return (
			<Box>
				<Spinner />
			</Box>
		);
	}
// error handle, bad fetch from api
	if (!data && error) {
		return (
			<Box textAlign="center">
				<Text fontWeight="bold" size="xl">
					There was an error
				</Text>

				<Text mb="24px">There was an issue fetching memes.</Text>

				<Button colorScheme="teal" onClick={() => mutate(null, true)}>
					Try Again
				</Button>
			</Box>
		);
	}

	// function generateMeme() {
	// 	html2canvas(document.querySelector("#capture")).then(canvas => {
	// 		// document.body.appendChild(canvas);
	// 		var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	// 		window.location.href = image;
	// 	})
	// };

	return (
		<Box p={5}>
			<Heading>Meme Maker</Heading>
			
			<Box mt={5} display="flex" flexDirection={{ base: "column-reverse", md: "row" }}>
				<Box position="relative" mr={{ base: 0, md: 5 }}>
					<Image objectFit="contain" src={selectedMeme?.image.large} ref={imageRef} />

					<TextOverlayList data={textBlocks} imageRef={imageRef} style={selectedMeme?.style} />
					</Box>
				<Box>
					<MemeList data={memes} onClick={onMemeSelected} />

					<Stack mt={5}>
						{textBlocks.map((textBlock, index) => (
							<Box key={index}>
								Text box: {index+1}
								<Input value={textBlock.text} onChange={({ target: { value } }) => onTextBlockChange(value, index)} />
							</Box>
						))}
					</Stack>
				</Box>
			</Box>
			
		</Box>
	);
}

export default App;
