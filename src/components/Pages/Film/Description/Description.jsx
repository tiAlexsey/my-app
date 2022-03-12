import axios from "axios";
import React from "react";
import s from './Description.module.css';

class Description extends React.Component {

    componentDidMount() {
        axios.get("https://localhost:7056/Film/item/1").then(response => {
            this.props.setFilm(response.data.item);
        });
    }

    render() {
        return (
            <div className={s.content}>
                <div className={s.poster}>
                    <img src={this.props.film.url} />
                </div>
                <div className={s.about}>
                    <div className={s.header}>
                        <br />
                        {this.props.film.name}
                    </div>
                    <div className={s.description}>
                        {this.props.film.description}
                    </div>
                    <div className={s.rate}>
                        {this.props.film.rate}
                    </div>
                </div>
            </div>
        )
    }
}

export default Description;