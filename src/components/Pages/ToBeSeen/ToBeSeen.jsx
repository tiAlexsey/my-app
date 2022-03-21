import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";
import s from './ToBeSeen.module.css';

const ToBeSeen = (props) => {
    return (
        <div>
            To Be Seen
        </div>
    )
}

export default withAuthRedirect(ToBeSeen);