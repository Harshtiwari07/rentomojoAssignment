import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import SearchBar from "material-ui-search-bar";
import { Button } from "@mui/material";

const col = [
  { field: 'title', headerName: 'Title of game', width: 400 },
  { field: 'platform', headerName: 'Platfrom', width: 250, align: 'center', headerAlign: 'center' },
  { field: 'score', headerName: 'Score', width: 250, align: 'center', headerAlign: 'center' },
  { field: 'genre', headerName: 'Genre', width: 250, align: 'center', headerAlign: 'center' },
  { field: 'editors_choice', headerName: 'Editors_choice', width: 250, align: 'center', headerAlign: 'center' },
];

export default function Tables() {

  const [apis, setApis] = useState([]);
  const [pageSize, setPageSize] = React.useState(20);
  const [search, setsearch] = useState("");


  //Styling For Table Contents 
  const textclass = {
    fontFamily: "chiller",
    fontSize: "28px"
  }


  const apiData = () => {
    fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
      .then((response) => {
        return response.json();
      }).then((apidata) => {

      
        function addId(id) {
          return function iter(o) {
            if ('title' in o) {
              o.id = id++;
            }
            Object.keys(o).forEach(function (k) {
              Array.isArray(o[k]) && o[k].forEach(iter);
            });
          };
        }
        apidata.forEach(addId(1))
        apidata.splice(0, 1);
        setApis(apidata)
        console.log(apidata);

      })
  }
  useEffect(() => {
    apiData();
  }, [])


  const rows = apis?.map(api => {
    return {
      title: api?.title,
      score: api?.score,
      platform: api?.platform,
      id: api?.id,
      genre: api?.genre,
      editors_choice: api?.editors_choice,
    }
  })

  const reqSearch = (searchVal) => {
    const filteredRows = apis.filter((row) => {
      return row.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    setApis(filteredRows);
  };

  function refPage() {
    window.location.reload();
  }

  return (
    <div >
      <div className="search">
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: "#a267f5"
          }} >
          <SearchBar
            sx={{ fontFamily: 'Monospace' }}
            value={search}
            onChange={(searchVal) => reqSearch(searchVal)}
            onCancelSearch={() => refPage()}
          />
          <Button
            sx={{
              borderRadius: "100px",
              backgroundColor: "#e4f0e2",
              color: "black",
              fontFamily: 'Monospace'
            }}
            variant="contained"
            onClick={refPage}>
            Refresh
          </Button>

        </Paper>
      </div>
      <div className="tbbg" style={{ height: 750, width: '100%', margin: '20px', padding: '15px' }}>
        <DataGrid
          style={textclass}
          rows={rows}
          getRowId={(row) => row.id}
          columns={col}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[20, 50, 99]}
          pagination
        />
      </div>
    </div>
  );
}
