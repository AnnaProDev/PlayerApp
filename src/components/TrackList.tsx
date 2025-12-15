import { useEffect, useState } from "react"
import loadingGif from "../assets/load-grey.gif";
import '../App.css'

export function TrackList() {

		const [ tracks, setTracks] = useState(null)
		const [ selectedTrackId, setSelectedTrackId] = useState(null)

	useEffect (() => {
		fetch(import.meta.env.VITE_API_URL, {
		headers: {
			"api-key": import.meta.env.VITE_API_KEY,
		},
		})
			.then((res) => res.json())
			.then((json) => setTracks(json.data))
	}, [])

if ( tracks === null) {
return (
	<div>
		<h1>Music player</h1>
		<img src={loadingGif} alt="loading" /> 
	</div>
		)
}

if ( tracks.length === 0) {
			return (
		<div>
			<h1>Music player</h1>
			<p>No tracks</p> 
		</div>
			)
}
  return <div className= "track_list">
				{tracks.map((track) => (
					<li key={track.id} 
						className= "track_item"
						onClick={() => {
							setSelectedTrackId(track.id);
						}}
						style={ { border: track.id === selectedTrackId ? "2px solid lightgreen" : ""}}>
						<div className= "track_title">{track.attributes.title}</div>
						<audio controls src={track.attributes.attachments[0].url}></audio>
					</li>
				))
				}
			</div>
	
	
}