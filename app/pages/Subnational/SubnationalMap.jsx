import React from "react";
import {hot} from "react-hot-loader/root";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {withNamespaces} from "react-i18next";
import {Geomap} from "d3plus-react";

import "./SubnationalMap.css";

class SubnationalMap extends React.Component {
  constructor(props) {
    super(props);
    this.dataFormat = this.dataFormat.bind(this);
    this.getGeoConfig = this.getGeoConfig.bind(this);
  }

  dataFormat(shapes) {
    return shapes;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  getGeoConfig() {
    const {items, country, selectedGeoLevel, locale} = this.props;

    const ignoreIdsMap = selectedGeoLevel.ignoreIdsMap ? selectedGeoLevel.ignoreIdsMap : [];

    const extraConfig = selectedGeoLevel.extraMapConfig ? selectedGeoLevel.extraMapConfig : {};

    const {router} = this.context;

    return Object.assign({
      id: `geomap-${country}`,
      data: items,
      height: 500,
      legend: false,
      ocean: "transparent",
      total: false,
      on: {
        "click.shape": d => {
          if (d) {
            const url = `/${locale}/profile/subnational_${country}/${d.slug}`;
            router.push(url);
          }
        }
      },
      projectionPadding: "10 10 10 10",
      shapeConfig: {
        Path: {
          fill: d => d.type === "Feature" ? "#444" : "#fff",
          stroke: "#ccc",
          hoverOpacity: 0.5,
          hoverStyle: d => {
            const fillColor = d.type === "Feature" ? "none" : "#6297CB";
            return `fill: "${fillColor}"`;
          },
          strokeWidth: "1px",
          pointerEvents: d => d.type === "Feature" ? "none" : "visiblePoint"
        }
      },
      tiles: false,
      tooltipConfig: {
        title: (d, a) => {
          let tooltip = "<div class='d3plus-tooltip-title-wrapper'>";
          const imgUrl = `/images/icons/country/country_${country}.png`;
          tooltip += `<div class="icon"><img src="${imgUrl}" /></div>`;
          tooltip += `<span>${d.name}</span>`;
          tooltip += "</div>";
          return tooltip;
        },
        tbody: d => {
          const tbodyData = [];
          tbodyData.push(["Level", `${selectedGeoLevel.name}`]);
          tbodyData.push(["ID", `${d.id}`]);
          return tbodyData;
        },
        background: "#282f37",
        border: "1px solid #66737e",
        footerStyle: {
          "color": "#666",
          "fontFamily": () => "'Source Sans Pro', sans-serif",
          "font-size": "12px",
          "font-weight": "300",
          "padding-top": "5px",
          "text-align": "center"
        },
        padding: "0px",
        titleStyle: {
          "color": "#FFFFFF",
          "padding": "5px",
          "fontFamily": () => "'Source Sans Pro', sans-serif",
          "font-size": "16px",
          "font-weight": "600",
          "max-height": "100px",
          "overflow": "hidden",
          "text-overflow": "ellipsis",
          "display": "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "3"
        },
        tbodyStyle: {
          color: "#FFFFFF"
        },
        width: "200px"
      },
      fit: true,
      topojson: `/shapes/subnational_${country}_${selectedGeoLevel.slug}.topojson`,
      topojsonId: d => d.properties.id,
      topojsonFilter: d => {
        let ignore = false;
        if (ignoreIdsMap.length > 0) {
          ignore = ignoreIdsMap.indexOf(d.properties.id) > -1;
        }
        return !ignore;
      },
      topojsonKey: "objects",
      zoom: false
    }, extraConfig);
  }

  render() {
    const {selectedGeoLevel} = this.props;

    const geoConfig = this.getGeoConfig();

    return <div className="subnational-map">
      <h2 className="subnational-map-label">{selectedGeoLevel.name}</h2>
      <Geomap
        className="geomap-subnational-viz"
        config={geoConfig}
        dataFormat={this.dataFormat}
      />
    </div>;
  }
}

SubnationalMap.contextTypes = {
  router: PropTypes.object
};

SubnationalMap.need = [];

export default hot(withNamespaces()(
  connect(state => ({
    locale: state.i18n.locale
  }))(SubnationalMap)
));
