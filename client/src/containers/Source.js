import React, {Component} from 'react'

import SourceCard from '../components/SourceCard'


class Source extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: props.source.selected
    }
    this.setStyle = this.setStyle.bind(this)
    this.clickDiv = this.clickDiv.bind(this)
  }


  //Adds already-selected sources to selectedSources Set
  componentWillMount() {
    if (this.state.selected) {
      this.props.toggleSource(this.props.source.id)
    }
  }

  clickDiv() {
      this.setState({
        selected: !this.state.selected
      })
      this.props.toggleSource(this.props.source.id)
    }

  setStyle() {
    if (this.state.selected === true) {
      return {background: '#ffe6cc'}
    } else {
      return {background: 'white'}
    }
  }


  render() {
    return(
      <SourceCard source={this.props.source} clickDiv={this.clickDiv} setStyle={this.setStyle} />
    )
  }
}

export default Source
