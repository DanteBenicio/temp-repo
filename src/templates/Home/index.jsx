/* eslint-disable react/react-in-jsx-scope */
import './styles.css';
import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { useCallback, useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(4)
  const [searchValue, setSearchValue] = useState("")

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()

    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])

  const handleChange = (event) => {
    const { value } = event.target

    setSearchValue(value)
  }

  const noMorePosts = page + postsPerPage >= allPosts.length
  const filteredPosts = searchValue ?
  allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase())
  })
  : posts

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'))
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}

        <TextInput handleChange={handleChange} searchValue={searchValue}/>
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts}/>}

      {filteredPosts.length === 0 && (
        <p className="search-msg">Posts não encontrado 😥</p>
      )}

      <div className="button-container">
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            loadMorePosts={loadMorePosts}
          />
        )}
      </div>
    </section>
  )
}

export default Home;
