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
          <Carousel data={data}  />
        </div>

        <div className="card">
        
              <Card data={data} />
              <Card data={data} />
              <Card data={data} />
              <Card data={data} />
         
        </div>
          
        
      </div>
    </div>
  );
}

export default App
