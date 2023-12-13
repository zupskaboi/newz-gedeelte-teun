import React, { useState, useEffect } from 'react'
import '../style/components/CheckboxFields.scss'
// import axios from 'axios';


class CheckboxFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '', // State to store the filter text
            showSelected: false, // State to toggle displaying only selected
            //sourceData: [],
        };

        this.sourceData = [
            { id: 1, name: 'RTL Nieuws', image: '/assets/images/rtlnieuws.png' },
            { id: 2, name: 'NOS', image: '/assets/images/nos.png' },
            { id: 3, name: 'Telegraaf', image: 'url_to_johns_image.jpg' },
            { id: 4, name: 'Nu.nl', image: 'url_to_janes_image.jpg' },
            { id: 5, name: 'AD', image: 'url_to_johns_image.jpg' },
            { id: 6, name: 'POWNED', image: 'url_to_janes_image.jpg' },
            { id: 7, name: 'ANP', image: 'url_to_johns_image.jpg' },
            { id: 8, name: 'NRC', image: 'url_to_janes_image.jpg' },
            // Add more data objects as needed
        ];

        // Initialize state properties for each checkbox
        this.sourceData.forEach((source) => {
            this.state[`checkbox${source.id}`] = false;
        });
    }

    // componentDidMount() {
    //     // Fetch data from the server when the component mounts
    //     axios.get('/bronnenserver.php')  // Replace with your actual server URL
    //         .then(response => {
    //             this.setState({ sourceData: response.data });
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }

    handleCheckboxChange = (sourceId) => {
        this.setState((prevState) => ({
            [`checkbox${sourceId}`]: !prevState[`checkbox${sourceId}`],
        }));
    };

    handleFilterChange = (event) => {
        this.setState({ filterText: event.target.value });
    };

    getCheckedCount = () => {
        // Count the number of checked checkboxes
        //const checkedCount = Object.values(this.state).filter(Boolean).length;
        const visibleUsers = this.state.showSelected
            ? this.getSelectedCheckboxes()
            : this.sourceData.filter(
                (source) =>
                    source.name
                        .toLowerCase()
                        .includes(this.state.filterText.toLowerCase())
            );

        // Count the number of checked checkboxes among the visible ones
        const checkedCount = visibleUsers.reduce(
            (count, source) => count + (this.state[`checkbox${source.id}`] ? 1 : 0),
            0
        );
        return checkedCount;
    };

    handleShowSelected = () => {
        this.setState((prevState) => ({
            showSelected: !prevState.showSelected,
        }));
    };

    getSelectedCheckboxes = () => {
        // Get an array of user objects for selected checkboxes
        const selectedUsers = this.sourceData.filter(
            (source) => this.state[`checkbox${source.id}`]
        );
        return selectedUsers;
    };



    render() {
        // Apply filter based on the user input
        let filteredUserData = this.sourceData.filter(
            (source) =>
                source.name.toLowerCase().includes(this.state.filterText.toLowerCase())
        );

        if (this.state.showSelected) {
            filteredUserData = this.getSelectedCheckboxes();
        }

        // Array to store the JSX elements of the checkbox fields
        const checkboxFields = filteredUserData.map((source) => (
            <div>
                <div key={source.id} className="checkbox-container">
                    <label className="checkbox-label">
                        <div className="source-title">
                            <img src={source.image} className="source-image" />
                            <p className="source-text">{source.name}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={this.state[`checkbox${source.id}`]}
                            onChange={() => this.handleCheckboxChange(source.id)}
                            className="custom-checkbox"
                        />
                    </label>
                    <br />
                </div>
                <div className="source-line"></div>
            </div>
        ));


        return (
            <div>
                <div className="selection-container">
                    <div className="selection-options">
                        <p onClick={() => this.setState({ showSelected: false })}>Alle bronnen</p>
                        <div className='checked-total'>
                            <p onClick={() => this.setState({ showSelected: true })}>geselecteerd</p>
                            <p className='checked-count'>{this.getCheckedCount()}</p>
                        </div>
                    </div>
                </div>
                <div className="line-container">
                    <div className="source-line"></div>
                    <div className="filter-container">
                        <div className="source-filter">
                            <p>ZOEK:</p>
                            <input type="text" placeholder="zoek hier" value={this.state.filterText} onChange={this.handleFilterChange} />
                        </div>
                    </div>
                    <div className="source-line"></div>
                </div>
                <div className="source-list">
                    {checkboxFields}
                </div>
            </div>
        );
    }
};
export default CheckboxFields