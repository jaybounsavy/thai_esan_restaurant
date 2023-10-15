import React from 'react';
import Settings from '../Settings';

export default class MovieImage extends React.Component {

  constructor(props) {
    super(props);
  } 

  render() {

    const image = `${ Settings.avatar.baseUrl }/${ this.props.photo }`;

    //const photo1 = "avatar.jpg";
    //const photo1 = this.props.photo;

    const photo = "media/" + this.props.photo;


    return(

      <img src={ photo } alt="Girl in a jacket" width="300" ></img>
    );
  }
}