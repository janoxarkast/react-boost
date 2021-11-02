import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useApi} from "../../../Hooks/useApi";
import {Link} from "react-router-dom";


const Creatures = () => {
    const { data: creatures, loading } = useApi('https://botw-compendium.herokuapp.com/api/v2/category/monsters')

    return (
        <>
            <Container>
                <Row className={'my-5'}>
                    <h1 className={'text-white'}>Creatures Compendium</h1>
                </Row>
                { loading && <Spinner variant={'light'} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> }
                <Row xs={2} md={3} lg={3} className="g-4">
                    {creatures && creatures.data && creatures.data.map((_) => (
                        <Col key={_.id}>
                            <Card bg={'dark'} text={'white'} border={'warning'} >
                                <Card.Header>
                                    <Card.Title className={'text-capitalize'}>{_.name}</Card.Title></Card.Header>
                                <Card.Img variant="top"
                                          src={`https://botw-compendium.herokuapp.com/api/v2/entry/${_.name}/image`}/>
                                <Card.Body>
                                    <Card.Text>
                                        {_.description.substring(0, 90) + '...'}
                                    </Card.Text>
                                    <Button>
                                        <Link to={`creature/${_.id}`}> click me</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>

    )
}

Creatures.displayName = 'Creatures';
export default Creatures;