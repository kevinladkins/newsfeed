import React, {Component} from 'react'


class Source extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: props.selected
    }
  }

  render() {
    return(
      <div className="source" >
        <h3>{this.props.source.name}</h3>
        <p>{this.props.source.description}</p>
        <input type="checkbox" className="hidden" name={this.props.source.name} value={this.props.source.source_id} checked={this.state.selected} />
      </div>
    )
  }
}

export default Source
