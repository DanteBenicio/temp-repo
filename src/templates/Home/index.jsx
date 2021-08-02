/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
import './styles.css';
import { Component } from 'react';
import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: ""
  }
  
  async componentDidMount() {
    await this.showPosts()
  }

  showPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts()

    return this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos 
    })
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({
      posts,
      page: nextPage
    })
  }

  handleChange = (event) => {
    const { value } = event.target

    this.setState({ searchValue: value})
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length
    const filteredPosts = !!searchValue ? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts
    
    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}
          
          <TextInput handleChange={this.handleChange} searchValue={searchValue}/>
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p className="search-msg">Posts não encontrado 😥</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button 
              disabled={noMorePosts} 
              loadMorePosts={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    )
  }
}

export default Home;