import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";

const Viewed = (props) => {
    return (
        <div>
            Viewed
        </div>
    )
}

export default compose(
    withAuthRedirect
)(Viewed);