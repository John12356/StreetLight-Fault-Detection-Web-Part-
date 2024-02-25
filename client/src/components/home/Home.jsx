import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/data/getData")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData]);

  const columns = [
    {
      field: "status",
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        return params.value == "ok" ? (
          <CheckCircleIcon />
        ) : (
          <DoNotDisturbIcon />
        );
      },
    },
    { field: "_id", headerName: "Id", width: 200 },
    //  {
    //    field: "co_ordinates",
    //    headerName: "Co-Ordinates",
    //    width: 200,
    //    renderCell: (params) => {
    //      return (
    //        <div className="product-list-item">
    //          <img src={params.row.img} alt="" className="product-list-img" />
    //          {params.row.title}
    //        </div>
    //      );
    //    },
    //  },
    { field: "co_ordinates", headerName: "Co-Ordinates", width: 200 },
    { field: "city", headerName: "City", width: 200 },
    //  { field: "limit", headerName: "Limit", width: 120 },
    //  { field: "isSeries", headerName: "Series", width: 120 },

    {
      field: "src",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/location"} state={{ src: params.value }}>
              <button className="product-list-edit-bt">Show Location</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="home-cont">
      <div className="productlist">
        <h1>List Of Street Lights</h1>
        <DataGrid
          rows={data}
          disableSelectionOnclick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r?._id}
        />
      </div>
    </div>
  );
};

export default Home;
