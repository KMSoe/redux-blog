import { useState } from "react";
import { useDispatch } from "react-redux";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const save = () => {

    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={save}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={title}
                    onChange={onContentChange}
                />
                <button type="button">Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;