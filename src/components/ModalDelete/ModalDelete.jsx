import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { dataContext } from "../../context";

export const ModalDelete = ({ id }) => {
  const { updateReports, setUpdateReports, token } = useContext(dataContext);
  const history = useHistory();
  const MySwal = withReactContent(Swal);
  const [redirectLogin, setRedirectLogin] = useState(false);

  useEffect(() => {
    if (redirectLogin) {
      history.push("/login-page");
    }
  }, [redirectLogin, history]);

  function deleteReport(id) {
    fetch(`http://localhost:3333/664/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}1`,
      },
      body: JSON.stringify(deleteReport),
    })
      .then((res) => {
        // res.json()
        // console.log(res);
        if (!res.ok) {
          res
            .json()
            .then((error) => {
              console.log(error, "ERROR");
              throw new Error(error);
            })
            .catch((error) => {
              MySwal.fire("Error!", error.message, "error").then((result) => {
                if (
                  result.isConfirmed &&
                  error.message.toLowerCase() === "jwt expired"
                ) {
                  setRedirectLogin(true);
                }
              });
            });
        }

        return res.json();
      })
      .then((result) => {
        console.log(result);

        MySwal.fire("Deleted!", "Your file has been deleted.", "success");

        setUpdateReports(!updateReports);
      })
      .catch((error) => {
        MySwal.fire("Error!", error.message, "error").then((result) => {
          if (
            result.isConfirmed &&
            error.message.toLowerCase() === "jwt expired"
          ) {
            setRedirectLogin(true);
          }
        });
      });
  }

  const openModal = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReport(id);
      }
    });
  };

  return (
    <button onClick={openModal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};
