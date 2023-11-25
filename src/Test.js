import React, { useContext } from 'react'
import { myContext } from '.'


export const Test = () => {
    var {color,color2} = useContext(myContext)
    // color = "blue"
    console.log(color)
    console.log(color2)

  return (
    <div>

    </div>
  )
}
