import React from 'react'

// function Welcome(props) {
//     return<h1>Hello, {props.name}</h1>
// }

// const Welcome = ({name}) => (
//     <h1>Hello, {name}!</h1>
// );

class Welcome extends React.Component {
    render() {
        const { name, children } = this.props;
        return <h1>Hello, {children}!</h1>;
    }
}

export default Welcome;