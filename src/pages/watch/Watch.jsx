import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"

export const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video className="video" autoPlay onProgress controls src="https://moviecafe.download/themes/v1//assets/movie.mp4" />
    </div>
  )
}
