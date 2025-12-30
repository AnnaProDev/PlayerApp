import "../App.css";
import type {TrackListItemOutput } from "../dal/api";

type Props = {
	isSelected: boolean
	onTrackSelected: (trackId: string) => void
	track: TrackListItemOutput
}

export function TrackItem({ onTrackSelected, isSelected, track }: Props) {
	return (
		<li
			className="track_item"
			onClick={() => {
				onTrackSelected(track.id);
			}}
			style={{
				borderColor: isSelected ? "lightgreen" : "",
			}}
		>
			<div className="track_title">{track.attributes.title}</div>
			<audio controls src={track.attributes.attachments[0].url}></audio>
		</li>
	);
}
