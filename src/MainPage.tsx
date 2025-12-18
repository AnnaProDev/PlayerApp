import { useState } from "react";
import { TrackDetail } from "./components/TrackDetail";
import { TrackList } from "./components/TrackList";
import "./index.css";

export function MainPage() {
	const [trackId, setTrackId] = useState(null);

	return (
		<div>
			<h1>Music player</h1>
			<div style={{ display: "flex", gap: "30px" }}>
				<TrackList
					onTrackSelected={(id) => {
						setTrackId(id);
					}}
					selectedTrack={trackId}
				/>
				<TrackDetail selectedTrackId={trackId} />
			</div>
		</div>
	);
}
