import React from "react";
import s from './Description.module.css';

const Description = (props) => {
    return (
        <div>
            <div className={s.content}>
                <div className={s.poster}>
                    <img src={props.description.poster} />
                </div>
                <div className={s.about}>
                    <div className={s.header}>
                        {props.description.name}
                    </div>
                    <div className={s.description}>
                        {props.description.text}
                    </div>
                    <div className={s.rate}>
                        {props.description.rate}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;