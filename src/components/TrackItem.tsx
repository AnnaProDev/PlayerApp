import "../App.css";

type TrackAttachment = {
	url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<TrackAttachment>
}

export type TrackListItemOutput = {
	id: string;
	attributes: TrackListItemOutputAttributes
};

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
