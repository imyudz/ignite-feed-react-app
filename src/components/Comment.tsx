import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeCount() {
        setLikeCount(likeCount + 1);
    }
    
    return (
        <div className={styles.comment}>
            <Avatar
                src="https://media.licdn.com/dms/image/D4D03AQGfN5-VH-YCFg/profile-displayphoto-shrink_800_800/0/1697344284179?e=1704931200&v=beta&t=eBXRxQNmWr-NuXlg5KMBKicx6mmb09KAPkI_tfYOYy0"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor (você)</strong>
                            <time title='10 de Novembro às 21:35h' dateTime='2023-11-10 21:35:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}