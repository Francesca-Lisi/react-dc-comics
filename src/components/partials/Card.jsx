

const Card = (props) => {
  const { thumb, series } = props

  return (

    <div className="col">
      <div className="f-card">
        <div className="cutter">
          <img src={thumb} alt={series} />
        </div>
        <p className="card-title">{series}</p>
      </div>
    </div>

  )
}

export default Card