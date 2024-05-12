
import Header from './components/Header';

import Footer from './components/Footer';

import { Helmet } from 'react-helmet';

import './App.css';
import Products from './components/Products';


function App() {
  
  
  return (
    <div className="App">
       <article>
      <Helmet>
        <title>AppScrip Store</title>
        <meta name="description" content="AppScrip Online Store for clothing and Grocerries" />
        {/* Other head elements */}
      </Helmet>
      <Header/>
      <section className='mobile-view-only'>
        <h1>HOME</h1>
        <p>|</p>
        <h2>SHOP</h2>
      </section>
      <section className='title-container'>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptatibus, 
            consequuntur maxime id dolor</p>
      </section>
      <Products/>
      <footer>
        <Footer/>
      </footer> 
    </article>
  </div>
  );
}

export default App;

