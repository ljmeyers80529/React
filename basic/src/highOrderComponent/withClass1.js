import React, {Component} from 'react';

// const withClass = (WrappedCompoent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedCompoent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedCompoent, className) => {
    const WithClass = class extends Component{
        render() {
            return (<div className={className}>
                <WrappedCompoent ref={this.props.forwardedRef} {...this.props}/>
            </div>
            )
        }
    }   
    return React.forwardRef((props, ref)=>{
        return <WithClass {...props} forwardedRef = {ref} />
    })
}
export default withClass;
