import React, {Component} from 'react'


class Source extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: props.source.selected
    }
    this.clickCheckbox = this.clickCheckbox.bind(this)
    this.setStyle = this.setStyle.bind(this)
    this.clickDiv = this.clickDiv.bind(this)
  }


  //Adds already-selected sources to selectedSources Set
  componentWillMount() {
    if (this.state.selected) {
      this.props.toggleSource(this.props.source.id)
    }
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
      this.props.toggleSource(this.props.source.id)
    }



  setStyle() {
    if (this.state.selected === true) {
      return {background: 'yellow'}
    } else {
      return {background: 'white'}
    }
  }

  clickDiv() {
    document.getElementById(this.props.source.id).click();
  }

  render() {
    var style = {background: 'yellow'}
    return(
      <div className="source" onClick={this.clickDiv} style={this.setStyle()}>
        <h3>{this.props.source.name}</h3>
        <p>{this.props.source.description}</p>
        <input type="checkbox"  id={this.props.source.id} name={this.props.source.name} value={this.props.source.id} checked={this.state.selected} className="hidden" onChange={this.clickCheckbox}/>
      </div>
    )
  }
}

export default Source
