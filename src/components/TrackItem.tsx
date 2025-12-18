import "../App.css";



export function TrackItem(props) {
	return (
		<li
			className="track_item"
			onClick={() => {
				props.onTrackSelected(props.track.id);
			}}
			style={{
				borderColor: props.isSelect ? "lightgreen" : "",
			}}
		>
			<div className="track_title">{props.track.attributes.title}</div>
			<audio controls src={props.track.attributes.attachments[0].url}></audio>
		</li>
	);
}
