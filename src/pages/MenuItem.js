
import React from 'react';

import MovieImage from './FoodImage';


export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {

    const photo = this.props.photo;
    const description = this.props.description;    
    const name = this.props.name;
    const price = this.props.price;


    //const title = this.props.movie.title;
    //const description = this.props.movie.description;

    //let currentRating = this.props.movie.rating;

 



    return(
      <div className="card" style={ { borderRadius: '15px' } }>
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <MovieImage photo={ photo } />
          </div>
          <h4 className="mb-2">{ name }</h4>
          <p className="mb-4">{ description }</p>
          <h4 className="mb-2">{ price }</h4>
          <p className="text-muted mb-4">{ '' } </p>
  



        </div>
      </div>
    );
  }
}