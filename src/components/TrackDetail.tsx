import { useEffect, useState } from "react";

export function TrackDetail(props) {
	const [selectedTrack, setSelectedTrack] = useState(null);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}${props.selectedTrackId}`, {
			headers: {
				"api-key": import.meta.env.VITE_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((json) => setSelectedTrack(json.data));
	}, [props.selectedTrackId]);

	return (
		<div className="track_info">
			<h2>Details</h2>
			{!selectedTrack && !props.selectedTrackId && "Track is not selected"}
			{!selectedTrack && props.selectedTrackId && "Loading..."}
			{selectedTrack &&
				props.selectedTrackId &&
				props.selectedTrackId !== selectedTrack.id &&
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
