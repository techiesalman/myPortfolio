import React, { useContext } from 'react'
import './Contribution.css'
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export default function Contribution() {
    const { isDark } = useContext(StyleContext);
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main contact-margin-top" id="contact">
                <h1 className="skills-heading">Github Contributions</h1>
                <br></br>
                <div className="row parentOverScroll" >
                    <GitHubCalendar username="techiesalman" style={{width:'max-content'}}>
                        <ReactTooltip delayShow={50} html />
                    </GitHubCalendar>
                    {/* <GitHubCalendar username="techiesalman" /> */}
                </div>
            </div>
        </Fade>
    )
}
