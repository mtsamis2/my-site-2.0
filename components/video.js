import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Video = (props) => (
    <div className='player-wrapper'>
        <ReactPlayer className='react-player'
            url={`https://www.youtube.com/watch?v=${props.videoId}`}
            width='100%'
            height='100%'
            controls />
    </div>
)

export default Video
