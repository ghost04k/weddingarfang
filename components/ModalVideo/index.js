import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';


const VideoModal = () => {
  
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="G-rzE-9zHj8" onClose={() => setOpen(false)} />

      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={() => setOpen(true)}><i className="fi flaticon-play" aria-hidden="true"></i></button>
          </li>
        </ul>
      </div>

    </React.Fragment>
  )
}

export default VideoModal;