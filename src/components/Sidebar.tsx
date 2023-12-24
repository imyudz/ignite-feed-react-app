import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1596746426867-0ffe482ff48b?q=60&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://media.licdn.com/dms/image/D4D03AQGfN5-VH-YCFg/profile-displayphoto-shrink_800_800/0/1697344284179?e=1704931200&v=beta&t=eBXRxQNmWr-NuXlg5KMBKicx6mmb09KAPkI_tfYOYy0"
                />
                <strong>Victor</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    );
}