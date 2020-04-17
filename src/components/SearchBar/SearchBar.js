import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Input } from 'semantic-ui-react'
import InputIcon from '../InputIcon/InputIcon';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  render () {
    const { localTrails } = this.props;

    let matchingTrails;
    let trailButtons;
    let searchRegex = new RegExp(this.state.search, 'i');

    if (this.state.search) {
      matchingTrails = localTrails.filter(trail => {
        return (trail.name.match(searchRegex)) || (trail.summary.match(searchRegex)) || (trail.location.match(searchRegex));
      })

      trailButtons = matchingTrails.map(trail => {
        return <button key={trail.id}>{trail.difficulty} | {trail.name} | {trail.location}</button>
      })
    }

    return (
      <div className="search-wrapper">
        <Input
          icon='search'
          placeholder='Find a trail for your next ride...'
          value={this.state.search}
          onChange={this.handleChange}
        />

        <div className="matching-trails">
          {trailButtons}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  localTrails: state.localTrails,
})

export default connect(mapStateToProps,null)(SearchBar);
