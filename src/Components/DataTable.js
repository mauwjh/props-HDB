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
        id: index,
        town: element.town,
        flatType: element.flat_type,
        leaseDate: element.lease_commence_date,
        squareArea: parseInt(element.floor_area_sqm),
        price: parseInt(element.resale_price),
      }))
    );
  }, [props.data]);

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
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
              <Link to={`/search/${rowData.id}`}>{rowData.town}</Link>
            ),
          },
          { title: "Flat Type", field: "flatType", align: 'justify' },
          { title: "Lease Date", field: "leaseDate", type: 'numeric', align: 'justify' },
          { title: "Size (sqm)", field: "squareArea", type: 'numeric', align: 'justify' },
          { title: "Price", field: "price", type: 'numeric', align: 'justify'},
        ]}
        data={data}
        title="HDB Transactions"
        options={{
          exportButton: true,
          filtering: true,
          pageSize: 5,
          pageSizeOptions: [5, 50, 100, 500],
          thirdSortClick: false,
          isLoading: true,
          loadingType: "overlay",
        }}
      />
    </div>
  );
};

export default DataTable;
