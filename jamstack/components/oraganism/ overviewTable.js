import styles from 'styles/overviewTable.module.css'

export default function OverviewTable() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>施術院</th>
            <td>{['FLUXUS LOCUS', <br />, 'フラクサス ローカス']}</td>
          </tr>
          <tr>
            <th>営業時間 </th>
            <td>9：30 - 20：00</td>
          </tr>
          <tr>
            <th>定休日</th>
            <td>水曜日</td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>070-8351-6230</td>
          </tr>
          <tr>
            <th>最寄り駅</th>
            <td>京浜急行線桜木町駅南口</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>〒231-0011 神奈川県横浜市中区太田町6丁目86 Opa Rivage 705 </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
