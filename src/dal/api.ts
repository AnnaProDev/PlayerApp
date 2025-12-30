export type GetTrackDetailsOutputData = {
	id: string
	attributes: {
		title: string
		lyrics: string | null
	}
}

export type TrackAttachment = {
	url: string
}

export type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<TrackAttachment>
}

export type TrackListItemOutput = {
	id: string;
	attributes: TrackListItemOutputAttributes
};

export type GetTrackDetailsOutput = { data: GetTrackDetailsOutputData }

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(`${import.meta.env.VITE_API_URL}${trackId}`, {
    headers: {
      "api-key": import.meta.env.VITE_API_KEY,
    },
  }).then((res) => res.json())
 
  return promise
}

export type GetTrackListOutput = {
  data: Array<TrackListItemOutput>
}

export const getTracks = () => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(import.meta.env.VITE_API_URL, {
    headers: {
      "api-key": import.meta.env.VITE_API_KEY,
    },
  }).then((res) => res.json())
  return promise
}