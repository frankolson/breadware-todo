import React from 'react'
import PropTypes from 'prop-types'

const FlashList = ({ flashes, removeFlash }) => {
  if (!flashes.length > 0) { return null }

  return (
    <div className="container my-2">
      {flashes.map(flash => (
        <div key={flash.id} className="alert alert-dismissible alert-danger">
          {flash.text}

          <button
            type="button"
            className="close"
            onClick={() => removeFlash(flash.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ))}
    </div>
  )
}

FlashList.propTypes = {
  removeFlash: PropTypes.func.isRequired,
  flashes: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string.isRequired })
  ).isRequired
}

export default FlashList

