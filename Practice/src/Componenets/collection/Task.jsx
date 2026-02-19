import React, { useState, useRef } from 'react'

const Task = () => {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlay(true)

    setTimeout(() => {
      videoRef.current.play()
    }, 100)
  }

  return (
    <div>
      {
        !play ? (
          <img
            src="https://cdn.pixabay.com/photo/2023/02/05/17/37/dog-7770063_1280.jpg"
            alt="poster"
            width="400"
            style={{ cursor: "pointer" }}
            onClick={handlePlay}
          />
        ) : (
          <video src='https://cdn.pixabay.com/video/2026/01/23/329674_tiny.mp4' ref={videoRef} width="400" controls>
    
          </video>
        )
      }
    </div>
  )
}

export default Task
