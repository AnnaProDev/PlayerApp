import { TrackDetail } from "./ui/TrackDetail";
import { TrackList } from "./ui/TrackList";
import "./index.css";
import { useTrackSelection } from "./bll/useTrackSelection";

export function MainPage() {
	const { trackId, setTrackId } = useTrackSelection();

	const handleTrackSelect = (id: string | null): void => {
		setTrackId(id);
	};

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
