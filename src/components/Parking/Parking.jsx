import React from "react";
import PropTypes from "prop-types";
import Car from "../Car/Car";
import "./Parking.css";

class Parking extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            carPositions:[]
        };
        }
    componentDidMount() {
        const cars = [
            {gridRowStart:1,gridRowEnd:5,gridColumnStart:3,gridColumnEnd:5},
            {gridRowStart:4,gridRowEnd:7,gridColumnStart:8,gridColumnEnd:10}
        ];
        this.setState(
            {carPositions:cars}
        );


    }

    render() {
        return (
            <div className={this.props.tableStyle}>
                {
                    this.state.carPositions.map((car,index)=> {
                        return <Car key={index} startPositions={car}/>;
                    })
                }
            </div>
        );

    // const {liList}= props;
    // if(liList&&Array.isArray(liList)&&liList.length>0)
    //     return <ul>{liList.map((li, index) => <li key={index}>{li}</li>)}</ul>
    // return 'LOHOHO'
    }
}

Parking.propTypes = {
    tableStyle: PropTypes.string
};

export default Parking;
