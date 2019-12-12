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
    this.state = {
      visible: false,
      message: "wait for it..."
    }

  }

  componentDidMount() {
    setTimeout(() => {
      console.log("this.def_thing_ref= ", this.def_thing_ref)
      let rect = this.def_thing_ref.current.getBoundingClientRect()
      console.log("the obejct's rect is ", rect)
      this.setState({visible: true,
          message: "the position of the box is " + rect.x + "," + rect.y +
          "I know this because the ref for this.def_thing_ref.current is populated"
      })


    }, 2500)
  }


  render() {
    const {visible, message} = this.state

    return (
      <StyledAbcContainer data-testid="abc-container">
        StyledAbcContainer
        <DefThing ref={this.def_thing_ref} visible={visible}/>

        {message}
      </StyledAbcContainer>
    )
  }

}


export default AbcContainer