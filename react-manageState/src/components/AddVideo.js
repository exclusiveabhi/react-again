import './AddVideo.css';
import {useState} from 'react';

const initialState = {
    time: '',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views: '',
  }

function AddVideo({addVideos}) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video)
    setVideo(initialState)

  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <input type='date' name='time' onChange={handleChange} value={video.time}></input>
      <button
        onClick={handleSubmit}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
