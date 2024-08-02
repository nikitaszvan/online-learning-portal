import { BreadcrumbContainer } from "./bootstrap-breadcrumb.styles";
import { Breadcrumb } from "react-bootstrap";

const StyledBreadcrumb = ({breadcrumbitems}) => {
    return (
        <BreadcrumbContainer>
            {breadcrumbitems.map((item, index)=> {
                const {label, href} = item;

                return (
                    <Breadcrumb.Item key={index} href={href}>
                        {label}
                    </Breadcrumb.Item>
                )
            })}
        </BreadcrumbContainer>
    )
}

export default StyledBreadcrumb;
    
