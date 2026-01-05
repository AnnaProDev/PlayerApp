import type {TrackListItemOutput } from "../dal/api";
import styles from "./TrackItem.module.css"
import clsx from 'clsx';

type Props = {
	isSelected: boolean
	onTrackSelected: (trackId: string) => void
	track: TrackListItemOutput
}

export function TrackItem({ onTrackSelected, isSelected, track }: Props) {

	const className = clsx({ [styles.track_item] :true, [styles.selected]:isSelected });
	return (
		<li
			className={className}
			onClick={() => {
				onTrackSelected(track.id);
			}}
		>
			<div className={styles.track_title}>{track.attributes.title}</div>
			<audio controls src={track.attributes.attachments[0].url}></audio>
		</li>
	);
}
