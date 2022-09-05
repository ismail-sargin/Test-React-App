import React from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const item = [
    { name: t('acoomodation') },
    { name: t('restaurant') },
    { name: t('activities') },
    { name: t('spa') },
    { name: t('conference') },
    { name: t('spor') },
  ]
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            className="img-fluid"
            src={require('../assets/images/png/logo.png')}
          />
        </a>
        <a className="custombox" href="#" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="col-xl-auto custom-col">
            <ul className=" multi-lang navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t('choose')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li
                    onClick={() => {
                      i18n.changeLanguage('en')
                    }}
                  >
                    <a className="dropdown-item" href="#">
                      EN
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      i18n.changeLanguage('tr')
                    }}
                  >
                    <a className="dropdown-item" href="#">
                      TR
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t('ourHotels')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="custom-menu  col-xl-auto vector">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {item &&
                item.map((i, k) => (
                  <li key={k} className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      {i.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
