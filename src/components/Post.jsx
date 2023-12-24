import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState(
        ['Post muito bacana hein!']
    );

    const [newCommentText, setNewCommentText] = useState(''); 

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(comment) {
        const commentsWithoutDeletedOne = comments.filter(c => c !== comment);
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.info}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativetoNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>   
                <strong>Deixe seu Feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um Comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                {comments.map((comment) => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
            </div>
        </article>
    )
}