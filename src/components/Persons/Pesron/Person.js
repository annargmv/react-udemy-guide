//this component is stateless becuase doesn't contains internal state managment
import React, {Component} from 'react';
import Aux from '../../../hoc/Aux'
import styled from 'styled-components';
import classes from './Person.css';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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

class Person extends Component {
    // return <p>I'm a person and I am {Math.floor(Math.random() * 30)}</p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authentucated</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                 {/* <div className={classes.Person}> */}
                    {/* <StyledId> */}  
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input
                        // ref={(inputElem) => {this.inputElement = inputElem}}
                        ref={this.inputElementRef}
                        key="1a" 
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/> 
                     {/* It simply means that the component will display whatever is included in between the opening and closing tags while invoking the component. The component would usually be invoked from App component. */}
             {/* </StyledId> */}
                 {/* </div> */}
            </Aux>
        );
    }
};

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// export default Radium(person);    
export default WithClass(Person, classes.Person);    