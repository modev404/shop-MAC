import Card from "./Card";
import img1 from "./imagecard/img1.jpg"
import img2 from "./imagecard/img2.jpg"
import img3 from "./imagecard/img3.jpg"
import img4 from "./imagecard/th.jpg"

function Home () {
  const cards = [
    {title:"Macbook Air",src : img1, description:'Ce Mac est rapide et performant',path:'/Mac'},
    {title:"Hp",src : img4, description:'Ce PC est fiable et durable',path:'/Hp'},
    {title:"Lenovo",src : img3, description:'Ce Lenovo offre un bon rapport',path:'/Lenovo'},
    {title:"Dell",src : img2, description:'Dell est pour les pro',path:'/Dell'},
  ]
   return (
    <div className="container mt-4" >
        <div className="row" >
          {cards.map((card,index) => (
            <div className="col-md-3" key={index} >
                <Card title={card.title} src={card.src} description={card.description} path={card.path} />
            </div>
          )   
        )}

        </div>
    </div> 


   )
}
export default Home