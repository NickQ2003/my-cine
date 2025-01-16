import CardList from "./components/CardList";
import BannerList from "./components/BannerList";
const App: React.FC = () => {

  return (
    <>
    
    <div>
      <main className="banner">
        <BannerList />
      </main>
        <div className="zona">
          <div className="search">
              <div className="placeholder"></div>
                <h3>Buscar</h3>
              <div className="navbar-search">
              <div className="barra">
                <nav className="space-holderS"> Busca tu genero</nav>
              </div>
              <div className="listado">
                <h3 className="h3">Generos</h3>
                <a>accion</a>
                <a>ciencia ficcion</a>
                <a>terror</a>
                <a>animadas</a>
                <a>para mayores de 14</a>
                <a>para mayores de 16</a>
                <a>comedia</a>
                <a>romantica</a>
                <a>drama</a>
                <a>historia</a>
                <a>nacionales</a>
              </div>
            </div>
          </div>
          <main className="main">
            <CardList />
          </main>
        </div>
    </div>
    </>
  );
};

export default App;
