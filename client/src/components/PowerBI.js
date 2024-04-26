import React, { useEffect } from 'react';
import * as powerbi from 'powerbi-client';

const PowerBIReport = () => {
  useEffect(() => {
    const embedConfiguration = {
      type: 'report',
      tokenType: powerbi.models.TokenType.Embed,
       // Remplacez cela par votre accesToken
       
       accessToken: 'https://app.powerbi.com/links/QHYMf9arPn?ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&pbi_source=linkShare', 
      embedUrl: 'https://app.powerbi.com/groups/me/reports/eadf15b7-65fd-40d8-88e3-e7597729536d/ReportSection?experience=power-bi', // Remplacez cela par l'URL d'intégration de votre rapport
      id: 'eadf15b7-65fd-40d8-88e3-e7597729536d', // Remplacez cela par l'ID de votre rapport
      permissions: powerbi.models.Permissions.All,
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
    };

    const reportContainer = document.getElementById('reportContainer');

    const report = powerbi.embed(reportContainer, embedConfiguration);

    return () => {
      report.off('loaded');
    };
  }, []);

  return <div id="reportContainer" style={{ height: 600 }} />;
};

export default PowerBIReport;
