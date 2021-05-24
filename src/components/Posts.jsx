import Post from './Post'

const Posts = ({posts}) => {
  if(!posts.length) {
    return <p>No Posts</p>
  }
  return posts.map(post => <Post post={post} key={post}/>)
}

export default Posts
