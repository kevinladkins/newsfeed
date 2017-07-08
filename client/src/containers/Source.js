import React, {Component} from 'react'


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
      return {background: 'yellow'}
    } else {
      return {background: 'white'}
    }
  }


  render() {
    return(
      <div className="source" onClick={this.clickDiv} style={this.setStyle()}>
        <h3>{this.props.source.name}</h3>
        <p>{this.props.source.description}</p>
      </div>
    )
  }
}

export default Source
