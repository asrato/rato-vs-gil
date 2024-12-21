import { ReactNode } from "react";
import { StyledWrapper, Title } from "./styles";

interface CustomCardI {
    children?: ReactNode | ReactNode[];
    span?: number;
    title: string;
}

export default function CustomCard(props: CustomCardI) {
    const { children, span = 4, title } = props;

    return <StyledWrapper span={span}>
        <Title>{title}</Title>
        {children}
    </StyledWrapper>;
}