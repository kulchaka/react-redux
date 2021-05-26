import Post from './Post'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import SpinnerLoader from "./SpinnerLoader";

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.loading.loading)

  if (loading) {
    return <SpinnerLoader/>
  }

  if (!posts.length) {
    return <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
    >Load</button>
  }
  return posts.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts
