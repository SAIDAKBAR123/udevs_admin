

export default function Badge ({
  style,
  children,
  max = 100,
  className,
  badgeContent,
  color = 'red',
  overlap = 'square',
  anchorOrigin = {}
}) {

  const { positionClass, positionStyle } = setPosition(anchorOrigin, overlap)

  return (
    <div style={{lineHeight: 0, ...style}} className={`relative inline-block  ${className}`}>
      <div
        style={{...positionStyle, minWidth: 12, minHeight: 12, fontSize: 12, lineHeight: '14px', padding: '0 3px'}}
        className={`
          z-10
          flex
          absolute
          rounded-full
          border-2
          border-white
          text-white
          items-center
          justify-center
          bg-${color}-600
          ${positionClass}
        `}
      >
        {setContent(badgeContent, max)}
      </div>
      {children}
    </div>
  )
}

function setPosition (position, overlap) {
  const {x, y} = position

  if(x === "left" && y === "top") 
    return {
      positionClass: 'top-0 left-0',
      positionStyle: {transform: overlap === 'circle' ? 'translate(-25%, -25%)' : 'translate(-50%, -50%)' }
    }
  if(x === "left" && y === "bottom") 
    return {
      positionClass: 'bottom-0 left-0',
      positionStyle: {transform: overlap === 'circle' ? 'translate(-25%, 25%)' : 'translate(-50%, 50%)' }
    }
  if(x === "right" && y === "bottom") 
    return {
      positionClass: 'bottom-0 right-0',
      positionStyle: {transform: overlap === 'circle' ? 'translate(25%, 25%)' : 'translate(50%, 50%)' }
    }

  return {
    positionClass: 'top-0 right-0',
    positionStyle: {transform: overlap === 'circle' ? 'translate(25%, -25%)' : 'translate(50%, -50%)' }
  }
}

function setContent (badgeContent, max) {
  if(typeof badgeContent === 'number' || typeof badgeContent === 'string') {
    if(badgeContent > max) return max - 1 + '+'
    return badgeContent
  }

  return ''
}