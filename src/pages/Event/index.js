import React, { useState } from "react"
import { Card, CardBody, Col, Container, Row, TabContent, TabPane, Button} from "reactstrap"
import { Formik, Form  } from "formik"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import VerticalFormNavbar from "../../components/Common/VerticalFormNavbar"
import FWFEvent from "pages/Event/Commponets/FWFEvent"
import EventSport from "pages/Event/Commponets/EventSport"
import Challenge from "pages/Event/Commponets/Challenge"

const data = [
	'Step 1: Add New FWF Event',
	'Step 2: Add Event Sports',
	'Step 3: Contact Event Staff',
	'Step 4: Choose Event Staff',
	'Step 5: Event Day Manage',
	'Step 6: Event Finance'
];

const Event = () => {
	const initialValues = {
			start_date_time: '',
			close_date_time: '',
			name: '',
			tagline: '',
			details: '',
			gender: '',
			is_disability_competition: '',
			gender: '',
			contactName: '',
			designation: '',
			email: '',
			mobile: '',
			whatsapp: '',
			main_image: '',
			optional_image_1: '',
			optional_image_2: '',
			video_link: '',
			website_link: '',
			instagram_link: '',
			facebook_link: '',
			linkedin_link: '',
			youtube_link: '',
			other_link: '',
			accept_terms: '',
			term_condition: '',
	  };

	document.title = "Manage Event | Sport kutumb";
	const [activeTabVartical, setoggleTabVertical] = useState(1)
	const [passedStepsVertical, setPassedStepsVertical] = useState([1])

	function toggleTabVertical(tab) {
		if (activeTabVartical !== tab) {
			var modifiedSteps = [...passedStepsVertical, tab]
			if (tab >= 1 && tab <= 6) {
				setoggleTabVertical(tab)
				setPassedStepsVertical(modifiedSteps)
			}
		}
	}

	const handleSubmit = (values) => {
        console.log(values,'values');
    }

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid={true}>
					<Breadcrumbs title="" breadcrumbItem="FWG EVENT" />
					<Row>
						<Col lg="4">
							<Card>
								<CardBody>
									<div className="wizard" >
										<div className="steps">
											<VerticalFormNavbar data={data}  activeTabVartical={activeTabVartical} toggleTabVertical={toggleTabVertical}/>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>

						<Col lg="8">
							<Formik initialValues={initialValues} onSubmit={handleSubmit}>
								<Form>
									<TabContent activeTab={activeTabVartical} className="" >
										<TabPane tabId={1}>
											<FWFEvent />
										</TabPane>

										<TabPane tabId={2}>
											<EventSport />
										</TabPane>

										<TabPane tabId={3}>
											<Challenge />
										</TabPane>

										<TabPane tabId={4}>
										</TabPane>

										<TabPane tabId={5}>
										</TabPane>
										
										<TabPane tabId={6}>
										</TabPane>
									</TabContent>
								</Form>
							</Formik>
							<div className="actions clearfix">
								<ul>
									<li className={activeTabVartical === 1 ? "previous disabled" : "previous" }>
										<Link to="#" onClick={() => { toggleTabVertical(activeTabVartical - 1)  }}> Previous </Link>
									</li>
									<li className={   activeTabVartical === 4 ? "next disabled" : "next" } >
									<Link to="#" onClick={() => { toggleTabVertical(activeTabVartical + 1) }}> Next </Link>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	)
}

export default Event;
