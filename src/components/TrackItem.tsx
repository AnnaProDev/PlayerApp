import "../App.css";

export function TrackItem({ onTrackSelected, isSelect, track }) {
	return (
		<li
			className="track_item"
			onClick={() => {
				onTrackSelected(track.id);
			}}
			style={{
				borderColor: isSelect ? "lightgreen" : "",
			}}
		>
			<div className="track_title">{track.attributes.title}</div>
			<audio controls src={track.attributes.attachments[0].url}></audio>
		</li>
	);
}
