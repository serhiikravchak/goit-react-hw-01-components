import PropTypes from 'prop-types';
import {Transactions, Head, Row, Data} from 'components/transaction/TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
    return (
        <Transactions>
            <thead>
    <   tr>
      <Head>Type</Head>
      <Head>Amount</Head>
      <Head>Currency</Head>
    </tr>
  </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                    <Row key={id}>
                            <Data>{type}</Data>
                            <Data>{amount}</Data>
                            <Data>{currency}</Data>
                        </Row>
                    )
                })}
    
  </tbody>
</Transactions>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}