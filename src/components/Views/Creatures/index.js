import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useApi} from "../../../Hooks/useApi";
import {Link} from "react-router-dom";
import './creatures.css'


const Creatures = () => {
    const {data: creatures, loading} = useApi('https://botw-compendium.herokuapp.com/api/v2/category/monsters')

    return (
        <>
            <Container>
                <Row className={'my-5'}>
                    <h1 className={'text-white'}>Creatures Compendium</h1>
                </Row>
                {loading && <Spinner variant={'light'} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                <Row xs={2} md={3} lg={3} className="g-4">
                    {creatures && creatures.data && creatures.data.map((_) => (
                        <Col key={_.id}>
                            <Card className={'text-white card-has-bg click-col'}
                                  style={{backgroundImage: `url("https://botw-compendium.herokuapp.com/api/v2/entry/${_.name}/image")`}}>
                                <img className="card-img d-none"
                                     src={`https://botw-compendium.herokuapp.com/api/v2/entry/${_.name}/image`}/>
                                <Card.ImgOverlay className={'card-img-overlay d-flex flex-column'}>
                                    <Card.Body>
                                        <small className="card-meta mb-2">{_.category}</small>
                                        <h4 className="card-title mt-0 "><Link className="text-white"
                                                                               to={`creature/${_.id}`}> {_.name}</Link>
                                        </h4>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="media">
                                            <Link to={`creature/${_.id}`}><Button
                                                variant={'outline-light'}> Dettaglio </Button>
                                            </Link>
                                        </div>

                                    </Card.Footer>
                                </Card.ImgOverlay>
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