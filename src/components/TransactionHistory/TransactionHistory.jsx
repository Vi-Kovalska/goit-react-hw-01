import css from './TransactionHistory.module.css'

function Tr({id, type, amount, currency}) {
    return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
    )
}
const TransactionHistory = ({items}) => {
  return (
    <table className={css.table}>
  <thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      <tbody className={css.tableBody}>
        {items.map(item =>
        <tr key={item.id}>
           <Tr {...item} />   
          </tr> )}
  </tbody>
</table>

  )
}

export default TransactionHistory;