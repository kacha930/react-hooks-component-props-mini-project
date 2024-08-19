function About(props) {

    const placeholder = "https://via.placeholder.com/215";

    return (
        <>
        <aside>
            <img src={props.blogImage || placeholder}  alt="blog logo"/>
            <p>{props.aboutBlog}</p>
        </aside>
        </>
    );
}
export default About;