import React from "react";
import classnames from "classnames"
import { Nav, NavItem, NavLink } from "reactstrap";
const VerticalFormNavbar = ({data, activeTabVartical, toggleTabVertical}) => {
    return (
        <>
            <Nav vertical>
            {data.map((value, index) => {
                return (
                    <NavItem key={index} className={classnames({   current: activeTabVartical === index+1, })} >
                        <NavLink className={classnames({ active: activeTabVartical === index+1, })} onClick={() => { toggleTabVertical(index + 1) }} >
                            <div className="row">
                                <div className="col-md-10 text-start"><span className="number">{index+1}.</span>{value}</div>
                                <div className="col-md-2 text-end"><i className="mdi mdi-plus me-1 fs-2 fw-2" /></div>
                            </div>
                        </NavLink>
                        <br />
                    </NavItem>
                )
            })}
            </Nav>
        </>
    )
}
export default VerticalFormNavbar;