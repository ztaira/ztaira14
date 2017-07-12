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
    console.log('hello');
    e.stopPropagation();
    if (this.IsFavorite()) {
      localStorage.removeItem(this.props.projectName);
      this.setState({ update: !this.state.update });
    }
    else {
      localStorage.setItem(this.props.projectName, 'is really cool');
      this.setState({ update: !this.state.update });
    }
  }

  IsFavorite() {
    if (localStorage.getItem(this.props.projectName) === 'is really cool') {
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
