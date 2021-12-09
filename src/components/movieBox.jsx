import React from "react";

class MovieBox extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <section className="movieBox">
                <section className="movieBox__left">
                    <img src={this.props.movie.poster} alt="poster" />
                </section>
                <section className="movieBox__right mr">
                    <article className="mr__title">{this.props.movie.title}</article>
                    <article className="mr__score">🐰{this.props.movie.score}</article>
                    <article className="mr__summary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia beatae amet cum animi. Eos voluptatem porro corporis cupiditate dolores inventore, 
                        quod nulla sapiente architecto laboriosam, doloremque ipsa qui quia eveniet?
                    </article>
                </section>    
            </section>
        );
    };
};

export default MovieBox;