import { connect } from "react-redux";
import Description from "./Description";


let mapStateToProps = (state) => {
    return {
        description: state.filmPage.description
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const DescriptionConainer = connect(mapStateToProps, mapDispatchToProps)(Description);


export default DescriptionConainer;