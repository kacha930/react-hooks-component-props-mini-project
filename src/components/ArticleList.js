import Article from "./Article";
import blogData from "../data/blog";


function ArticleList(props){
    return(
        <>
        <main>
            {props.blogPosts.map((blogPost)=>(
                <Article key={blogPost.id} blogTitle={blogPost.title} blogDate={blogPost.date} blogPreview={blogPost.preview}
                blogReadTime={blogPost.minutes}/>))}
        </main>
        </>
    )
}

export default ArticleList;