import React from 'react';
import './tiles.scss';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {checkTile} from '../../actions'


let TileItem = React.createClass({

    handleClick(id) {
        this.props.dispatch(checkTile(this.props.data.id));
    },

    render: function () {
        let data = this.props.data;
        //  // Injected by connect() call:
        const {dispatch} = this.props;

        let tileClass = classNames("tile", data.color, {
            'active': data.active
        });

        return (
            <div className={tileClass}
                 type="tile"
                 key={data.id}
                 onClick={() => this.handleClick(data.id)}>
                tile {data.id}
            </div>
        );
    }
});

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(TileItem);