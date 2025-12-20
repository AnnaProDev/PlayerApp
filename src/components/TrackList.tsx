import { useEffect, useState } from "react";
import loadingGif from "../assets/load-grey.gif";
import "../App.css";
import { TrackItem } from "./TrackItem";

export function TrackList({ onTrackSelected, selectedTrack }) {
	const [tracks, setTracks] = useState(null);

	useEffect(() => {
		fetch(import.meta.env.VITE_API_URL, {
			headers: {
				"api-key": import.meta.env.VITE_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((json) => setTracks(json.data));
	}, []);

	if (tracks === null) {
		return (
			<div>
				<img src={loadingGif} alt="loading" />
			</div>
		);
	}

	if (tracks.length === 0) {
		return (
			<div>
				<p>No tracks</p>
			</div>
		);
	}
	return (
		<div className="track_list">
			<button
				onClick={() => {
					onTrackSelected(null);
				}}
			>
				RESET
			</button>
			{tracks.map((track) => {
				return (
					<TrackItem
						key={track.id}
						track={track}
						isSelect={track.id === selectedTrack}
						onTrackSelected={onTrackSelected}
					/>
				);
			})}
		</div>
	);
}
