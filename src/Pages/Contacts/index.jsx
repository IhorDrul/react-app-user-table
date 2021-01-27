import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useContacts } from "./useContact";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ContactsTable } from "./ContactsTable";
import Box from "@material-ui/core/Box";
import { ToggleViewMode } from "./ToggleViewMode/index";
import { DATA_VIEW_MODE } from "./constats";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

export const Contacts = () => {
  const contacts = useContacts();
  const classes = useStyles();
  const [dataViewMode, setDataViewMode] = useState(
    localStorage.getItem("dataViewMode") || DATA_VIEW_MODE.TABLE
  );

  useEffect(() => {
    localStorage.setItem("dataViewMode", dataViewMode);
  }, [dataViewMode]);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" component="h1">
              Contacts
            </Typography>
            <ToggleViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress data-testid={"contacts-loader"} />;
            }
            if (contacts.isError) {
              return <div data-testid="contacts-error">...ERROR</div>;
            }
            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
              return <ContactsTable data={contacts.data} />;
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return <div data-testid="contacts-grid-container">Grid</div>;
            }
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
