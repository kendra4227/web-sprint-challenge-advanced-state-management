import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfDisplay from "./SmurfDisplay";
import { getSmurfs } from "../actions";

const Smurf = ({getSmurfs, isFetching, smurfData = [], error}) => {

    useEffect(() => {
        getSmurfs();
    }, []);

    if (isFetching) {
        return <h3>Loading...</h3>;
    }
    
    return (
        <div className= "smurfDisplay">
            
            <h1>Smurfs</h1>
            {smurfData && smurfData.map(info =>{
                    console.log(info)
                return (<SmurfDisplay key={info.id} info={info}> </SmurfDisplay >)
            }
            )}
        </div>
    );
};

const mapStateToProps = state => {
    //console.log(state.smurfData)
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs })(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.