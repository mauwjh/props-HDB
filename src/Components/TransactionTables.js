import MaterialTable from "@material-table/core";
import React, { useState, useEffect } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Info from "@material-ui/icons/Info";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";
import { Typography } from "@mui/material";

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  Info: Info,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn,
};

const TransactionTable = ({mainData, transaction, setNearby}) => {
  const [data, setData] = useState([]) 
  const history = useHistory()

  useEffect(() => {
    const allData = mainData?.map((element) => ({
      id: element._id,
      town: element.town,
      block: element.block,
      streetName: element.street_name,
      flatType: element.flat_type,
      leaseDate: element.lease_commence_date,
      squareArea: parseInt(element.floor_area_sqm),
      price: parseInt(element.resale_price),
      address: element.block + " " + element.street_name,
      month: element.month,
      storeyRange: element.storey_range
    }));
    setData(
      allData?.filter((element) => element.town === transaction.town)
    );
    
    setNearby(allData?.filter(b => b.town === transaction.town && b.leaseDate === transaction.leaseDate && b.flatType === transaction.flatType))
  }, [mainData, setNearby, transaction.flatType, transaction.leaseDate, transaction.town]);

  return (
    <Typography component='span'>
      <div
        style={{
          position: "relative",
          width: "80%",
          maxWidth: "1800px",
          margin: "0 auto",
          marginTop: "-3%",
          marginBottom: "2%",
          boxShadow: "none",
          zIndex: 0,
        }}
      >
        <MaterialTable
          style={{ boxShadow: "none" }}
          onRowClick={(event, rowData) => {history.push(`/search/${rowData.id}`); window.scrollTo(0, 0)}}
          localization={{
            body: {
              emptyDataSourceMessage: <CircularProgress />,
            },
          }}
          icons={tableIcons}
          columns={[
            {
              title: "Date",
              field: "month",
              align: "justify",
              defaultSort: "desc",
            },
            {
              title: "Address",
              field: "address",
              render: (rowData) => (
                    rowData.address
              ),
            },
            {
              title: "Flat Type",
              field: "flatType",
              align: "justify",
              defaultFilter: transaction.flatType
                ? `${transaction.flatType}`
                : " ",
            },
            {
              title: "Storey Range",
              field: "storeyRange",
              align: "justify",
            },
            {
              title: "Lease Date",
              field: "leaseDate",
              align: "justify",
              defaultFilter: transaction.leaseDate
                ? `${transaction.leaseDate}`
                : " ",
            },
            {
              title: "Size (sqm)",
              field: "squareArea",
              align: "justify",
            },
            {
              title: "Price",
              field: "price",
              align: "justify",
              render: (rowData) => `S$${rowData?.price?.toLocaleString()}`,
            },
          ]}
          data={data}
          title="Resale Transactions"
          options={{
            exportButton: true,
            filtering: true,
            pageSize: 5,
            pageSizeOptions: [5, 10, 50, 100, 500],
            thirdSortClick: false,
            maxBodyHeight: "50vh",
            header: true,
            showTitle: false,
            search: false,
            draggable: false,
            showFirstLastPageButtons: false,
            headerStyle: {
              position: "sticky",
              height: 0,
              background: "white",
            },
          }}
        />
      </div>
    </Typography>
  );
};

export default TransactionTable;
