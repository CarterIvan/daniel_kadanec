import styles from './ServiceMaterials.module.css'

function ServiceMaterials({ quality }) {
  return (
    <section className={`section ${styles.materials}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Materiály</span>
          <h2 className={styles.heading}>Materiály a kvalita spracovania</h2>
        </div>

        <div className={styles.list}>
          {quality.map((item) => (
            <div className={styles.row} key={item.label}>
              <span className={styles.label}>{item.label}</span>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceMaterials
