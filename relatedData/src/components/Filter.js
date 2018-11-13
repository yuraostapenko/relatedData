import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({filterArr, nodes, select, inputValue, inputChange, selectChange}) => {

    return (
        <div className='filter'>
            <select id="selectId" onChange={selectChange}>
                <option value="vendor">vendor</option>
                <option value="location">location</option>
                <option value="deviceType">deviceType</option>
                <option value="service">service</option>
            </select>
                <form onSubmit={filterArr} className="mainForm">
                    <label className="label">
                        <input  type="text" className="Input" placeholder="Search devices" onChange={inputChange}/>
                       
                    </label>
                </form>    
        </div>
    );
};

Filter.propTypes = {
    node: PropTypes.object,
    select: PropTypes.string,
    inputValue: PropTypes.string,
    inputChange: PropTypes.func,
    selectChange: PropTypes.func,
    filterArr: PropTypes.func,
};
export default Filter;