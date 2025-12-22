import { useEffect, useState } from "react";
import loadingGif from "../assets/load-grey.gif";
import "../App.css";
import { TrackItem, type TrackListItemOutput } from "./TrackItem";

type Props = {
	selectedTrackId: string | null;
	onTrackSelected: (id: string | null) => void;
};

export function TrackList({ onTrackSelected, selectedTrackId }: Props) {
	const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

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
			{tracks.map((track: TrackListItemOutput) => {
				return (
					<TrackItem
						key={track.id}
						track={track}
						isSelected={track.id === selectedTrackId}
						onTrackSelected={onTrackSelected}
					/>
				);
			})}
		</div>
	);
}
