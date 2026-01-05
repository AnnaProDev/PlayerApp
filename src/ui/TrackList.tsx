import loadingGif from "../assets/load-grey.gif";
import { TrackItem} from "./TrackItem";
import { type TrackListItemOutput  } from "../dal/api";
import { useTracks } from "../bll/useTracks";
import styles from "./TrackList.module.css"

type Props = {
	selectedTrackId: string | null;
	onTrackSelected: (id: string | null) => void;
};

export function TrackList({ onTrackSelected, selectedTrackId }: Props) {
	const { tracks } = useTracks()

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
		<div className={styles.tracks}>
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
