import { useEffect, useState } from "react";

export function TrackDetail({ selectedTrackId }) {
	const [selectedTrack, setSelectedTrack] = useState(null);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}${selectedTrackId}`, {
			headers: {
				"api-key": import.meta.env.VITE_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((json) => setSelectedTrack(json.data));
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
