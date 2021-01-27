import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { DATA_VIEW_MODE } from "../constats";

export const ToggleViewMode = ({ setDataViewMode, dataViewMode }) => {
  const handleChange = useCallback(
    (event, nextView) => {
      setDataViewMode(nextView);
    },
    [dataViewMode]
  );
  return (
    <ToggleButtonGroup value={dataViewMode} exclusive onChange={handleChange}>
      <ToggleButton
        value={DATA_VIEW_MODE.GRID}
        aria-label={DATA_VIEW_MODE.GRID}
        data-testid="toggle-data-view-mode-grid"
      >
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VIEW_MODE.TABLE}
        aria-label={DATA_VIEW_MODE.TABLE}
        data-testid="toggle-data-view-mode-table"
      >
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODE.TABLE, DATA_VIEW_MODE.GRID])
    .isRequired,
  setDataViewMode: PropTypes.func.isRequired,
};
