import React from "react";
import TopicButtons from "../components/TopicButtons";
import { Title } from "../components/Titles";
import RedButton from "../components/RedButton";
import "../style/pages/SelectTopics.scss";
import { Link } from "react-router-dom";

const SelectSources = () => {
    return (
        <div id="selecttopicspage">
            <div className="title-container">
                <div className="topic-title">
                    <Title text="Selecteer Categorieën" />
                </div>
            </div>
            <div className="topic-line"></div>
            <TopicButtons />
            <div className="containerbtn save-button">
                {<Link to="/">
                    <RedButton>opslaan</RedButton>
                </Link>}
            </div>
        </div>
    );
};

export default SelectSources;

