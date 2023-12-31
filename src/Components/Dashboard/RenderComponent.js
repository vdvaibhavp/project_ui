import React, { useEffect, useState } from "react";
import "./RenderComponent.css";
import axios from "axios";
import { saveAs } from "file-saver";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

function RenderComponent({ requestId, callRender }) {
  const { t } = useTranslation();
  const getStatus = async () => {
    const sessionToken = Cookies.get("sessionToken");
    const registerid = Cookies.get("registerid");
    const requestData = {
      sessionToken: sessionToken,
      requestId: requestId,
      registerid: registerid,
    };

    await axios
      .get("/status", { params: requestData })
      .then((response) => {
        console.log("I am here");
        callRender(response.data);
      })
      .catch((error) => {
        callRender();
      });
  };
  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <h1>{t("Loading")}... </h1>
    </div>
  );
}

export default RenderComponent;
