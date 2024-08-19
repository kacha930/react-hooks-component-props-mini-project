function Article(props){

    const defaultDate = "January 1, 1970";
    
    return(
        <>
        <article>
            <h3>{props.blogTitle}</h3>
            <small>{props.blogDate || defaultDate}</small>
            <p>{props.blogPreview}</p>
        </article>
        </>
    )
}

export default Article;