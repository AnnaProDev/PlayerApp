import { useState } from "react";
import { TrackDetail } from "./components/TrackDetail";
import { TrackList } from "./components/TrackList";
import "./index.css";

export function MainPage() {
	const [trackId, setTrackId] = useState<string | null>(null);

	const handleTrackSelect = (id: string | null): void => {
		setTrackId(id)
	}

	return (
		<div>
			<h1>Music player</h1>
			<div style={{ display: "flex", gap: "30px" }}>
				<TrackList
					onTrackSelected={handleTrackSelect}
					selectedTrackId={trackId}
				/>
				<TrackDetail selectedTrackId={trackId} />
			</div>
		</div>
	);
}
