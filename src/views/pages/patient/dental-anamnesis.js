import React, {useState, useEffect, useRef} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Card, CardBody, CardHeader, Label, InputGroup, InputGroupAddon} from 'reactstrap';
import axios from '../../../helpers/axiosConfig'
import {Redirect} from 'react-router-dom';
import SimpleModal from "../components/SimpleModal";

const DentalAnamnesis = ({location}) => {
    //MODAL}}}###############################################################
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
        const res = await axios.post("photo/odonto_geriatra/obtain", {anamnId: location.state.anamId})
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
            axios.post("file/img_odonto/" + location.state.run, f)
            .then(response => {
                saveFile();
            }).catch(error => {
                console.log(error);
            });
        };
    };

    const saveFile = async () => {
        const res = await axios.post("photo/odonto_geriatra",
            {anamnId : location.state.anamId,
            nombreImagen: fileName + '.' + fileType,
            ruta: "static/images_anam_odonto/" + location.state.run}
        );
        if (!res.data.error) {
            fetchFiles();
            cleanFile();
            setHelpText(defaultHelpText);
            setHasFile(false);
        }; 
    };    

    const removeFile = async (fId, name) => {
        const res = await axios.post("photo/odonto_geriatra/rm/", {
            fId : fId,
            route : location.state.run + '/' + name
        });
        if (!res.data.error) {
            fetchFiles();
        }; 
    };

    const [defreal, setDefreaL] = useState(false)
    const [ausenciaEncia, setAusenciaEncia] = useState(false)
    const [recesionesGingivales, setRecesionesGingivales] = useState(false)
    const [posicionAberrante, setPosicionAberrante] = useState(false)
    const [profundidad, setProfundidad] = useState(false)
    const [other, setOther] = useState(false)
    const [parcialTeeth, setParcialTeeth] = useState(false)
    const [totalTeeth, setTotalTeeth] = useState(false)
    const [parcialRemovableProstheses, setParcialRemovableProstheses] = useState(false)
    const [totalRemovableProstheses, setTotalRemovableProstheses] = useState(false)
    const [fixedProstheses, setFixedProstheses] = useState(false)
    const [fixedProsthesesImplants, setFixedProsthesesImplants] = useState(false)
    const [prosthesesMaterial, setProsthesesMaterial] = useState("")
    
    const [icdas2Index, setIcdas2Index]=useState(0)
    const [cpodIndex, setCpodIndex]=useState(0)

    const [next, setNext] = useState(false)


    const [boton, setBoton] = useState(0)

    
    const onSubmit = e => {
        e.preventDefault();
        if (boton === 1) {
            addDentalAnamnesis(e);
        }
    }
    

    

    const addDentalAnamnesis = async (e) => {
        e.preventDefault()
        const res = await axios.post("geriatrical-odonto-anamnesis/",
            {
                anamId: location.state.anamId,

                defreal: defreal,
                ausenciaEncia: ausenciaEncia,
                recesionesGingivales: recesionesGingivales,
                posicionAberrante: posicionAberrante,
                profundidad: profundidad,
                other: other,
                parcialTeeth: parcialTeeth,
                totalTeeth: totalTeeth,
                parcialRemovableProstheses: parcialRemovableProstheses,
                totalRemovableProstheses: totalRemovableProstheses,
                fixedProstheses: fixedProstheses,
                fixedProsthesesImplants: fixedProsthesesImplants,
                prosthesesMaterial: prosthesesMaterial,
                icdas2Index:icdas2Index,
                cpodIndex:cpodIndex


            }, {headers: {'x-access-token': localStorage.getItem('user')}}
        )
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
                        Anamnesis Odonto-geriátrica
                    </h1>
                    <h5 className="heading-small">Examen protésico</h5>

                    <Form onSubmit={onSubmit} role="form">
                        <FormGroup className="row">
                            <Col md="10">

                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="parcialTeeth"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setParcialTeeth(!parcialTeeth)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="parcialTeeth"
                                    >Dentado parcial</label>
                                </div>

                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="totalTeeth"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setTotalTeeth(!totalTeeth)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="totalTeeth"
                                    >Dentado total</label>
                                </div>

                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="parcialRemovableProstheses"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setParcialRemovableProstheses(!parcialRemovableProstheses)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="parcialRemovableProstheses"
                                    >Prótesis removible parcial
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="totalRemovableProstheses"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setTotalRemovableProstheses(!totalRemovableProstheses)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="totalRemovableProstheses"
                                    >Prótesis removible total
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="fixedProstheses"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setFixedProstheses(!fixedProstheses)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="fixedProstheses"
                                    >Prótesis fija
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="fixedProsthesesImplants"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setFixedProsthesesImplants(!fixedProsthesesImplants)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="fixedProsthesesImplants"
                                    >Prótesis fija sobre implantes
                                    </label>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label
                                    className="form-control-label"
                                >
                                    Tipo de prótesis(Material)
                                </Label>

                                <Input
                                    defaultValue=""
                                    id="example-text-input"
                                    type="textarea"
                                    onChange={(e) => {
                                        setProsthesesMaterial(e.target.value)
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <br/>
                        <h5 className="heading-small">Examen clínico de la encía </h5>
                        <FormGroup className="row">

                            <Col md="6">
                                <Label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect3"
                                    md="6"
                                >
                                    Alteraciones mucogingivales
                                </Label>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="defreal"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setDefreaL(!defreal)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="defreal"
                                    >Deficiencia reborde alveolar (horizontal y/o vertical)</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="ausenciaEncia"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setAusenciaEncia(!ausenciaEncia)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="ausenciaEncia"
                                    >Ausencia de encía adherida/mucosa queratinizada</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="recesionesGingivales"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setRecesionesGingivales(!recesionesGingivales)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="recesionesGingivales"
                                    >Recesiones gingivales</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="posicionAberrante"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setPosicionAberrante(!posicionAberrante)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="posicionAberrante"
                                    >Inserción de frenillo en posición aberrante</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="profundidad"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setProfundidad(!profundidad)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="profundidad"
                                    >Profundidad de fondo de vestíbulo disminuida</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-primary">
                                    <Input
                                        className="custom-control-input"
                                        id="other"
                                        type="checkbox"
                                        onChange={(e) => {
                                            setOther(!other)
                                        }}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="other"
                                    >Otra</label>
                                </div>
                            </Col>
                        </FormGroup>
                        <br/>
                        <h5 className="heading-small">Evaluación cariológica</h5>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label">
                                    ICDAS 2 (
                                        <a href="https://drive.google.com/drive/u/4/folders/1TX99pqC0ptNFf86B8iEPb0gTsC0VDkOX" target="_blank">ver</a>)
                                </Label>
                                <Input
                                    max="9999" min="-9999"
                                    name="icdas2_index"
                                    type="number"
                                    onChange={e => {setIcdas2Index(e.target.value)}}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col>
                                <Label className="form-control-label">
                                    CPOD (
                                        <a href="https://drive.google.com/drive/u/4/folders/1TX99pqC0ptNFf86B8iEPb0gTsC0VDkOX" target="_blank">ver</a>)
                                </Label>
                                <Input
                                    max="9999" min="-9999"
                                    name="cpod_index"
                                    type="number"
                                    onChange={e => {setCpodIndex(e.target.value)}}
                                />
                            </Col>
                        </FormGroup>
                        <br/>
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
                        </FormGroup>
                    </Form>
                    {next && <Redirect to={{
                        pathname: "/admin/extra-oral",
                        state: {
                            id: location.state.id,
                            run: location.state.run,
                            name: location.state.name,
                            apellido: location.state.apellido,
                            anamId: location.state.anamId
                        }
                    }}/>}
                </CardBody>
            </Card>
        </Container>
    )
}

export default DentalAnamnesis
