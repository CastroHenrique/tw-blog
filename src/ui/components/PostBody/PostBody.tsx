/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "@/data/@types/BlogPostInterface";
import style from "./PostBody.module.css";

export default function PostBody({post}: {post: BlogPost}) {
    return (
        <div className={style.postContainer}>
            <h2 className={style.postTitle}>{post.title}</h2>
            <img className={style.postPicture} src={post.picture} alt={post.title}  />
            <div className={style.postContent}>
                {post.content}
            </div>
        </div>
    )
}