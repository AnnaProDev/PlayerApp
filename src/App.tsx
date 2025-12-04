import { useEffect, useState } from 'react'
import './App.css'


	// const tracks = [ 
	// 	{id: 1, title: "Dreamer", isSelected: true, url: "https://andrew-babich.vercel.app/previews/Andrew_Babich-Dreamer(cut.).mp3"},
	// 	{id: 2, title: "Waves", isSelected: false, url: "https://andrew-babich.vercel.app/previews/Andrew_Babich-Waves(part).mp3"},
	// 	{id: 3, title: "Insomnia", isSelected: true, url: "https://andrew-babich.vercel.app/previews/Insomnia(part).mp3"},
	// ]



function App() {

	const [ selectedTrackId, setSelectedTrackId] = useState(0)
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
				<p>Loading ...</p> 
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
		<button onClick={() => (setSelectedTrackId(null))}>Reset selection</button>
      <ul className= "track_list">
			{tracks.map((track) => (
				<li key={track.id} 
					className= "track_item"
					onClick={() => (setSelectedTrackId(track.id))}
					 style={ { border: track.id === selectedTrackId ? "2px solid lightgreen" : ""}}>
					<div className= "track_title">{track.attributes.title}</div>
					<audio controls src={track.attributes.attachments[0].url}></audio>
				</li>
			))
			}
      </ul>
    </>
  )
}

export default App
