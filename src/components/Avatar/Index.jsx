import { useState } from "react"

export default function Avatar (props) {
  const {
    src,
    alt,
    style,
    variant,
    children,
    className,
    color = 'gray',
    size = 'md',
    weight = 'filled',
  } = props

  const [imgError, setImgError] = useState(false)

  const {bgColor, textColor} = setColor(color, weight)
  const {contentSize, textSize} = setSize(size, style)

  return (
    <div
      style={typeof contentSize === "object" ? contentSize : style}
      className={`
        ${setVariant(variant)}
        ${className}
        ${bgColor}
        ${typeof contentSize === "object" ? '' : contentSize}
        inline-block
        overflow-hidden
      `}>
        <div className="w-full h-full flex justify-center items-center relative">
          {!imgError && src &&
          <img
            className="absolute w-full h-full object-cover"
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
          />}
          <p
            className={`${typeof textSize === "object" ? '' : textSize} ${textColor} font-semibold`}
            style={typeof textSize === "object" ? textSize : {}}
          >
            {children}
          </p>
        </div>
    </div>
  )
}

function setVariant (variant) {
  switch (variant) {
    case 'rounded':
      return 'rounded-md'
    case 'square':
      return 'rounded-none'
    default:
      return 'rounded-full'
  }
}

function setColor (color, weight) {
  if(weight === 'subtle') {
    return { bgColor: `bg-${color}-100`, textColor: `text-${color}-900` }
  } else if(weight > 400) {
    return { bgColor: `bg-${color}-${weight}`, textColor: `text-${color}-50` }
  } else if (weight < 500) {
    return { bgColor: `bg-${color}-${weight}`, textColor: `text-${color}-900` }
  }
  
  return { bgColor: `bg-${color}-500`, textColor: `text-${color}-50` }
}

function setSize (size, style) {
  if(size === 'xl') {
    return { contentSize: 'w-16 h-16', textSize: 'text-2xl' }
  } else if(size === 'lg') {
    return { contentSize: 'w-12 h-12', textSize: 'text-lg' }
  } else if(size === 'sm') {
    return { contentSize: 'w-6 h-6', textSize: {fontSize: 9, lineHeight: 12} }
  } else if(typeof size === 'number') {
    return {contentSize: {width: size, height: size, ...style}, textSize: {fontSize: size*3/8, lineHeight: `${size/2}px`}}
  }

  return { contentSize: 'w-8 h-8', textSize: 'text-xs' }
}