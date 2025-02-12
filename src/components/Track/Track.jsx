//import Track.css

import { render } from "react-dom"

const Track = () => {

  renderAction() {
      if (this.props.isRemoval) {
        return <button className="Track-action">-</button>
      }else {
        return <button className="Track-action">+</button>
      }
    }
  
  return (
    <div className="Track">
    <div className="Track-information">
      <h3>track name </h3>
      <p>track artist | rack album </p>
    </div>
    <button className="Track-action"><!-- + or - will go here --></button>
  </div>
  )
}

export default Track;