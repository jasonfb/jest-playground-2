


import React, {Component} from 'react'
import styled from "styled-components";

const StyledDefThing = styled.div`
  position: relative;
  height: 110px; 
  width: 136px;
  border: solid 1px green;
  display: block;
`


class DefThing extends React.Component {
  render () {
    const {selfRef, visible} = this.props
    return (
      <StyledDefThing ref={selfRef} style={{'visibility': visible ? 'visible' : 'hidden'}}>
        StyledDefThing
      </StyledDefThing>
    )
  }
}



export default React.forwardRef((props, ref) => <DefThing {...props} selfRef={ref}  />)

