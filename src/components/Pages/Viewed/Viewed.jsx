import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";

const Viewed = (props) => {
    return (
        <div>
            Viewed
        </div>
    )
}

export default withAuthRedirect(Viewed);