import React from "react";
import { Text, transform } from "@chakra-ui/react";

// Apply all the styling to the text and retrieve the position from List
// children because thats the text we are receiving to display - this made zero sense
function Item({ left, bottom, style, children, maxH, maxW}) {
	return (
		<Text position="absolute" left={left} bottom={bottom} fontSize={style === "normal" ? "3xl" : "5xl"} textAlign="center" {...textStyle[style]}>
			{children}
		</Text>
	);
}

export default React.memo(Item);
// Different style modes - normal or shadowed
const textStyle = {
	normal: {
		color: "black",
	},
	shadowed: {
		textShadow: "5px 5px 5px black",
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase"
	},
};
