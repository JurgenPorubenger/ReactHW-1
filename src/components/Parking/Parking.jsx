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
        function setCarSize(start,val) {
            return  start+val;
        }
        const cars = [
            {gridRowStart:1,gridRowEnd:null,gridColumnStart:3,gridColumnEnd:null},
            {gridRowStart:4,gridRowEnd:null,gridColumnStart:8,gridColumnEnd:null},
            {gridRowStart:8,gridRowEnd:null,gridColumnStart:13,gridColumnEnd:null}
        ];
        cars.forEach(car=>{
            car.gridRowEnd=setCarSize.apply(car,[car.gridRowStart,5]);
            car.gridColumnEnd=setCarSize.apply(car,[car.gridColumnStart,2]);
        });

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
    }
}

Parking.propTypes = {
    tableStyle: PropTypes.string
};

export default Parking;
