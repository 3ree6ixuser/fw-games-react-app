import React from "react";
import { Input, Card, Button, CardBody, CardTitle, Col, Label, Row } from "reactstrap"
import { Formik, Field  } from "formik"
const FWFEvent = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle>FWF Event</CardTitle>
                    <Row>
                        <Col lg="6" className="mb-3">
                            <Label>Event Start Date and Time</Label>
                            <Field type="datetime-local" className="form-control" name="start_date_time"/>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Event Closing Date and Time</Label>
                            <Field type="datetime-local" className="form-control" name="close_date_time"/>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Event Name</Label>
                            <Field type="text" className="form-control" name="name" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label>Event Tagline</Label>
                            <Field type="text" className="form-control" name="tagline" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Label>Event Details</Label>
                            <Field as="textarea" className="form-control" name="details" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <div id="my-radio-group">Gender</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="gender" value="Male" /> Male
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="Female" /> Female
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="Other" /> Other
                                </label>
                            </div>
                        </Col>

                        <Col lg="6" className="mb-3">
                            <Field  type="checkbox"  name="is_disability_competition"  />
                            (Disability) Para Participants
                        </Col>
                        <Col lg="6" className="mb-3">
                            <div id="my-radio-group">Gender</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="para_gender" value="Para Male" />Para Male
                                </label>
                                <label>
                                    <Field type="radio" name="para_gender" value="Para Female" />Para Female
                                </label>
                                <label>
                                    <Field type="radio" name="para_gender" value="Para Other" />Para Other
                                </label>
                            </div>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="contactName">Event Contact Person Name</Label>
                            <Field type="text" className="form-control" name="contactName"/>
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="designation">Designation</Label>
                            <Field type="text" className="form-control" name="designation" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="email">Email Id</Label>
                            <Field type="email" className="form-control" name="email" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="mobile">Mobile</Label>
                            <Field type="number" className="form-control" name="mobile" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="whatsapp">WhatsApp Number</Label>
                            <Field type="number" className="form-control" name="whatsapp" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Link</CardTitle>
                    <Row>
                        <Col lg="6" className="mb-3">
                            <Label for="main_image">Event Main Image</Label>
                            <Input type="file" className="form-control" name="main_image" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="optional_image_1">Event Optional Image 1</Label>
                            <Input type="file" className="form-control" name="optional_image_1" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="optional_image_2">Event Optional Image 2</Label>
                            <Input type="file" className="form-control" name="optional_image_2" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Link</CardTitle>
                    <Row>

                        <Col lg="6" className="mb-3">
                            <Label for="video_link">Video Link</Label>
                            <Field type="text" className="form-control" name="video_link" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="website_link">Event Website Link</Label>
                            <Field type="text" className="form-control" name="website_link" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="instagram_link">Event Instagram Link</Label>
                            <Field type="text" className="form-control" name="instagram_link" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="facebook_link">Event Facebook Link</Label>
                            <Field type="text" className="form-control" name="facebook_link" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="linkedin_link">Event LinkedIn Link</Label>
                            <Field type="text" className="form-control" name="linkedin_link" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="youtube_link">Event YouTube Link</Label>
                            <Field type="text" className="form-control" name="youtube_link" />
                        </Col>
                        <Col lg="6" className="mb-3">
                            <Label for="other_link">Event Any Other Link</Label>
                            <Field type="text" className="form-control" name="other_link" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Field type="checkbox" name="accept_terms" />
                            <Label for="accept_terms"> Accept Terms & Conditions</Label>
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Field type="checkbox" name="term_condition" />
                            <Label for="term_condition"> I accept terms and conditions of the website. The above-given details are true and legal. This area is for testing purposes. </Label>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default FWFEvent;