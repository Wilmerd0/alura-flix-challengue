import styles from "./Footer.module.css"
import logo from "./logo.png"
import { FaGithub } from "react-icons/fa";


function PieDePagina() {
    return (
        <footer className={styles.footerContainer}>
            <img src={logo} alt="Logo de la empresa" className={styles.logo} />

            <div className={styles.links}>
                <li>
                    <a href="https://github.com/Wilmerd0" target="_blank">
                        <FaGithub className={styles.icons} />
                    </a>
                </li>
            </div>
            <div className={styles.textContainer}>
                <p>Desarrollado por Wilmer Diaz</p>
                <p>2024</p>
            </div>

        </footer>
    )

}

export default PieDePagina