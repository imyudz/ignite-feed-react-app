import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: ""


export function Post({author, content, publishedAt}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
                    />
                    <div className={styles.info}>
                        <strong>Jaime Rodrigues</strong>
                        <span>UI Designer</span>
                    </div>
                </div>

                <time title='10 de Novembro às 21:35h' dateTime='2023-11-10 21:35:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href=''>#nlw</a>{" "}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>   
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder='Deixe um Comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                <Comment />
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}