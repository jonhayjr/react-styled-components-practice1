import { ParagraphElement } from "./ParagraphElement";

const Paragraph = ({children, ...props}) => {
    return (
        <ParagraphElement {...props}>{children}</ParagraphElement>
    )
}

export default Paragraph;