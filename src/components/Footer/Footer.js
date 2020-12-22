import { StyledFooter, StyledFooterAnchor, StyledFooterText } from './Footer.styled';
import { reachUs, email, cheapFlights, saveUpTo, membersLoveUs, aboutUs, copyrights } from '../../constants';

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterText>{reachUs}</StyledFooterText>
            <StyledFooterAnchor>{email}</StyledFooterAnchor>
            <br />
            <br />
            <StyledFooterText>{cheapFlights}</StyledFooterText>
            <StyledFooterText>{saveUpTo}</StyledFooterText>
            <StyledFooterText>{membersLoveUs}</StyledFooterText>
            <StyledFooterText>{aboutUs}</StyledFooterText>
            <br />
            <br />
            <StyledFooterText>{copyrights}</StyledFooterText>
        </StyledFooter>
    );
};

export default Footer;
