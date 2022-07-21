//import Track.css
import "./Track.css"


function searchResults(props) {
  const {name,artist,album} = props;
  return (
    <div className="Track">
      <div className="Track-information">
        <h3> {name}</h3>
        <p>{artist} | {album} </p>
      </div>
      {this.renderAction}
    </div>
  )
}



// const Track = () => {

//   renderAction() {
//       if (this.props.isRemoval) {
//           return<button className = "Track-action">-</button>
//       } else {
//           return <button className = "Track-action">+</button>
//       }
//     }
    


//     return (
//       <div className="Track">
//         <div className="Track-information">
//           <h3> track name </h3>
//           <p>track artist | track album </p>
//         </div>
//         {this.renderAction}
//       </div>
//     )
//   }

export default Track;