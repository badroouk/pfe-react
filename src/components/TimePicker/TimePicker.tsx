import React, { Component } from 'react'

import {DatePicker} from 'chakra-ui-date-input'
import { Box } from '@chakra-ui/react'


const Example = () => {
    
 
    return <DatePicker
              placeholder='Date picker placeholder'
              name='date'
              onChange={(date: string) => console.log(date)}
            />
  
}
export default Example;