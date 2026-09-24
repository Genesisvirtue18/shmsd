import { ImageResponse } from 'next/og'

export const size = {
  width: 512,
  height: 512,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #8b1e1e 0%, #c62828 100%)',
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 92,
            background: 'rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 24px 80px rgba(0,0,0,0.22)',
          }}
        >
          <div
          style={{
            position: 'relative',
            width: 164,
            height: 164,
            borderRadius: 999,
            background: '#fff',
            display: 'flex',
          }}
        >
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 42,
                height: 132,
                transform: 'translate(-50%, -50%)',
                borderRadius: 24,
                background: '#c62828',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 132,
                height: 42,
                transform: 'translate(-50%, -50%)',
                borderRadius: 24,
                background: '#c62828',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: -28,
                transform: 'translateX(-50%)',
                color: '#fff',
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              S
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
