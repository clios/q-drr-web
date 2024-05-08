import './TotalCard.css'

import React from 'react'

function TotalCard() {
  return (
    <div className="fsaltc">
      <img className="fsaltc-img" src={require('../../../assets/pgq_logo.png')} />
      <p className="fsaltc-1">Quirino Province</p>
      <p className="fsaltc-2">Total Flood Prone Area</p>
      <p className="fsaltc-3">2,077</p>
      <p>Hectares</p>
    </div>
  )
}

export default TotalCard
