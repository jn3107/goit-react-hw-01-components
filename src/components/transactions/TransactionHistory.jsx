import css from "./TransactionHistory.module.css";

const TransactionHistory = props => {
    return (
        <div>
            <table className={css.transactionHistory}>
                <thead>
                    <tr>
                        <th className={css.tableHead}>Type</th>
                        <th className={css.tableHead}>Amount</th>
                        <th className={css.tableHead}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                   {props.items.map(transaction => (
                        <tr key={transaction.id} className={css.tableData}>
                            <td className={css.tableDataCell}>{transaction.type}</td>
                            <td className={css.tableDataCell}>{transaction.amount}</td>
                            <td className={css.tableDataCell}>{transaction.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { TransactionHistory };