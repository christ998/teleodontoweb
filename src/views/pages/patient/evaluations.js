import React, {useState, useRef} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Card, CardBody, ModalHeader, Label, InputGroup, InputGroupAddon, InputGroupText, CardHeader} from 'reactstrap';
import axios from '../../../helpers/axiosConfig'
import {Redirect} from 'react-router-dom';
import SimpleModal from "../components/SimpleModal";

const CovidRisk = ({location}) => {
    const modalRef = useRef()
    const setModal = (options) => {
        modalRef.current.setModal(options);
    };

     //FILE###################################################################
     const [fileName, setFileName] = useState("");
     const [fileType, setFileType] = useState("");
     const [file, setFile] = useState({});
     const [hasFile, setHasFile] = useState(false);
     const [files, setFiles] = useState([]);
     const extAllowed = "jpeg jpg png";
     const sizAllowed = 7000000;
     const defaultHelpText = extAllowed + " (max: " + sizAllowed / 1000000 + " MB)";
     const [helpText, setHelpText] =useState(defaultHelpText);
 
     const handleHasFile = () => {
         setHasFile(!hasFile);
         cleanFile();
         setHelpText(defaultHelpText);
     };
 
     const fetchFiles= async () => {
         const res = await axios.post("photo/medico_geriatra/obtain", {anamnId: location.state.anamId})
         if (!res.data.error) {
             setFiles(res.data.result);
             setModal({});
         };       
     };
 
     const loadFile = (file) => {
         if (file[0]?.name) {
             const size = file[0].size;
             const full = file[0]?.name;
             const type = full.slice((full.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
             if (extAllowed.indexOf(type) >= 0) {
                 if (size <= sizAllowed) {
                     setFileName(full.slice(0, (full.lastIndexOf('.'))));
                     setFileType(type);
                     setFile(file);
                     setHelpText(full);
                     return;
                 } else {
                     cleanFile();
                     setHelpText("Tamaño de archivo invalido");
                     return;
                 };
             };
             cleanFile();
             setHelpText("Formato de archivo invalido");
         };
     };
 
     const cleanFile = () => {
         setFileName("");
         setFileType("");
         setFile({});
     };
 
     const uploadFile = () => {
         if (fileName) {
             const f = new FormData();
             f.append("file", file[0], fileName + '.' + fileType);
             axios.post("file/img_medico/" + location.state.run, f)
             .then(response => {
                 saveFile();
             }).catch(error => {
                 console.log(error);
             });
         };
     };
 
     const saveFile = async () => {
         const res = await axios.post("photo/medico_geriatra",
             {anamnId : location.state.anamId,
             nombreImagen: fileName + '.' + fileType,
             ruta: "static/images_anam_medico/" + location.state.run}
         );
         if (!res.data.error) {
             fetchFiles();
             cleanFile();
             setHelpText(defaultHelpText);
             setHasFile(false);
         }; 
     };    
 
     const removeFile = async (fId, name) => {
         const res = await axios.post("photo/medico_geriatra/rm/", {
             fId : fId,
             route : location.state.run + '/' + name
         });
         if (!res.data.error) {
             fetchFiles();
         }; 
     };

    const [next, setNext] = useState(false)
    const [datos, setDatos] = useState({
        folstein_value: null,
        pfeiffer_value: null,
        yesavage_value: null,
    });

    const [boton, setBoton] = useState(0)

    const onSubmit = e => {
        e.preventDefault();
        if (boton === 1) {
            addEvaluations(e);
        }
    }

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const addEvaluations = async (e) => {
        e.preventDefault()
        const res = await axios.post("geriatrical-medical-anamnesis/evaluations",
            {
                anamnId: location.state.anamId,
                folstein_value: datos.folstein_value,
                pfeiffer_value: datos.pfeiffer_value,
                yesavage_value: datos.yesavage_value,
            })
        if (!res.data.error)
            setNext(true)
    }

    return (
        <Container>
            <SimpleModal ref={modalRef}/>
            <Card>
                <CardBody>
                    <h3>{location.state.run}, {location.state.name} {location.state.apellido}</h3>
                    <h1>
                        Anamnesis Médico - Geriatra
                    </h1>
                    
                    <h5 className="heading-small">Evaluaciones Cognitivas</h5>

                    <Form onSubmit={onSubmit} role="form">
                        <FormGroup className="row">
                            <Col md="4">
                                <Label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect3"
                                >
                                    Cuestionario Minimental de Folstein (
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScRtpK-rWTYO1W2BrPXahVfY_YZ5aQ8Hf3NlrKnWvt4UAV8JQ/viewform"
                                       target="_blank">
                                        ver</a>) 
                                </Label>
                                <Input
                                    placeholder=""
                                    id="example-text-input"
                                    name="folstein_value"
                                    type="number"
                                    onChange={(e) => {
                                        handleInputChange(e)
                                    }}
                                    
                                />
                            </Col>
                            <Col md="4">
                                <Label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect3"
                                >
                                    Test de Pfeiffer (
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScOfJZpOKaTXd2OQ6RkgpvhByXY51RzeNtlH24rkiQJ1DCZiw/viewform"
                                       target="_blank">
                                        ver</a>) 
                                </Label>
                                <Input
                                    placeholder=""
                                    id="example-text-input"
                                    name="pfeiffer_value"
                                    type="number"
                                    onChange={(e) => {
                                        handleInputChange(e)
                                    }}
                                    
                                />
                            </Col>
                            
                        </FormGroup>
                        <h5 className="heading-small">Evaluación Anímica</h5>

                        <FormGroup className="row">
                        <Col md="4">
                                <Label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect3"
                                >
                                    Cuestionario de Yesavage (
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScmoS5sWNzDJG9k7ssG4D4M_2jCT8IqplAQ8beLLPZNqfPSjg/viewform"
                                       target="_blank">
                                        ver</a>) 
                                </Label>
                                <Input
                                    placeholder=""
                                    id="example-text-input"
                                    name="yesavage_value"
                                    type="number"
                                    onChange={(e) => {
                                        handleInputChange(e)
                                    }}
                                    
                                />
                            </Col> 
                        </FormGroup>
                        <h5 className="heading-small">Imagenes disponibles</h5>
                        <FormGroup className="row">
                            <Col md="6">
                                {files.map((file) => (
                                    <div key={file.foto_id} className="list-group mb-2">
                                        <InputGroup>
                                            <Button className="mr-2" color="danger" size="sm" outline onClick={() => setModal({title: 'Confirmación', text: 'Desea eliminar ' + file.foto_nombre + '?', type: 2, fx: () => removeFile(file.foto_id, file.foto_nombre)})}><i className="far fa-trash-alt"/></Button>
                                            <a rel="noopener noreferrer" target="_blank" href={process.env.REACT_APP_API_URL + `${file.url}` + "/" + `${file.foto_nombre}`}>{file.foto_nombre}</a>
                                        </InputGroup>
                                    </div>
                                ))}
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <FormGroup className="row">
                                            <Col className="d-flex">
                                                <Label className="form-control-label">¿Subir una nueva imagen?</Label>
                                                <label className="custom-toggle custom-toggle-info ml-3">
                                                    <Input type="checkbox" checked={hasFile} onChange={() => handleHasFile()}/>
                                                    <span className="custom-toggle-slider rounded-circle" data-label-off="No" data-label-on="Sí"/>
                                                </label>
                                            </Col>
                                        </FormGroup>
                                    </CardHeader>
                                    {hasFile &&
                                        <CardBody>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <Button 
                                                            type="button" color="primary"
                                                            onClick={() => uploadFile()}>
                                                            Agregar 
                                                        </Button>
                                                    </InputGroupAddon>
                                                    <Input
                                                        autoComplete="off"
                                                        type="text"
                                                        name="treatment_plan"
                                                        value={fileName}
                                                        onChange={e => setFileName(e.target.value)}
                                                    />
                                                    <InputGroupAddon addonType="append">
                                                        <Button 
                                                            type="button" color="primary" 
                                                            onClick={() => {document.getElementById('files').click()}}>
                                                            Buscar
                                                        </Button>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                                <h5 align="right" style={{marginRight: "10px", marginBottom: "0px"}}>{helpText}</h5>
                                                <input 
                                                    type="file" 
                                                    accept="image/*"
                                                    id="files" 
                                                    style={{visibility: 'hidden'}} 
                                                    onChange={e => loadFile(e.target.files)}
                                                />
                                            </FormGroup>
                                        </CardBody>
                                    }
                                </Card>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col md="10">
                               
                            </Col>
                            <Col md="2">
                                <Button type="submit" onClick={() => (setBoton(1))} color="primary">Guardar</Button>
                            </Col>
                            {next && <Redirect to={{
                                pathname: "/admin/list-patient-anamnesis",
                                state: {id: location.state.id, run: location.state.run, name: location.state.name, medicalAnamnesis:true}
                            }}/>}
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CovidRisk
