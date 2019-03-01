import React from 'react'

interface Flash {
  id: number,
  text: string
}
export interface Props {
  removeFlash(id: number): void,
  flashes: Flash[],
}

const FlashList = ({ flashes, removeFlash }: Props) => {
  if (!(flashes.length > 0)) { return null }

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

export default FlashList

