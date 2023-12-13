import React from "react";
import "../style/pages/SelectSources.scss";
import CheckboxFields from "../components/CheckboxFields";
import { Title } from '../components/Titles';
import RedButton from "../components/RedButton";
import { Link } from "react-router-dom";

const SelectSources = () => {
    return (
        <div id="selectsourcespage">
            <div className="title-container">
                <div className="select-title">
                    <Title text="Selecteer Bronnen" />
                </div>
            </div>
            <CheckboxFields />
            <div className="containerbtn savesource-button">
                {<Link to="/SelectTopics">
                    <RedButton>opslaan</RedButton>
                </Link>}
            </div>
        </div>
    );
};

export default SelectSources;
