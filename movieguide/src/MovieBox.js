import React from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import { FAVOURITED, UNFAVOURITED } from './actions';

function MovieBox({ movie, favourite, onFavourite, onUnFavourite }) {
  function onChange(checked) {
    if (checked) {
      onFavourite(movie.title);
    } else{
      onUnFavourite(movie.title);
    }
  }

  return (
    <div className="h4 mt3 pa3 flex flex-column justify-between ba b--dashed">
      <h3 className="mt0 mb3">{movie.title}</h3>
      <Checkbox
        name="addToFavourite"
        id="addToFavourite"
        label="Favourite"
        checked={favourite}
        onChange={onChange}
      />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    favourite: state.favourites.includes(ownProps.movie.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFavourite: movieId => dispatch({ type: FAVOURITED, movieId }),
    onUnFavourite: movieId => dispatch({ type: UNFAVOURITED, movieId })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBox);
