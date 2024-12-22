import { ReactNode } from "react";
import { StyledWrapper, Title } from "./styles";

interface CustomCardI {
    children?: ReactNode | ReactNode[];
    size?: 'small' | 'meidum' | 'large';
    title: string;
}

export default function CustomCard(props: CustomCardI) {
    const { children, size = 'medium', title } = props;

    return <StyledWrapper size={size}>
        <Title>{title}</Title>
        {children}
    </StyledWrapper>;
}