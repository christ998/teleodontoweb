import React, {useState, useEffect} from 'react'
import {Button, Col, Container, Form, FormGroup, Input, Card, CardBody, Label} from 'reactstrap'
import Axios from '../../../helpers/axiosConfig'
import {getList} from 'helpers/ListHelper';
import {Redirect} from 'react-router-dom';

const AnamnesisGeneral = ({location}) => {

    const addAnamnesis = async (e) => {
        e.preventDefault()
        const res = await Axios.post("general-anamnesis/",
            {

                personId: location.state.id,
                allergies: selData.alergias,
                otherDisease: selData.otros_observaciones,
                underTreatment: selData.bajo_tratamiento,
                previousSurgeries: selData.cirugias,
                medicineDose: selData.farmacos,
                medicineAllergies: selData.alergias_farmacos,
                radioChemoTherapy: selData.radioterapia,
                selectedDiseases: selDiseases,
                consult_motive: selData.motivo_consulta,
                consult_motive_history: selData.motivo_consulta_historial,
                medic_alert: selData.alerta_medica
            })
        if (!res.data.error)
            setNext(true)


    };
    const [prmDiseases, setPrmDiseases] = useState([]);
    const [selDiseases, setSelDiseases] = useState([]);
    const [selData, setSelData] = useState({bajo_tratamiento: false});
    const [next, setNext] = useState(false)
    const getData = async (set, route) => {
        const e = await getList(route)
        set(e)
    }

    useEffect(() => {
        getData(setPrmDiseases, "list/diseases")
    }, [])

    const handleInputChangeCheck = e => {
        var ind = selDiseases.indexOf(e.target.id)
        if (selDiseases.includes(e.target.id)) {
            selDiseases.splice(ind, 1)
            // console.log(selDiseases)
        } else {
            setSelDiseases(selDiseases.concat(e.target.id))
        }
    };

    const handleInputChange = e => {
        // console.log(e.target.text)
        setSelData({
            ...selData,
            [e.target.name]: e.target.value
        });
    };

    const handleInputChangeYN = e => {
        setSelData({
            ...selData,
            [e.target.name]: !selData.bajo_tratamiento
        })
    };
    
    const reqTag = <span style={{color: "#DC3545"}}>*</span>

    return (
        <Container>
            <Card>
                <CardBody>
                    <h3>{location.state.run}, {location.state.name} {location.state.apellido}</h3>
                    <h1>Paciente</h1>
                    <Form onSubmit={addAnamnesis} role="form">
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Motivo
                                    Consulta</Label>
                                <Input
                                    type="textarea"
                                    name="motivo_consulta" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                    // required
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Historial del
                                    motivo de Consulta</Label>
                                <Input
                                    type="textarea"
                                    name="motivo_consulta_historial" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                    //required
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Alerta m??dica
                                    especial y comentarios relevantes sobre el paciente</Label>
                                <Input
                                    type="textarea"
                                    name="alerta_medica" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                    //required
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="exampleFormControlSelect3">Antecedentes
                                    m??rbidos personales</Label>
                                {prmDiseases.map(disease => (
                                    <div key={disease.name}
                                         className="custom-control custom-checkbox custom-checkbox-primary">
                                        <Input
                                            className="custom-control-input"
                                            id={disease.disease_id}
                                            type="checkbox"
                                            name={disease.name}
                                            onChange={e => {
                                                handleInputChangeCheck(e)
                                            }}
                                        />
                                        <label className="custom-control-label"
                                               htmlFor={disease.disease_id}>{disease.name}</label>
                                    </div>
                                ))}
                                <div>
                                    <Input
                                        placeholder="Otros/Observaciones"
                                        defaultValue=""
                                        type="textarea"
                                        name="otros_observaciones" //Nose a que campo de la base de datos se refiere
                                        onChange={e => {
                                            handleInputChange(e)
                                        }}
                                    />
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Est?? bajo
                                    tratamiento</Label>
                                <div><label className="custom-toggle custom-toggle-warning mr-1">
                                    <Input
                                        type="checkbox"
                                        name="bajo_tratamiento" //Nose a que campo de la base de datos se refiere
                                        onChange={e => {
                                            handleInputChangeYN(e)
                                        }}/>
                                    <span
                                        className="custom-toggle-slider rounded-circle"
                                        data-label-off="No"
                                        data-label-on="S??"
                                    />
                                </label></div>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Alergias </Label>
                                <Input
                                    type="textarea"
                                    //required
                                    name="alergias" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Cirug??as previas/
                                    Hospitalizaci??n/ </Label>
                                <Input
                                    type="textarea"
                                    //required
                                    name="cirugias" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">F??rmacos y
                                    Posolog??a </Label>
                                <Input
                                    type="textarea"
                                    //required
                                    name="farmacos" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Alergia a F??rmacos
                                    (especificar cu??l) </Label>
                                <Input
                                    type="textarea"
                                    //required
                                    name="alergias_farmacos" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label" htmlFor="example-text-input">Radioterapia /
                                    Quimioterapia </Label>
                                <Input
                                    type="textarea"
                                    //required
                                    name="radioterapia" //Nose a que campo de la base de datos se refiere
                                    onChange={e => {
                                        handleInputChange(e)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col md="10">
                            </Col>
                            <Col md="2">

                                <Button type="submit" color="primary">Registrar</Button>

                            </Col>
                        </FormGroup>
                    </Form>
                    {next && <Redirect to={{
                        pathname: "/admin/list-patient-anamnesis",
                        state: {
                            id: location.state.id,
                            run: location.state.run,
                            name: location.state.name,
                            apellido: location.state.apellido,
                            anamnesisGeneral:true
                        }
                    }}/>}
                </CardBody>
            </Card>
        </Container>
    )
}

export default AnamnesisGeneral