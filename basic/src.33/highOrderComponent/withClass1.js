import React, {Component} from 'react';

// const withClass = (WrappedCompoent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedCompoent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedCompoent, className) => {
    return class extends Component{
        render() {
            return (<div className={className}>
                <WrappedCompoent {...this.props}/>
            </div>
            )
        }
    }   
}
export default withClass;
