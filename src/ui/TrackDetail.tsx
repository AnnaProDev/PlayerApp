import { useTrackDetail } from "../bll/useTrackDetail";
import styles from "./TrackDetail.module.css"

type Props = {
	selectedTrackId: string | null;
};

export function TrackDetail({ selectedTrackId }: Props) {
	const { trackDetails } = useTrackDetail(selectedTrackId);

	return (
		<div className={styles.track_info}>
			<h2>Details</h2>
			{!trackDetails && !selectedTrackId && "Track is not selected"}
			{!trackDetails && selectedTrackId && "Loading..."}
			{trackDetails &&
				selectedTrackId &&
				selectedTrackId !== trackDetails.id &&
				"Loading..."}
			{trackDetails && (
				<>
					<h3 className={styles.track_info_title}>{trackDetails.attributes.title}</h3>
					<div>
						<h4>Lyrics:</h4>
						<span>{trackDetails.attributes.lyrics ?? "no lyrics"}</span>
					</div>
				</>
			)}
		</div>
	);
}
