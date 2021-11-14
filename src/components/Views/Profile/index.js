import {
    Badge,
    Button,
    Card,
    Col,
    Form,
    Container,
    FloatingLabel,
    ListGroup,
    Row,
    Spinner,
    InputGroup
} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import './profile.css'
import {setAge, setLocation, setName, setWeapon} from "../../../Redux/Actions/ProfileAction";
import {useState} from "react";


const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector((store) => store.profile.name);
    const age = useSelector((store) => store.profile.age);
    const weapon = useSelector((store) => store.profile.weapon);
    const location = useSelector((store) => store.profile.location);
    const store = useSelector((store) => store);
    const [localName, setLocalName] = useState(name)
    const [localAge, setLocalAge] = useState(age)
    const [localLocation, setLocalLocation] = useState(location)
    const [localWeapon, setLocalWeapon] = useState(weapon)

    console.log(store);

    const saveName = () => {
        dispatch(setName(localName))
    }
    const saveAge = () => {
        dispatch(setAge(localAge))
    }
    const saveWeapon = () => {
        dispatch(setWeapon(localWeapon))
    }
    const saveLocation = () => {
        dispatch(setLocation(localLocation))
    }


    return (
        <>
        <Container>
            <Row className={'justify-content-center'}>
                <Col xs={6}>
                    <h2 className={'text-warning'}>Profile</h2>
                    <FloatingLabel
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control disabled type="text" className={'disabled grey-dim text-warning'} value={name} />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Age"
                        className="mb-3"
                    >
                        <Form.Control disabled type="text" className={'disabled grey-dim text-warning'} value={age} />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Weapon"
                        className="mb-3"
                    >
                        <Form.Control disabled type="text" className={'disabled grey-dim text-warning'} value={weapon} />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Location"
                        className="mb-3"
                    >
                        <Form.Control disabled type="text" className={'disabled grey-dim text-warning'} value={location} />
                    </FloatingLabel>
                </Col>
                <Col xs={6}>
                    <h2 className={'text-warning'}>
                        Edit Profile
                    </h2>
                    <InputGroup className="mb-3">
                        <Form.Control className={'h58'} type="text" placeholder="Name" value={localName} onChange={(e) => setLocalName(e.target.value)} />
                        <Button variant="outline-secondary" onClick={saveName}>
                            Save
                        </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control className={'h58'} type="text" placeholder="Age"
                                      value={localAge} onChange={(e) => setLocalAge(e.target.value)}/>
                        <Button variant="outline-secondary" onClick={saveAge}>
                            Save
                        </Button>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control className={'h58'} type="text" placeholder="Weapon"
                                      value={localWeapon} onChange={(e) => setLocalWeapon(e.target.value)}/>
                        <Button variant="outline-secondary" onClick={saveWeapon}>
                            Save
                        </Button>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control className={'h58'} type="text" placeholder="Location"
                                      value={localLocation} onChange={(e) => setLocalLocation(e.target.value)}/>
                        <Button variant="outline-secondary" onClick={saveLocation}>
                            Save
                        </Button>
                    </InputGroup>
                </Col>
            </Row>

        </Container>
        </>
    )
}

Profile.displayName = 'Profile';
export default Profile;