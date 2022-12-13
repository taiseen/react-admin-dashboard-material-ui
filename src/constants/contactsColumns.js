const contactsColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
    },
    {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "address",
        headerName: "Address",
        flex: 1,
    },
    {
        field: "city",
        headerName: "City",
        flex: 1,
    },
    {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
    },
];

export default contactsColumns;