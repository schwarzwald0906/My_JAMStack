import React from 'react'

const Square = ({ digit }) => {
  const size = 26
  const overlap = 9

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        style={{
          position: 'absolute',
          top: overlap,
          left: overlap,
          width: size,
          height: size,
          backgroundColor: 'var(--brown)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size,
          height: size,
          backgroundColor: 'white',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: overlap,
          left: overlap,
          width: size - overlap,
          height: size - overlap,
          backgroundColor: 'white',
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            fontSize: size - overlap + 3,
            fontWeight: 'bold',
            color: 'var(--brown)',
            fontFamily: 'Agenda-Thin',
            textAlign: 'center',
          }}
        >
          {digit}
        </div>
      </div>
    </div>
  )
}

export default Square
