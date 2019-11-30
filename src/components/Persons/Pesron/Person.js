//this component is stateless becuase doesn't contains internal state managment
import React from 'react';
import styled from 'styled-components';
import classes from './Person.css'

// import './Person.css';
// import Radium from 'radium';

// const StyledId = styled.div`
//     width: 30%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 20px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: '450px'
//     }
// `;

const person = (props) => {
    // return <p>I'm a person and I am {Math.floor(Math.random() * 30)}</p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        <div className={classes.Person} /*style={style}*/>
         {/* <StyledId> */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/> 
            {/* It simply means that the component will display whatever is included in between the opening and closing tags while invoking the component. The component would usually be invoked from App component. */}
        {/* </StyledId> */}
        </div>
    )
};

// export default Radium(person);    
export default person;    