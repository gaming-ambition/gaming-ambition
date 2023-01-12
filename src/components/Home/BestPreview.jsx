import './BestPreview.css';

function BestPreview(props) {
  return (
    <>
      <div id="container">
        <img src={props.logo} width="175px" alt=""/>
        <div id="details">
          <p id="name">{props.name}</p>
          <p id="ratio">
            <span className="green">{props.wins}W </span>
            <span className="red">{props.loses}L</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default BestPreview;