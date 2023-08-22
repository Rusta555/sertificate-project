import Header from './components/Header'
import Navigation from './components/Navigation'
import Card from './components/Card'
import { data } from './mockdata'

const App = () => {
  return (
    <div>
        <Header />
        <Navigation />
      <div className="container">
        <div className="card-product">
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