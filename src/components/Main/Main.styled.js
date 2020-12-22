import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

export const StyledMain = styled.main`
    background: #fff;
    padding: 10px 0 300px 0;
`;

export const StyledMainText = styled.h1`
    color: #99b4ed;
    text-align: center;
`;

export const StyledMainContent = styled.div`
    background: #f7f9ff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    margin: 0 60px;
`;

export const StyledQuestionText = styled.span`
    color: #ffc96f;
    font-weight: bold;
`;

export const StyledCountNumber = styled.h1`
    color: #99b4ed;
`;

export const StyledRadioButtonContainer = styled.div`
    padding-top: 30px;
`;

export const StyledMainLabel = styled.label`
    color: #000;
`;

export const StyledMainButton = styled.button`
    width: 235px;
    margin: 0 34%;
    color: #fff;
    background: #ffc96f;
    outline: none;
    border: none;
    border-radius: 25px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
`;
