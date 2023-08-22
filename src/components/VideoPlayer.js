export const VideoPlayer = ({ path }) => {
    return (
      <div style={{ width: "50%", height: "50%" }}>
        <video controls>
          <source src={path} type="video/mp4" />
        </video>
      </div>
    )
  }