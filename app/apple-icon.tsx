import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#c62828',
          borderRadius: 40,
        }}
      >
        <div
        style={{
          width: 108,
          height: 108,
          borderRadius: 999,
          background: '#fff',
          position: 'relative',
          display: 'flex',
        }}
      >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 30,
              height: 88,
              transform: 'translate(-50%, -50%)',
              borderRadius: 20,
              background: '#c62828',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 88,
              height: 30,
              transform: 'translate(-50%, -50%)',
              borderRadius: 20,
              background: '#c62828',
            }}
          />
        </div>
      </div>
    ),
    size,
  )
}
