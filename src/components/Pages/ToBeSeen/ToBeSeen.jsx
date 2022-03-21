import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";
import s from './ToBeSeen.module.css';

const ToBeSeen = (props) => {
    return (
        <div>
            To Be Seen
        </div>
    )
}



export default compose(
    withAuthRedirect
)(ToBeSeen);