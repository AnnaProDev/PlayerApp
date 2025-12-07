import { useEffect, useState } from 'react'
import loadingGif from "./assets/load-grey.gif";
import './App.css'


function App() {

	const [ selectedTrackId, setSelectedTrackId] = useState(null)
	const [selectedTrack, setSelectedTrack] = useState(null)
	const [ tracks, setTracks] = useState(null)

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
	

  return (
    <>
		<h1>Music player</h1>
		<button onClick={() => {setSelectedTrackId(null) 
										setSelectedTrack(null)
		}}
		>Reset selection</button>
		<div className= "tracks">
			<ul className= "track_list">
				{tracks.map((track) => (
					<li key={track.id} 
						className= "track_item"
						onClick={() => {
							setSelectedTrackId(track.id);
							setSelectedTrack(null)
							fetch(`${import.meta.env.VITE_API_URL}${track.id}`, {
							headers: {
								"api-key": import.meta.env.VITE_API_KEY,
							},
						})
								.then((res) => res.json())
								.then((json) => setSelectedTrack(json.data))
						}}
						style={ { border: track.id === selectedTrackId ? "2px solid lightgreen" : ""}}>
						<div className= "track_title">{track.attributes.title}</div>
						<audio controls src={track.attributes.attachments[0].url}></audio>
					</li>
				))
				}
			</ul>
			{ 
  			(selectedTrackId 
			? 	<div className= "track_info">
				<h2>Details</h2>

				{selectedTrack
				? <>
						<h3 className='track_info_title'>{selectedTrack.attributes.title}</h3>
						<h4>Lyrics</h4>
						<p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
					</>
				: <p>Loading...</p>
				}
				



			</div>
			: "")
		}
		</div>

    </>
  )
}

export default App
