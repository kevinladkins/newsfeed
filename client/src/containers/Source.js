import React, {Component} from 'react'


class Source extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: props.source.selected
    }
    this.clickCheckbox = this.clickCheckbox.bind(this)
    this.setStyle = this.setStyle.bind(this)
  }

  clickCheckbox() {
    this.state.selected === true ?
      this.setState({
        selected: false
      })
       :
        this.setState({
          selected: true
        })

    }

  

  setStyle() {
    if (this.state.selected === true) {
      return {background: 'yellow'}
    } else {
      return {background: 'white'}
    }
  }

  render() {
    var style = {background: 'yellow'}
    return(
      <div className="source" onClick={this.clickCheckbox} style={this.setStyle()}>
        <h3>{this.props.source.name}</h3>
        <p>{this.props.source.description}</p>
        <input type="checkbox"  id={this.props.source.id} name={this.props.source.name} value={this.props.source.id} checked={this.state.selected} className="hidden" onChange={this.props.toggleSource(this.props.source.id)}/>
      </div>
    )
  }
}

export default Source
