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
import { Link } from "react-router-dom";
import "@fontsource/mulish/300.css";
import Button from "@mui/material/Button";

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

const DataTable = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      props.data?.map((element, index) => ({
        id: element._id,
        town: element.town,
        block: element.block,
        streetName: element.street_name,
        flatType: element.flat_type,
        leaseDate: element.lease_commence_date,
        squareArea: parseInt(element.floor_area_sqm),
        price: parseInt(element.resale_price),
        address: element.block + " " + element.street_name,
      }))
    );
  }, [props.data]);

  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        maxWidth: "1800px",
        margin: "0 auto",
        marginTop: "1%",
        boxShadow: "none",
        zIndex: 0,
      }}
    >
      <MaterialTable
        style={{ boxShadow: "none" }}
        localization={{
          body: {
            emptyDataSourceMessage: <CircularProgress />,
          },
        }}
        icons={tableIcons}
        columns={[
          {
            title: "Town",
            field: "town",
            defaultSort: "asc",
            render: (rowData) => (
              <Button>
                <Link
                  to={`/search/${rowData.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#084c61",
                    fontWeight: 600,
                  }}
                >
                  {rowData.address}
                </Link>
              </Button>
            ),
          },
          { title: "Flat Type", field: "flatType", align: "justify" },
          { title: "Lease Date", field: "leaseDate", align: "justify" },
          { title: "Size (sqm)", field: "squareArea", align: "justify" },
          { title: "Price", field: "price", align: "justify" },
        ]}
        data={data}
        title="Resale Transactions"
        options={{
          exportButton: true,
          filtering: true,
          pageSize: 5,
          pageSizeOptions: [5, 10, 50, 100, 500],
          thirdSortClick: false,
          draggable: false,
          maxBodyHeight: "70vh",
          tableLayout: 'auto',
          headerStyle: {
            position: "sticky",
            height: 0,
            background: "white",
          },
        }}
      />
    </div>
  );
};

export default DataTable;
