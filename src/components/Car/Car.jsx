import React from "react";
import PropTypes from "prop-types";
import "./Car.css";

class Car extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
    }
    render() {
        console.log(this.props.startPositions)
        return (
            <div className={"carStyle"} style={this.props.startPositions}>
                1
            </div>
        );

    }
}

Car.propTypes = {
    carStyle: PropTypes.string,
    startPositions: PropTypes.object
};

export default Car;
