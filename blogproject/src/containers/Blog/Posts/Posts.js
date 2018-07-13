import React, { Component } from 'react';
import axios from '../../../axios'

import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                const posts = result.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Me'
                    }
                });
                this.setState({posts: updatedPosts})
                // console.log(result);
            })
            .catch(err => {
                // this.setState({error: true, errorMessage: err});
                console.log(err);
            });
    };

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }


    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/' + id});
    }


    render () {
        let posts = <p style={{textAlign:'center'}}>Something went wrong.</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                        // <Link to={'/' + post.id} key={post.id}>
                            <Post 
                            title={post.title} 
                            author={post.author}
                            key={post.id}
                            clicked={()=> this.postSelectedHandler(post.id)} />
                        //  </Link>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;
