import React, {Component}  from 'react';
import PostItem from './PostItem';



class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Julio Alcantara",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                    id: 1,
                    author: {
                        name: "Diego Fernandes",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário"
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: "Henrique Miranda",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                    id: 1,
                    author: {
                        name: "Julia rodrigues",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário Conteúdo do comentário"
                    }
                ]
            },
        ]
    };

    componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    render(){
        return (
            <div className="PostListDiv">
                {this.state.posts.map(post =>
                        <PostItem
                            key={post.id}
                            postObject={post}
                        />
                        )}
            </div>
        );
    }
}

export default PostList;  