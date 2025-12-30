import { useEffect, useState } from "react";
import loadingGif from "../assets/load-grey.gif";
import "../App.css";
import { TrackItem} from "./TrackItem";
import { getTracks, type TrackListItemOutput  } from "../dal/api";

type Props = {
	selectedTrackId: string | null;
	onTrackSelected: (id: string | null) => void;
};

export function TrackList({ onTrackSelected, selectedTrackId }: Props) {
	const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

	useEffect(() => {
		getTracks().then((json) => setTracks(json.data));
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
