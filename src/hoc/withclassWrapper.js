import React , {Component} from 'react';


// const withclass = (WrappedComponent, className) => {
//     return (props) => {
//         return ( 
//         <div className = {className}> 
//             <WrappedComponent {...props}/> 
//         </div>)
//     }
// }



const withclass = (WrappedComponent, className) => {
    return class extends Component {

        render() {
            return (
                <div className = {className}> 
                    <WrappedComponent {...this.props}/> 
                </div>
                )   
        }
    }
}

export default withclass;