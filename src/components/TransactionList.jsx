import {
    Typography
} from '@material-tailwind/react'

const tableHeadings = ["Transaction", "Amount", "Date"]

const tableData = [
    {
        vendorName: "Amazon",
        amount: "Rs 1,000",
        date: "24-Sep 8:02AM"
    },
    {
        vendorName: "Swiggy",
        amount: "Rs 200",
        date: "26-Sep 8:02AM"
    }
]


export function TransactionList() {
    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                {tableHeadings.map((head) => (
                    <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-navy-blue py-4 px-2"
                    >
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="text-off-white font-normal leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map(
                    (
                        {
                            vendorName,
                            amount,
                            date
                        }
                    ) => {
                        const styleClass = "border-none bg-navy-blue px-2 py-3"
                        return (
                            <tr key={vendorName}>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        {vendorName}
                                    </Typography>
                                </td>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        {amount}
                                    </Typography>
                                </td>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        {date}
                                    </Typography>
                                </td>
                            </tr>
                        )
                    }
                )}
            </tbody>
          </table>
    )
}