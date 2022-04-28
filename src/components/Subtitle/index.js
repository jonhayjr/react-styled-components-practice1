import { StyledSubtitle } from "./SubtitleElement";

const Subtitle = ({children, ...props}) => {
    return (
        <StyledSubtitle {...props}>{children}</StyledSubtitle>
    )
}

export default Subtitle;