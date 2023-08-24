import Header from './components/Header'
import Navigation from './components/Navigation'
import Card from './components/Card'
import Carousel from './components/Carousel'
import { data } from './mockdata'


const App = () => {
  return (
    <div>
        <Header />
        <Navigation />
        
        
      <div className="container">
        
        <div className="carousel">
            {
            data.map(item=>(
              <Carousel
          img={item.image}
          title={item.title}
          description={item.description}
          price={item.price} />
            ))
          }
        </div>

        <div className="card">
          {
            data.map(item=>(
              <Card
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