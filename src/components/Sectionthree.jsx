import React from 'react'
import { useTranslation } from 'react-i18next'

const Sectionthree = () => {
  const { t } = useTranslation()
  return (
    <section className="section-three">
      <div className="container">
        <div className="col m-auto">
          <div className="display-3 text-center custom-display-title">
            {t('specialTo')}
          </div>
          <br />
          <div className="sub-custom text-center">{t('clickTo')}</div>
          <br />
          <div className="description-custom">{t('specialToDesc')}</div>

          <div className="article">
            <img
              className="img-fluid custom-img"
              src={require('../assets/images/png/special.png')}
            />
            <div className="custom-grid">
              <div className="text-left">
                <div className="custom-text-style ">{t('activities')}</div>
                <div className="custom-subtitle-style">{t('detail')}</div>
              </div>
              <div className="d-flex">
                <img
                  className="custom-arrow"
                  src={require('../assets/images/png/arrow.png')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sectionthree
