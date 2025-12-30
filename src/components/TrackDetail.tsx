import { useEffect, useState } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";



type Props = {
	selectedTrackId: string
}

export function TrackDetail({ selectedTrackId }: Props) {
	const [selectedTrack, setSelectedTrack] = useState< GetTrackDetailsOutputData | null>(null);

	useEffect(() => {
			getTrack(selectedTrackId).then((json) => setSelectedTrack(json.data));
	}, [selectedTrackId]);

	return (
		<div className="track_info">
			<h2>Details</h2>
			{!selectedTrack && !selectedTrackId && "Track is not selected"}
			{!selectedTrack && selectedTrackId && "Loading..."}
			{selectedTrack &&
				selectedTrackId &&
				selectedTrackId !== selectedTrack.id &&
				"Loading..."}
			{selectedTrack && (
				<>
					<h3 className="track_info_title">{selectedTrack.attributes.title}</h3>
					<div>
						<h4>Lyrics:</h4>
						<span>{selectedTrack.attributes.lyrics ?? "no lyrics"}</span>
					</div>
				</>
			)}
		</div>
	);
}
