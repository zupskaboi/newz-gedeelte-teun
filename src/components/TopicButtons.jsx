import React from 'react';
import '../style/components/TopicButtons.scss';
import { ReactComponent as WorldIcon } from "./icons/WorldIcon.svg";
import { ReactComponent as BallIcon } from "./icons/BallIcon.svg";
import { ReactComponent as CoinsIcon } from "./icons/CoinsIcon.svg";
import { ReactComponent as BuildingIcon } from "./icons/BuildingIcon.svg";
import { ReactComponent as MovieIcon } from "./icons/MovieIcon.svg";
import { ReactComponent as LaptopIcon } from "./icons/LaptopIcon.svg";

class TopicButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData: [
                { id: 1, topicName: 'ALGEMEEN', icon: <WorldIcon /> },
                { id: 2, topicName: 'SPORT', icon: <BallIcon /> },
                { id: 3, topicName: 'ECONOMIE', icon: <CoinsIcon /> },
                { id: 4, topicName: 'POLITIEK', icon: <BuildingIcon /> },
                { id: 5, topicName: 'SHOW', icon: <MovieIcon /> },
                { id: 6, topicName: 'TECH', icon: <LaptopIcon /> },
                // Add more data objects as needed
            ],
            selectedButtons: [],
        };
    }

    handleButtonClick = (id) => {
        // Toggle the selection state of the clicked button
        this.setState((prevState) => {
            const selectedButtons = prevState.selectedButtons.includes(id)
                ? prevState.selectedButtons.filter((buttonId) => buttonId !== id)
                : [...prevState.selectedButtons, id];

            return { selectedButtons };
        });

        this.handleButtonSelection(id);
    };

    handleButtonSelection = (selectedButtonId) => {
        // Replace this with your custom functionality
        console.log(`Button ${selectedButtonId} selected!`);
    };
    render() {
        // Total number of buttons
        const { buttonsData, selectedButtons } = this.state;

        // Number of columns (fixed)
        const cols = 3;

        // Calculate the number of rows
        const rows = Math.ceil(buttonsData.length / cols);

        // Create the grid using nested loops
        const grid = [];
        for (let i = 0; i < rows; i++) {
            // Create a new row
            const row = [];

            for (let j = 0; j < cols; j++) {
                const buttonIndex = i * cols + j;

                // Create a new button only if it does not exceed the total number of buttons
                if (buttonIndex <= buttonsData.length) {
                    const { id, topicName, icon } = buttonsData[buttonIndex];
                    const isSelected = selectedButtons.includes(id);

                    const buttonClasses = `customButton ${isSelected ? 'selected' : ''}`;

                    const button = (
                        <button key={id}
                            className={buttonClasses}
                            onClick={() => this.handleButtonClick(id)}>
                            {/* <img src={icon} alt={topicName} className="topic-icon" /> */}
                            {icon}
                            <br />
                            {topicName}
                        </button>
                    );
                    // Add the button to the row
                    row.push(button);
                }
            }

            // Add the row to the grid
            grid.push(<div key={i} className="row">{row}</div>);
        }

        return (
            <div className="topic-list">
                {grid}
            </div>
        );
    }
};
export default TopicButtons