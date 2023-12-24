import styles from "./Avatar.module.css";

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
}

export function Avatar({src, hasBorder = true}: AvatarProps) {
    return (
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        />
    );
}