import React from 'react'
import Button from '@material-ui/core/Button';
import Mailto from 'react-protected-mailto'
 
export default () => (
  <p>
    <Button>
        <Mailto email='peterydell@gmail.com'/>
    </Button>
  </p>
)