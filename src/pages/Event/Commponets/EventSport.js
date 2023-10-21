
import React, { useState } from "react";
import { Card, CardBody, CardTitle, Col, Label, Row } from "reactstrap"
import { Field  } from "formik"
const EventSport = () => {
    const [innerCompetitions, setInnerCompetitions] = useState([]);

    const handleCompetitionChange = (e) => {
        if (e.target.value === "Inter") {
            setInnerCompetitions(["Inter School", "Inter College", "Inter Gym", "Inter Services", "Inter Corporates", "Inter Open"]);
        } else if (e.target.value === "National") {
            setInnerCompetitions(["District Competition", "State Competition", "National Competition"]);
        } else if (e.target.value === "International") {
            setInnerCompetitions(["International Competition"]);
        }
    }
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle>FWF Event</CardTitle>
                    <Row>
                        <Col lg="12" className="mb-3">
                            <Label>Select Competition</Label>
                            <Field name="competition" className="form-control" as="select" defaultValue="" onChange={handleCompetitionChange}>
                                <option value="">--Select--</option>
                                <option value="Inter">Inter</option>
                                <option value="National">National</option>
                                <option value="International">International</option>
                            </Field>
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Label>Select Competition</Label>
                            <Field name="inner_competion" className="form-control" as="select" defaultValue="">
                                <option value="">--Select--</option>
                                {innerCompetitions.map((value, index) => {
                                    return (
                                        <option key={index} value={value}>{value}</option>
                                        )
                                    })}
                            </Field>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h4>Competition <i className="fas fa-plus-circle text-success" style={{cursor:'pointer'}}></i></h4>
                    </CardTitle>
                    <Row>
                        <Col lg="12" className="mb-3">
                            <Label>Gender</Label>
                            <Field name="gender" className="form-control" as="select" multiple={true} defaultValue={[""]}>
                                <option disabled value="">--Select--</option>
                                <option value="male">Male / Boy</option>
                                <option value="female">Female / Girl</option>
                                <option value="para female">Para Female / Para Girl</option>
                            </Field>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Age Group</Label>
                            <Field name="age" className="form-control" as="select" defaultValue="">
                                <option  disabled value="">--Select--</option>
                                <option value="under 11">Under 11</option>
                                <option value="under 14">Under 14</option>
                                <option value="under 16">Under 16</option>
                                <option value="senior less than 23">Senior Less than 23</option>
                                <option value="master less than 45">Master less than 45</option>
                                <option value="open for all">Open for All</option>
                            </Field>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Age Weight Group</Label>
                            <Field name="age" className="form-control" as="select" defaultValue="">
                                <option  disabled value="">--Select--</option>
                                <option value="open for all">Open for All</option>
                            </Field>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default EventSport;