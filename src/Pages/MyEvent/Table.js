import React from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";

const useStyles = makeStyles(theme => ({
  padding: {
    paddingTop: "30px",
    maxWidth: "100%"
  }
}));

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Type Événement", field: "typeEvent" },
            { title: "Date", field: "date" },
            { title: "État", field: "etat" }
        ],
        data: [{ typeEvent: "Mehmet", date: "Baran", etat: 1987, action: 63 }]
    });
    const classes = useStyles();
    return (
      <div className={classes.padding}>
        <MaterialTable
          icons={{
            Check: Check,
            DetailPanel: ChevronRight,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
          }}
          title={null}
          columns={state.columns}
          data={state.data}
        />
      </div>
    );
}