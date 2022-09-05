import { t } from 'i18next'
import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import Swiperfooter from './Swiperfooter'

const Footer = () => {
  const { t } = useTranslation()
  const itemone = [
    { name: t('home') },
    { name: t('restaurant') },
    { name: t('spa') },
    { name: t('conference') },
    { name: t('marriage') },
  ]
  const itemtwo = [
    { name: t('acoomodation') },
    { name: t('activities') },
    { name: t('kids') },
    { name: t('spor') },
  ]
  const itemthree = [
    { name: t('info') },
    { name: t('multimedia') },
    { name: t('personal') },
  ]
  const itemfour = [{ name: 'AWARDS' }, { name: 'CONTACT' }]

  return (
    <>
      <div className="container">
        <div className="row custom-footer">
          <div className="col-lg-2">
            <div>
              <a href="/" className="d-inline-block" target="_blank">
                <img
                  className="img-fluid"
                  src={require('../assets/images/png/logo.png')}
                />
              </a>
            </div>
            <div className="our-hotels">{t('ourHotelsPascalCase')}</div>
          </div>
          <div className="col-lg-10">
            <Swiperfooter />
          </div>
        </div>
      </div>
      <div className=" container-fluid custom-empty"></div>
      <div className="container-fluid custom-row">
        <div className="container">
          <div className="row order-md-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-9  ">
              <ul className="nav text-nowrap">
                {itemone &&
                  itemone.map((i, k) => (
                    <li key={k} className="nav-item">
                      <a className="nav-link" type="button" href="/">
                        {i.name}
                      </a>
                    </li>
                  ))}
              </ul>
              <ul className="nav text-nowrap">
                {itemtwo &&
                  itemtwo.map((s, l) => (
                    <li key={l} className="nav-item ">
                      <a className="nav-link" type="button" href="/">
                        {s.name}
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="custom-divide"></div>
              <ul className="nav">
                {itemthree &&
                  itemthree.map((t, x) => (
                    <li key={x} className="nav-item text-nowrap">
                      <a className="nav-link" type="button" href="/">
                        {t.name}
                      </a>
                    </li>
                  ))}
              </ul>

              <ul className="nav">
                {itemfour &&
                  itemfour.map((f, j) => (
                    <li key={j} className="nav-item text-nowrap">
                      <a className="nav-link" type="button" href="/">
                        {f.name}
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="custom-divide2"></div>
              <div className=" text-nowrap custom-copy">{t('reserved')}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
