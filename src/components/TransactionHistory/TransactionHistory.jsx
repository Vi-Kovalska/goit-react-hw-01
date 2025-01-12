import React from 'react'

function Tr({id, type, amount, currency}) {
    return (
            <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}
const TransactionHistory = ({items}) => {
  return (
    <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

          <tbody>
              {items.map(item => <Tr {...item} /> )}         
  </tbody>
</table>

  )
}

export default TransactionHistory;