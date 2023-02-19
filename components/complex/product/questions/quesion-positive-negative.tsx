import { GlobalConstants } from '@/components/abstract/global'
import { Badge, Group } from '@mantine/core'
import React, { Component } from 'react'

export default class QuestionPositiveNegative extends Component {
  render() {
    return (
      <div className='QuestionPositiveNegative'>


<ul style={{listStyle:'none'}}>
    <li  > 
   <Group>
    <div  style={{fontSize:15,color:'green'}}>+</div>
    <div>کارآمد</div>
   </Group>
    </li>
 <li  > 
   <Group>
    <div  style={{fontSize:15,color:'red'}}>-</div>
    <div>دوربین معمولی

</div>
   </Group>
    </li>

</ul>


      </div>    
      )
  }
}
