import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    static defaultProps = {
        categories: ['Web Design', 'Web Developement', 'Mobel Developement']
    };

    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required.')
        } else {
            this.setState({ // pass to the main component
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, () => {
                // console.log(this.state);
                this.props.addProject(this.state.newProject)
            })
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key = { category }
            value = { category } > { category } < /option>
        })

        return ( < div >
            <
            h3 > Add Project < /h3> <
            form onSubmit = { this.handleSubmit.bind(this) } >
            <
            div >
            <
            label > Title < /label> <
            input type = "text"
            ref = "title" / >
            <
            br / >
            <
            label > Category < /label> <
            select ref = "category" > { categoryOptions } < /select> < /
            div > <
            br / >
            <
            input type = "submit"
            value = "submit" / >
            <
            br / >
            <
            /form > < /
            div >
        );
    }
}

export default AddProject;