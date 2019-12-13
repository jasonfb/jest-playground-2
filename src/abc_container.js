import React from 'react'


import DefThing from './def_thing'
import styled from 'styled-components'


const StyledAbcContainer = styled.div`
  display: block;
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px red;
  padding: 15px;
`

class AbcContainer extends React.Component {

  constructor(props) {
    super()
    this.def_thing_ref = React.createRef()
    this.abc_ref = React.createRef()
    this.state = {
      visible: false,
      message: "wait for it..."
    }

    console.log("constructor.....")

  }

  componentDidMount() {
    setTimeout(() => {
      console.log("TIMEOUT componentDidMount... this= ", this)
      if (this.def_thing_ref.current) {
        let rect = this.def_thing_ref.current.getBoundingClientRect()
        console.log("the obejct's rect is ", rect)
        this.setState({
          visible: true,
          message: "the position of the box is " + rect.x + "," + rect.y +
            "....I know this because the ref for this.def_thing_ref.current is populated"
        })
      } else {
        console.log(".....***** no current ref object********************")
      }
    }, 2500)
  }


  render() {
    console.log("render.....")

    const {visible, message} = this.state

    return (
      <StyledAbcContainer ref={this.abc_ref} data-testid="abc-container">
        StyledAbcContainer
        <DefThing ref={this.def_thing_ref} visible={visible}/>

        {message}
      </StyledAbcContainer>
    )
  }

}


export default AbcContainer