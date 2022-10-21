import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import HighMap from "../Charts/HighMap";
import LineChart from "../Charts/LineChart";

function Summary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountryId) {
      const mapData = import(
        `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [selectedCountryId]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMap mapData={mapData} />
      </Grid>
    </Grid>
  );
}

export default Summary;
