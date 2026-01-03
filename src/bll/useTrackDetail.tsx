import { useEffect, useState } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";

export const useTrackDetail = (selectedTrackId: string | null) => {
	const [trackDetails, setTrackDetails] =
		useState<GetTrackDetailsOutputData | null>(null);

	useEffect(() => {
		if(!selectedTrackId) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setTrackDetails(null)
			return;
		}
		getTrack(selectedTrackId).then((json) => setTrackDetails(json.data));
	}, [selectedTrackId]);
	return {trackDetails}
};
