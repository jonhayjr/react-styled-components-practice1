import Section from "../components/Section";
import Subtitle from '../components/Subtitle/index';
import Paragraph from "../components/Paragraph";

const NotFound = () => {
    return (
        <Section>
            <Subtitle color="red">Page Not Found</Subtitle>
            <Paragraph color="red">Please refresh and try again.</Paragraph>
        </Section>
    )
}

export default NotFound;