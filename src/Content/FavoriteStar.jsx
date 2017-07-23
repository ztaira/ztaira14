import React, { Component } from 'react';

class FavoriteStar extends Component {
  constructor(props) {
    super(props);
    this.ToggleFavorite = this.ToggleFavorite.bind(this);
    this.state = {
      update: true
    };
  }

  ToggleFavorite(e) {
    e.stopPropagation();
    if (this.IsFavorite()) {
      window.localStorage.removeItem(this.props.projectName);
      this.setState({ update: !this.state.update });
    }
    else {
      window.localStorage.setItem(this.props.projectName, 'is really cool');
      this.setState({ update: !this.state.update });
    }
    this.props.starUpdateFunc(this.props.starFilterFunc);
  }

  IsFavorite() {
    if (window.localStorage.getItem(this.props.projectName) === 'is really cool') {
      return true;
    }
    else {
      return false;
    }
  }

  GetFavoriteStar() {
    if (this.IsFavorite()) {
      return '★';
    }
    else {
      return '☆';
    }
  }

  render() {
    return (
      <span className="favorite" onClick={this.ToggleFavorite}>
        {this.GetFavoriteStar()}
      </span>
    );
  }
}

export default FavoriteStar;
