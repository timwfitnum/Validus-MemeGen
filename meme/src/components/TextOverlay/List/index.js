import React from "react";

import TextOverlayItem from "../Item";
// Sets the location for the text to display
//Still need to somehow size the box so that it fits correctly??
export default function List({ data, imageRef, style }) {
	return (

// Using react fragment because we are returning multiple components, in this case its for the children which is our real time text input 
		<React.Fragment>
			{data.map((textOverlay, index) => {
				const { width, height } = imageRef?.current ?? {};
				const { text, distanceToLeft, distanceToBottom} = textOverlay;
				const left = width * distanceToLeft;
				const bottom = height * distanceToBottom;
				//Use to set as textbox type thing? Documentation isnt helping
				const boxW = width * textOverlay.width;
				const boxH = height * textOverlay.height;
				

//Retruns text to overlay, goes to text component first and then sets all location and styling before being returned to App.js
				return (
					<TextOverlayItem key={index} left={`${left}px`} bottom={`${bottom}px`} style={style} >
						{text}
					</TextOverlayItem>
				);
			})}
		</React.Fragment>
	);
}
