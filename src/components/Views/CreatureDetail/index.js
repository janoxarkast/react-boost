import {Badge, Card, Col, Container, ListGroup, Row, Spinner} from "react-bootstrap";
import {useApi} from "../../../Hooks/useApi";
import {useParams} from "react-router-dom";
import "./creature-detail.css"


const CreatureDetail = () => {
    let {id} = useParams();
    const {data: creature, loading} = useApi(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`)

    return (
        <>
            <Container>
                {loading && <Spinner variant={'light'} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {creature && creature.data &&
                <>
                    <Row className={'my-5'}>
                        <h1 className={'text-white'}>Creatures Compendium</h1>
                    </Row>
                    <Row xs={1} className="g-4">
                        <Col>
                            <article className="postcard dark red">
                                <a className="postcard__img_link" href="#">
                                    <img className="postcard__img"
                                         src={`https://botw-compendium.herokuapp.com/api/v2/entry/${creature.data.name}/image`}
                                         alt={creature.data.name}/>
                                </a>
                                <div className="postcard__text">
                                    <h1 className="postcard__title red"><a href="#">{creature.data.name}</a></h1>
                                    <div className="postcard__subtitle small text-warning">
                                        {creature.data.category}
                                    </div>
                                    <div className="postcard__bar"></div>
                                    <div className="postcard__preview-txt">
                                        {creature.data.description}
                                    </div>
                                </div>
                            </article>

                            <article className={'postcard dark red'}>
                                <div className="postcard__text">
                                    <Row className={'mt-3'}>
                                        <Col>
                                            <h4 className="postcard__title red text-center">Locations</h4>
                                            <ul className="postcard__tagbox">
                                                {creature.data.common_locations.length > 0 &&
                                                creature.data.common_locations.map((loc, index) => (
                                                    <li key={index} className="tag__item">{loc}</li>))}
                                            </ul>
                                        </Col>
                                        <Col>
                                            <h4 className="postcard__title red text-center">Drops</h4>
                                            <ListGroup>
                                                {
                                                creature.data.drops.length > 0 &&
                                                creature.data.drops.map((drop, index) => (
                                                    <ListGroup.Item key={index} action variant="dark">{drop}</ListGroup.Item>))
                                                }
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </article>
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