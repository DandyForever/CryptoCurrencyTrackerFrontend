import React from 'react'
import style from './MyCurrencies.module.css'

const MyCurrencies = (props) => {
  return (
      <div className={style.myCurrencies}>
          <div>
              My first Currency
          </div>
          <div>
              My Second Currency
          </div>
          <div>
              My Third Currency
          </div>
          <div>
              My Fourth Currency
          </div>
          <div>
              My Fifth Currency
          </div>
      </div>
  )
};


export default MyCurrencies