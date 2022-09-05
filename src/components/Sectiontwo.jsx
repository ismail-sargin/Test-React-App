import React from 'react'
import { useTranslation } from 'react-i18next'

const Sectiontwo = () => {
  const { t } = useTranslation()
  return (
    <section>
      <div className="container section-two">
        <div className="row">
          <div className="col">
            <h1>
              ASTERIA
              <br />
              KREMLIN PALACE
            </h1>
            <div className="sub-title-custom">{t('travelInTime')}</div>
            <div>
              {t('travelInTimeDesc')} <br />
              <br /> {t('travelInTimeDesc2')}
            </div>
          </div>
          <div className="col">
            <img
              className="img custom-image"
              src={require('../assets/images/png/sutterstock.png')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sectiontwo
