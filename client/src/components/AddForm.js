import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addNewSmurf} from '../actions'



const AddForm = props => {
    const [smurf, setSmurf] = useState({ name: "", position: "", nickname: "", description:"" })
   
    const handleChanges = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value });
       // console.log("handleChanges function: ", event.target.name, event.target.value)
       
    };

    

    const handleSubmit = event => {
        event.preventDefault();
        //console.log(smurf);
        if (smurf.name === "" || smurf.nickname === "" || smurf.position === "" ) {
            console.log("missing data") 
             return alert("Must fill in all fields")
        }else{
            props.addNewSmurf(smurf);
        setSmurf({ name: "", nickname: "", position: "", description: "" })
        }
    
        };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChanges}
                    value={smurf.name}
                />
                
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    onChange={handleChanges}
                    value={smurf.position}
                />
                
                <input
                    type="text"
                    name="nickname"
                    placeholder="Nickname"
                    onChange={handleChanges}
                    value={smurf.nickname}
                />
                
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleChanges}
                    value={smurf.description}
                />
                
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isPushing: state.isPushing,
        error: state.error
    };
};

export default connect(mapStateToProps, { addNewSmurf })(AddForm);
//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.