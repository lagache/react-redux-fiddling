import React from 'react';
import './tiles.scss';
import classNames from 'classnames';

let TileItem = React.createClass({

  getInitialState() {
    return {isOn: false}
  },

  handleClick(id) {
      let self = this;
      this.setState({isOn : true});
      setTimeout(function (){
          self.setState({isOn : false})
      }, 1000);
  },

  render: function() {
    let data = this.props.data;

    let tileClass = classNames("tile", data.color, {
      'active' : this.state.isOn
    });

    return (    
      <div className={tileClass} 
           type="tile" 
           key={data.id} 
           onClick={this.handleClick.bind(this, data.id)}>       
        tile {data.id}
      </div>
    );
  }
});

export default TileItem;
