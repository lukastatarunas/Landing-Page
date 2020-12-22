import React, { useState } from 'react';
import {
    useStyles,
    StyledMain,
    StyledMainText,
    StyledMainContent,
    StyledQuestionText,
    StyledCountNumber,
    StyledRadioButtonContainer,
    StyledMainLabel,
    StyledMainButton,
} from './Main.styled';
import Slider from '@material-ui/core/Slider';
import { price, calculateYourSavings, firstQuestion, secondQuestion, thirdQuestion, yes, no, total, startSaving } from '../../constants';

const valueText = (value) => value;

const Main = () => {
    const classes = useStyles();

    const [savings, setSavings] = useState(0);

    const [firstSliderValue, setFirstSliderValue] = useState(0);
    const [secondSliderValue, setSecondSliderValue] = useState(0);

    const handleFirstSliderChange = (event, newValue) => setFirstSliderValue(newValue);

    const handleSecondSliderChange = (event, newValue) => setSecondSliderValue(newValue);

    const handleClick = () => setSavings(firstSliderValue * secondSliderValue * price);

    return (
        <StyledMain>
            <StyledMainText>{calculateYourSavings}</StyledMainText>
            <StyledMainContent>
                <StyledQuestionText>{firstQuestion}</StyledQuestionText>
                <StyledCountNumber>{parseInt(firstSliderValue)}</StyledCountNumber>
                <div className={classes.root}>
                    <Slider value={firstSliderValue} onChange={handleFirstSliderChange} getAriaValueText={valueText} />
                </div>
                <br />
                <StyledQuestionText>{secondQuestion}</StyledQuestionText>
                <StyledCountNumber>{parseInt(secondSliderValue)}</StyledCountNumber>
                <div className={classes.root}>
                    <Slider value={secondSliderValue} onChange={handleSecondSliderChange} getAriaValueText={valueText} />
                </div>
                <br />
                <StyledQuestionText>{thirdQuestion}</StyledQuestionText>
                <StyledRadioButtonContainer>
                    <input type='radio' name='radio' />
                    <StyledMainLabel>{yes}</StyledMainLabel>
                    <input type='radio' name='radio' />
                    <StyledMainLabel>{no}</StyledMainLabel>
                </StyledRadioButtonContainer>
                <br />
                <br />
                <img src={process.env.PUBLIC_URL + '/images/Path 413@1X.png'} width='200px' />
                <StyledMainText>{total}</StyledMainText>
                <StyledCountNumber>${savings}</StyledCountNumber>
                <StyledMainButton onClick={handleClick}>{startSaving}</StyledMainButton>
            </StyledMainContent>
        </StyledMain>
    );
};

export default Main;
