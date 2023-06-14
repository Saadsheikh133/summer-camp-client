

const HistoryCard = ({ history, index }) => {
    const { date, email, image, instructor, name, transactionId, } = history;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name} <br />
                {email}
            </td>
            <td>{instructor}</td>
            <td>{date}</td>
            <td>{transactionId}</td>
        </tr>
    );
};

export default HistoryCard;