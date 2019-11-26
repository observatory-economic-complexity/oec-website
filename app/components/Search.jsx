import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import axios from "axios";
import {event, select} from "d3-selection";
import {Icon} from "@blueprintjs/core";
import {encodeChars} from "@datawheel/canon-core";

import SearchColumn from "./SearchColumn";
import "./Search.css";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
      activeFilter: null,
      entities: ["location", "product", "technology", "firm"],
      results: [],
      timeout: 0,
      query: ""
    };
  }

  // get value from input
  onChange(e) {
    const {id, activeFilter, timeout} = this.state;
    const {limit, minQueryLength} = this.props;
    const query = e ? e.target.value : this.state.query;

    if (query.length < minQueryLength) {
      this.setState({searchActive: true, results: [], query});
      clearTimeout(timeout);
    }
    else {
      // handle escape press
      select(document).on(`keydown.${id}`, () => {
        const key = event.keyCode;
        const ESC = 27;

        // ABORT
        if (key === ESC) {
          this.resetSearch();
        }
      });

      // handle the query
      this.setState({
        // set query separately to avoid input lag
        query,
        // make the request on a timeout
        timeout: setTimeout(() => {
          // base query
          let URL = `${this.props.api}/search/?q=${encodeChars(query)}&limit=${limit}`;

          // location activeFilter (by level & location_id)
          // const countryFilter = activeFilter.activeFilter(d => d.entity === "location" && d.level === "country");
          // if (countryFilter.length) {
          //   URL += `&project_country_id=${countryFilter.map(l => l.id)}`;
          // }
          // const subnationalFilter = activeFilter.activeFilter(d => d.entity === "location" && d.level === "subnational");
          // if (subnationalFilter.length) {
          //   URL += `&project_geo_id=${subnationalFilter.map(l => l.id)}`;
          // }

          axios.get(URL)
            .then(res => res.data)
            .then(searchResultsData => {
              this.setState({
                searchActive: true,
                results: searchResultsData
              });
            });
        }, 300)
      });
    }
  }

  // click the close button
  resetSearch() {
    this.setState({
      query: "",
      activeFilter: null,
      searchActive: false
    });
    setTimeout(() => this.textInput.focus(), 0);
  }

  setFilter(e) {
    this.setState({activeFilter: e.target.value});
  }

  resetFilter() {
    this.setState({activeFilter: null});
  }

  render() {
    const {activeFilter, entities, query} = this.state;
    const {minQueryLength} = this.props;

    const columnProps = {minQueryLength};

    return (
      <div className="search" role="search">
        {/* accessibility text */}
        <h2 className="u-visually-hidden">Search</h2>

        {/* filters */}
        <div className="search-filter-container">
          <button onClick={() => this.resetFilter()}>none</button>
          {entities.map(filter =>
            <button key={`${filter}-filter-button`} onClick={e => this.setFilter(e)}>{filter}</button>
          )}
        </div>

        {/* main input */}
        <label className="search-label">
          {/* accessibility text */}
          <span className="u-visually-hidden">
            Search locations, products, technologies, and firms
          </span>

          {/* the input; NOTE: className must stay as .search-input for focus management */}
          <input
            className="search-input u-font-xxl"
            placeholder="Search profiles..."
            value={query}
            onChange={this.onChange.bind(this) }
            ref={input => this.textInput = input}
          />

          {/* search icon (keep after input so it can be easily styled input hover/focus) */}
          <Icon className="search-icon u-font-xxl" icon="search" />

          {/* close button */}
          <button
            className={`search-close-button ${query ? "is-visible" : "is-hidden"}`}
            tabIndex={query ? 0 : -1}
            onClick={this.resetSearch.bind(this)}
          >
            <Icon className="search-close-icon" icon="cross" />
            <span className="u-visually-hidden">reset search</span>
          </button>
        </label>

        {/* container for results */}
        <div className="search-inner">
          <ul className="search-column-list">
            {entities.map(entity =>
              <SearchColumn {...this.state} {...columnProps} entity={entity} key={entity} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Search.defaultProps = {
  limit: 100,
  minQueryLength: 1
};

export default hot(Search);