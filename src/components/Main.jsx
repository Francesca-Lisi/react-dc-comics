import Card from "./partials/Card"
import comics from "../../data/comics"

const Main = () => {
  return (
    <main className="text-bg-dark">
      <div className="container">
        <h4 id="label-main">CURRENT SERIES</h4>
        <div className="row row-cols-6">
          {comics.map(card =>
            <Card key={card.id} thumb={card.thumb} series={card.series} />
          )}


        </div>
      </div>
    </main>
  )
}

export default Main