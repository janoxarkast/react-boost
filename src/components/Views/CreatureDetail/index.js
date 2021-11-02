import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useApi} from "../../../Hooks/useApi";
import { useParams} from "react-router-dom";


const CreatureDetail = () => {
    let { id } = useParams();
    const { data: creature, loading } = useApi(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`)

    return (
        <>

            <Container>
                { loading && <Spinner variant={'light'} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> }
                {creature && creature.data &&
                <>
                    <Row className={'my-5'}>
                        <h1 className={'text-white'}>Creatures Compendium</h1>
                    </Row>
                    <Row xs={1} className="g-4">
                        <Col>
                            <Card bg={'dark'} text={'white'} border={'warning'} >
                                <Card.Header>
                                    <Card.Title className={'text-capitalize'}>{creature.data.name}</Card.Title></Card.Header>
                                <Card.Img variant="top"
                                          src={`https://botw-compendium.herokuapp.com/api/v2/entry/${creature.data.name}/image`}/>
                                <Card.Body>
                                    <Card.Text>
                                        {creature.data.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
                }
            </Container>

        </>

    )
}

CreatureDetail.displayName = 'CreatureDetail';
export default CreatureDetail;