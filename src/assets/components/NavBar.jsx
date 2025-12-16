import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>

      {tienda}
      <nav
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <Link to="/">
          <button>
            <img
              style={{ width: 90 }}
              src="https://avn.knu.kg/icon/home.png"
              alt="home"
            />
          </button>
        </Link>

        <button>
          <Link to="/category/Vinagres">Vinagres</Link>
        </button>

        <button>
          <Link to="/category/Encurtidos">Encurtidos</Link>
        </button>

        <button>
          <Link to="/category/Escabeches">Escabeches</Link>
        </button>

        <button>
          <Link to="/category/Yogures">Yogures</Link>
        </button>

        <button>
          <Link to="/category/kefir">Kefir</Link>
        </button>

        <button>
          <Link to="/contact">
            <img
              style={{ width: 90 }}
              src="https://mobirise3gpconverter.com/img/3gpp-converter-contacts.jpg"
              alt="contact"
            />
          </Link>
        </button>
      </nav>
    </>
  );
}