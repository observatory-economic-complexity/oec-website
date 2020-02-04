import React from "react";

import {Button, MenuItem, Switch} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import {colorContrast} from "d3plus-color";

import "@blueprintjs/select/lib/css/blueprint-select.css";

class OECMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      selectedItems: props.selectedItems
    };
  }

  // componentDidUpdate() {
  //   console.log("this.props.updateSelection", this.props.updateSelection);
  // }

  renderTag = item => item.title;
  renderItem = (item, {modifiers, handleClick}) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return <MenuItem
      active={modifiers.active}
      icon={this.isItemSelected(item) ? "tick" : "blank"}
      key={`${item.value}-${item.title}`}
      label={item.displayId ? `${item.displayId}`.toUpperCase() : `${item.value}`}
      onClick={handleClick}
      text={item.title}
      shouldDismissPopover={false}
    />;

  };
  getSelectedItemIndex = item => this.state.selectedItems.indexOf(item);
  isItemSelected = item => this.getSelectedItemIndex(item) !== -1;
  handleItemSelect = item => {
    if (!this.isItemSelected(item)) {
      this.selectItem(item);
    }
    else {
      this.deselectItem(this.getSelectedItemIndex(item));
    }
  };
  selectItem(item) {
    this.selectItems([item]);
  }
  arrayContainsItem = itemToFind => this.state.selectedItems.some(item => item.title === itemToFind.title);
  selectItems(itemsToSelect) {
    const {selectedItems, items} = this.state;
    let nextSelectedItems = selectedItems.slice();
    const nextItems = items.slice();

    itemsToSelect.forEach(item => {
      nextSelectedItems = !this.arrayContainsItem(nextSelectedItems, item) ? [...nextSelectedItems, item] : nextSelectedItems;
    });

    this.setState({
      selectedItems: nextSelectedItems,
      items: nextItems
    });
    this.props.callback(nextSelectedItems);
  }
  deleteItemFromArray = (items, itemToDelete) => items.filter(item => item !== itemToDelete);
  deselectItem(index) {
    const {selectedItems} = this.state;

    // Delete the item if the user manually created it.
    const nextSelectedItems = selectedItems.filter((_item, i) => i !== index);
    this.setState({
      selectedItems: nextSelectedItems
    });
    this.props.callback(nextSelectedItems);
  }
  handleTagRemove = (_tag, index) => {
    this.deselectItem(index);
  };
  handleClear = () => {
    this.setState({selectedItems: []});
    this.props.callback([]);
  };

  areItemsEqual(itemA, itemB) {
    // Compare only the names (ignoring case) just for simplicity.
    return itemA.title.toString().toLowerCase() === itemB.title.toString().toLowerCase();
  }

  filterItems = (query, item) => {
    const text = item.title.toString();
    return text.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };

  render() {
    const {items, itemType, selectedItems, title} = this.props;
    return <div className="selector">
      <h3 className="title">{title}</h3>
      <MultiSelect
        fill={true}
        // initialContent={undefined}
        itemPredicate={this.filterItems}
        itemRenderer={this.renderItem}
        // itemsEqual={this.areItemsEqual}
        items={this.props.items}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={this.handleItemSelect}
        popoverProps={{minimal: true}}
        resetOnSelect={false}
        resetOnQuery={false}
        tagInputProps={{
          onRemove: this.handleTagRemove,
          rightElement: this.props.selectedItems.length ? <Button icon="cross" minimal={true} onClick={this.handleClear} /> : null,
          tagProps: d => {
            const thisItem = items.find(dd => dd.title === d);
            return {
              style: {
                backgroundColor: thisItem.color,
                color: colorContrast(thisItem.color) || "white"
              }
            };
          }
        }}
        tagRenderer={this.renderTag}
        selectedItems={this.props.selectedItems}
      />
    </div>;
  }
}

export default OECMultiSelect;
