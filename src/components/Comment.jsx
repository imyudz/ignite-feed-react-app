import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
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

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}