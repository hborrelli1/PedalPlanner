import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Input } from 'semantic-ui-react'
import InputIcon from '../../components/InputIcon/InputIcon';
import SearchButton from '../../components/SearchButton/SearchButton';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }

    this.handleTrailClick = this.handleTrailClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleTrailClick = (event) => {
    event.preventDefault();
    this.setState({ search: '' });
  }

  render () {
    const { localTrails } = this.props;

    let matchingTrails;
    let trailButtons;
    let searchRegex = new RegExp(this.state.search, 'i');
    let paddingClass = this.state.search ? 'js-search' : '';

    if (this.state.search) {
      matchingTrails = localTrails.filter(trail => {
        return (trail.name.match(searchRegex)) || (trail.summary.match(searchRegex)) || (trail.location.match(searchRegex));
      })

      trailButtons = matchingTrails.map(trail => (
        <SearchButton
          key={trail.id}
          trail={trail}
          history={this.props.history}
        />
      ));

      if (trailButtons.length < 1) {
        trailButtons = (<p>There are no trails that match the term '{this.state.search}'</p>);
      }
    }

    return (
      <form
        className="search-wrapper"
        onSubmit={this.handleTrailClick}
      >
        <Input
          icon='search'
          placeholder='Find a trail for your next ride...'
          value={this.state.search}
          onChange={this.handleChange}
        />

        <div className={"matching-trails " + paddingClass}>
          {trailButtons}
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  localTrails: state.localTrails,
})

export default connect(mapStateToProps,null)(SearchBar);
