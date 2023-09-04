import Header from './components/Header'
import Navigation from './components/Navigation'
import Card from './components/Card'
import Carousel from './components/Carousel'
import { data } from './mockdata'



const App = () => {
  return (
    <div  className='main' >
        <Header />
        <Navigation />
        
        
      <div className="container">
        
        <div className="carousel">
            {
            data.map( item=>(
              <Carousel key={item.id} item={item}
        /*   img={item.image}
          title={item.title}
          description={item.description}
          price={item.price} */ />
            ))
          }
        </div>

        <div className="card">
          {
            data.map(item=>(
              <Card key={item.id} item={item}
          img={item.image}
          title={item.title}
          description={item.description}
          price={item.price} />
            ))
          }
        </div>
          
        
      </div>
    </div>
  );
}

export default App