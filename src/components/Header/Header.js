import Mailchimp from 'react-mailchimp-form';
import { StyledHeader, StyledFlexContainer, StyledHeaderText } from './Header.styled';
import { grabFlightDeals, whileHot } from '../../constants';

const Header = () => {
    return (
        <StyledHeader>
            <StyledFlexContainer>
                <StyledHeaderText>{grabFlightDeals}</StyledHeaderText>
                <StyledHeaderText>{whileHot}</StyledHeaderText>
                <br />
                <Mailchimp
                    action={process.env.REACT_APP_MAILCHIMP_URL}
                    fields={[
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true,
                        },
                    ]}
                />
            </StyledFlexContainer>
        </StyledHeader>
    );
};

export default Header;
