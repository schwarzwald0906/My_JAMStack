import styles from 'styles/postCategories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function PostCategories({ categories }) {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} className={'item'} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        <li key={categories.slug}>
          <Link legacyBehavior href={`/blog/category/${categories.slug}`}>
            <a>{categories.name}</a>
          </Link>
        </li>

        {/*
        categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link legacyBehavior href={`/blog/category/${slug}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  )
}
