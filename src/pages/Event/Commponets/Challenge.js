import React from "react";
import { Button, Card, CardBody, CardTitle, Col, Label, Row } from "reactstrap";
import { Field } from "formik";
const Challenge = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle>Challenge</CardTitle>
                    <Row>
                        <Col lg="12" className="mb-3">
                            <Label>Select Competition</Label>
                            <Field name="game_system" className="form-control" as="select" defaultValue="">
                                <option value="">--Select--</option>
                                <option value="Pool">Pool</option>
                                <option value="Knockout">Knockout</option>
                                <option value="Best">Best Top</option>
                            </Field>
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Label>Equipment Used</Label>
                            <Field name="equipment" className="form-control" as="textarea" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Button type="button">Add Excercise</Button>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Excercise</Label>
                            <Field name="excercise" className="form-control" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Select Point System</Label>
                            <Field name="point_type" className="form-control" as="select" defaultValue="">
                                <option value="">--Select--</option>
                                <option>Time</option>
                                <option>Weight</option>
                                <option></option>
                                <option></option>
                            </Field>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}
export default Challenge;