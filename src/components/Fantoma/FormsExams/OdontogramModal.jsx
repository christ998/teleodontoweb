import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Col, Form } from 'reactstrap';

const Odontogram = (props) => {
    const [clicked, setClicked]=useState(false)
    
    const initialTeethState = [
        { fdi_name: '11', teeth_state_id: 1 },
        { fdi_name: '12', teeth_state_id: 1 },
        { fdi_name: '13', teeth_state_id: 1 },
        { fdi_name: '14', teeth_state_id: 1 },
        { fdi_name: '15', teeth_state_id: 1 },
        { fdi_name: '16', teeth_state_id: 1 },
        { fdi_name: '17', teeth_state_id: 1 },
        { fdi_name: '18', teeth_state_id: 1 },
        { fdi_name: '21', teeth_state_id: 1 },
        { fdi_name: '22', teeth_state_id: 1 },
        { fdi_name: '23', teeth_state_id: 1 },
        { fdi_name: '24', teeth_state_id: 1 },
        { fdi_name: '25', teeth_state_id: 1 },
        { fdi_name: '26', teeth_state_id: 1 },
        { fdi_name: '27', teeth_state_id: 1 },
        { fdi_name: '28', teeth_state_id: 1 },
        { fdi_name: '31', teeth_state_id: 1 },
        { fdi_name: '32', teeth_state_id: 1 },
        { fdi_name: '33', teeth_state_id: 1 },
        { fdi_name: '34', teeth_state_id: 1 },
        { fdi_name: '35', teeth_state_id: 1 },
        { fdi_name: '36', teeth_state_id: 1 },
        { fdi_name: '37', teeth_state_id: 1 },
        { fdi_name: '38', teeth_state_id: 1 },
        { fdi_name: '41', teeth_state_id: 1 },
        { fdi_name: '42', teeth_state_id: 1 },
        { fdi_name: '43', teeth_state_id: 1 },
        { fdi_name: '44', teeth_state_id: 1 },
        { fdi_name: '45', teeth_state_id: 1 },
        { fdi_name: '46', teeth_state_id: 1 },
        { fdi_name: '47', teeth_state_id: 1 },
        { fdi_name: '48', teeth_state_id: 1 }
	]
    
    const [teethState, setTeethState] = useState(initialTeethState)
    const [matrix, setMatrix]= useState( { x: 0, y: 0, width: 0, height: 0 })
    const setColorId = (id) => color[teethState.find(teeth => teeth.fdi_name === id).teeth_state_id]
 
    const updateTeethStateChanged = (e) => {
            
        setClicked(!clicked)
        const tooth = teethState.find(teeth => teeth.fdi_name === e.target.id)/* .teeth_state_id */

        let counter
        counter=tooth.teeth_state_id

        if(counter === Object.keys(color).length) ///SI CONTADOR ES MAYOR A 5, SE CAMBIA A 1
        { counter = 1} else {
            counter++
        }
                
        let newTeethState = [ ...teethState ]
        
        const newTooth =newTeethState.find(teeth => teeth.fdi_name === e.target.id).teeth_state_id
        
        newTeethState.find(teeth => teeth.fdi_name === e.target.id).teeth_state_id = counter; 

        e.target.setAttribute('fill', color[tooth])

        const matrix = e.target.getBBox()
        
        setTeethState(newTeethState); 
        setMatrix(matrix) 
    }


    const color={
        1:'#434B4D', //ausente 
        2:'#F4F2E5', //completo
        3:'#E20000', //fracturado
        4:'#006666', //resto radicular
        5:'#878681' //implante
    }

    const saveData=()=>{
        props.updateOdontogram(props.odontogramId, teethState)
        props.setOpen(false)
    }

    


    useEffect(() => {

        //setColorId()

	},[]);
 
    
    return (
        <Modal
            className='custom-modal-style'
            isOpen={props.open}
            cssModule={{ 'modal-title': 'w-100 text-center' }}
            style={{ maxWidth: '60%', maxHeight: '50%' }}>
            <ModalHeader>
             Selector de piezas dentales
            </ModalHeader>
            <ModalBody>
                <div className="row">
                
                    <Col md="12">
                    
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            id='svg8'
                            width="100%"
                            height="700"
                            version="1.1"
                            viewBox="0 0 125.857 195.777"
                            
                        >
                            <g id='superior'>
                                <g id='quadrant-1'>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='11'
                                            strokeLinecap='butt'
                                            d='M100.597 44.106c-.77 1.972 1.226 4.122 2.408 5.88.919 1.367 1.963 2.952 3.53 3.459 1.155.373 2.643.204 3.6-.542 1.107-.863 1.264-2.527 1.625-3.883.513-1.93 1.924-4.338.738-5.944-1.413-1.914-4.67-1.555-7.028-1.245-1.777.234-4.22.605-4.872 2.274z'
                                            fill={setColorId('11')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        >
                                        </path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M102.722 44.676s1.044-.306 1.572-.436c.652-.162 1.302-.35 1.97-.429a12.486 12.486 0 012.602-.058c.634.058 1.87.387 1.87.387'
                                            display='inline'
                                        ></path>
                                    </g>
                                    
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='12'
                                            strokeLinecap='butt'
                                            d='M90.75 48.986c.126 1.417 1.858 2.186 2.993 3.043 1.398 1.056 2.865 2.639 4.613 2.518.723-.05 1.38-.67 1.747-1.295.597-1.016.565-2.333.454-3.507-.17-1.789-.178-4.14-1.684-5.122-1.547-1.008-3.924-.4-5.513.54-1.327.787-2.747 2.286-2.61 3.822z'
                                            fill={setColorId('12')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M92.227 48.772s.87-1.029 1.387-1.455c.446-.369.931-.705 1.46-.939a5.641 5.641 0 011.769-.475c.607-.054 1.822.156 1.822.156'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='13'
                                            strokeLinecap='butt'
                                            d='M81.83 56.49c.717 1.312 2.506 1.703 3.927 2.167 1.749.572 3.751 1.345 5.474.702.825-.309 1.554-1.115 1.758-1.972.365-1.524-.496-3.146-1.202-4.546-.69-1.367-1.47-2.976-2.875-3.584-2.038-.882-5.08-1.062-6.641.518-1.576 1.596-1.518 4.747-.441 6.715z'
                                            fill={setColorId('13')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M82.916 55.29s.721-2.867 1.703-3.884c.806-.836 3.14-1.512 3.14-1.512'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'

                                    >
                                        <path
                                            id='14'
                                            strokeLinecap='butt'
                                            d='M75.814 66.458c1.224 1.31 3.401 1.281 5.189 1.409 1.835.13 3.967.375 5.477-.676.723-.503 1.229-1.465 1.215-2.345-.024-1.567-1.201-2.98-2.29-4.107-1.49-1.542-3.37-3.145-5.507-3.325-1.949-.165-4.523.43-5.46 2.146-1.123 2.058-.224 5.184 1.376 6.898z'
                                            fill={setColorId('14')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M85.036 62.823s-.664-.197-1-.278c-.485-.116-.98-.4-1.468-.298-.431.09-.829.399-1.08.76-.39.558-.606 1.296-.529 1.972.038.33.23.646.467.878.26.255.674.286.974.492.211.146.569.518.569.518'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M80.245 59.808s.693.575.98.919c.277.332.683.659.703 1.091.017.386-.383.673-.537 1.028-.207.48-.2 1.064-.516 1.48a1.495 1.495 0 01-.687.476c-.382.135-.808.118-1.212.093-.474-.029-1.398-.281-1.398-.281'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='15'
                                            strokeLinecap='butt'
                                            d='M70.642 74.79c1.248 1.586 3.566 2.103 5.564 2.387 1.822.26 3.967.375 5.478-.676.722-.502 1.228-1.464 1.215-2.345-.024-1.567-1.202-2.98-2.29-4.106-1.49-1.543-3.37-3.145-5.507-3.326-1.949-.165-4.498.444-5.46 2.146-.985 1.742-.237 4.347 1 5.92z'
                                            fill={setColorId('15')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M80.027 71.688s-.55-.228-.84-.278c-.649-.11-1.39-.336-1.974-.032-.233.121-.334.414-.442.654-.245.544-.596 1.155-.448 1.733.072.282.362.468.6.638.32.23.732.304 1.08.492.253.138.728.465.728.465'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M74.997 69.311s.581.303.822.52c.387.348.831.722.969 1.224.072.264-.047.548-.11.815-.123.508-.2 1.064-.517 1.48-.169.221-.432.365-.687.475-.33.143-.694.206-1.053.227-.529.031-1.583-.149-1.583-.149'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='16'
                                            strokeLinecap='butt'
                                            d='M64.546 88.413c.77 1.498 2.691 2.12 4.275 2.69 1.812.654 3.91 1.383 5.73.752 1.588-.551 2.77-2.107 3.52-3.611 1.113-2.23 2.018-5.056 1.14-7.388-.49-1.3-1.964-2.031-3.194-2.677-2.354-1.236-5.145-2.895-7.69-2.121-1.6.486-2.648 2.251-3.276 3.802-1.073 2.647-1.812 6.013-.505 8.553z'
                                            fill={setColorId('16')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M73.28 78.423s.143 1.36.091 2.037c-.042.548-.092 1.118-.324 1.617-.334.715-1.353 1.07-1.48 1.85-.079.487.38.912.51 1.387.204.757-.201 1.828.413 2.315.589.467 1.5-.156 2.251-.12.675.033 2.005.305 2.005.305'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M66.547 82.59s1.05.599 1.62.786c.552.182 1.142.216 1.713.32.433.079.944-.028 1.3.23.452.329.674.933.787 1.48.194.94.283 2.062-.235 2.87-.415.647-1.245 1.057-2.01 1.13-.804.079-2.302-.76-2.302-.76'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M69.48 89.402s.654.592 1.02.834c.276.183.88.463.88.463'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='17'
                                            strokeLinecap='butt'
                                            d='M60.782 100.003c.845 1.77 3.068 2.537 4.878 3.293 1.774.74 3.86 1.816 5.654 1.127 1.402-.539 2.186-2.198 2.693-3.611.73-2.037 1.364-4.594.312-6.485-.844-1.516-2.902-1.984-4.549-2.526-1.878-.62-4.083-1.587-5.883-.767-1.466.668-2.142 2.507-2.675 4.028-.546 1.56-1.141 3.449-.43 4.94z'
                                            fill={setColorId('17')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M68.012 92.479s1.122.604 1.295 1.156c.199.635-.171 1.344-.463 1.942-.347.71-1.353 1.07-1.48 1.85-.079.487.379.913.51 1.387.175.636-.13 1.51.367 1.944.554.484 1.469.118 2.204.112.81-.006 2.423-.158 2.423-.158'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M62.9 96.738s.759.296 1.156.369c.533.098 1.084.026 1.621.088.437.05.944-.028 1.3.23.452.329.64.94.787 1.48.183.67.44 1.482.09 2.083-.197.335-.667.415-1.038.528-.546.168-1.7.212-1.7.212'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M66.204 101.651s.763.328 1.065.602c.28.253.648.926.648.926v0'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='18'
                                            strokeLinecap='butt'
                                            d='M59.352 114.228c.884 1.032 2.546 1.073 3.9 1.185 1.944.162 4.203.361 5.804-.754 1.232-.858 1.804-2.515 2.09-3.988.285-1.464.388-3.212-.44-4.452-.813-1.218-2.476-1.63-3.871-2.075-1.738-.556-3.81-1.53-5.431-.691-1.78.92-2.478 3.333-2.826 5.307-.32 1.813-.423 4.07.774 5.468z'
                                            fill={setColorId('18')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M65.126 105.358s.83.437 1.017.832c.317.669.339 1.562 0 2.22-.243.47-1.052.453-1.294.924-.212.411-.263 1.006 0 1.387.393.57 1.263.601 1.941.74.786.16 2.404.092 2.404.092'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M61.103 109.742s1.336-.276 1.985-.14c.615.13 1.36.33 1.667.877.227.405.03.94-.09 1.388-.144.547-.357 1.11-.74 1.526-.269.29-1.023.6-1.023.6'
                                            display='inline'
                                        ></path>
                                    </g>
                                </g>
                                <g id='quadrant-2'>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        opacity='0.995'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='21'
                                            strokeLinecap='butt'
                                            d='M125.67 44.374c.771 1.973-1.225 4.124-2.407 5.881-.92 1.367-1.963 2.952-3.53 3.459-1.155.374-2.644.204-3.601-.542-1.107-.862-1.264-2.527-1.624-3.883-.513-1.93-1.924-4.338-.739-5.944 1.414-1.914 4.67-1.554 7.029-1.244 1.776.233 4.219.604 4.872 2.273z'
                                            display='inline'
                                            fill={setColorId('21')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M123.618 45.056s-1.044-.306-1.572-.437c-.652-.161-1.302-.35-1.97-.429a12.486 12.486 0 00-2.602-.058c-.634.058-1.87.388-1.87.388'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='22'
                                            strokeLinecap='butt'
                                            d='M135.326 50.052c-.126 1.417-1.858 2.186-2.994 3.044-1.397 1.055-2.864 2.638-4.612 2.518-.723-.05-1.38-.67-1.747-1.295-.597-1.016-.565-2.333-.454-3.507.17-1.79.178-4.14 1.684-5.122 1.547-1.009 3.924-.4 5.513.54 1.327.787 2.747 2.286 2.61 3.822z'
                                            display='inline'
                                            fill={setColorId('22')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M133.85 49.838s-.87-1.029-1.386-1.456c-.446-.368-.931-.704-1.46-.938a5.641 5.641 0 00-1.77-.475c-.606-.054-1.822.156-1.822.156'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='23'
                                            strokeLinecap='butt'
                                            d='M144.013 57.82c-.718 1.312-2.506 1.702-3.928 2.167-1.748.571-3.75 1.345-5.474.701-.824-.308-1.553-1.115-1.758-1.971-.364-1.525.497-3.147 1.203-4.546.69-1.368 1.469-2.976 2.875-3.585 2.037-.882 5.08-1.061 6.64.518 1.577 1.596 1.518 4.748.442 6.716z'
                                            display='inline'
                                            fill={setColorId('23')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M143.113 56.804s-.717-2.87-1.703-3.883c-.957-.984-3.724-1.756-3.724-1.756'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='24'
                                            strokeLinecap='butt'
                                            d='M149.93 68.138c-1.223 1.31-3.4 1.282-5.188 1.41-1.835.13-3.967.374-5.477-.677-.723-.502-1.229-1.464-1.215-2.345.024-1.567 1.201-2.98 2.29-4.106 1.49-1.543 3.37-3.145 5.507-3.326 1.949-.165 4.523.43 5.46 2.146 1.123 2.058.224 5.184-1.377 6.898z'
                                            display='inline'
                                            fill={setColorId('24')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M140.708 64.502s.664-.198 1-.278c.485-.117.98-.401 1.468-.299.431.09.828.4 1.08.76.39.558.606 1.296.529 1.973-.038.329-.23.646-.467.877-.26.255-.674.286-.974.493-.211.145-.569.517-.569.517'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M145.499 61.487s-.694.575-.98.92c-.278.331-.684.658-.704 1.09-.017.387.383.674.536 1.029.208.479.2 1.063.517 1.48.168.22.424.382.687.475.382.136.807.118 1.212.094.474-.03 1.397-.282 1.397-.282'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='25'
                                            strokeLinecap='butt'
                                            d='M154.988 76.634c-1.248 1.587-3.567 2.104-5.565 2.388-1.821.26-3.967.375-5.477-.676-.723-.502-1.229-1.465-1.215-2.345.024-1.567 1.201-2.98 2.29-4.107 1.49-1.542 3.37-3.144 5.507-3.325 1.948-.165 4.497.444 5.46 2.146.984 1.742.237 4.347-1 5.92z'
                                            display='inline'
                                            fill={setColorId('25')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M145.602 73.532s.55-.228.84-.278c.65-.11 1.39-.336 1.974-.032.234.121.334.414.442.654.246.544.596 1.154.449 1.732-.073.283-.363.469-.6.639-.321.23-.733.303-1.08.492a11.59 11.59 0 00-.729.465'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M150.633 71.155s-.58.304-.821.52c-.387.348-.832.723-.97 1.225-.072.264.047.548.111.815.122.508.2 1.064.516 1.48.17.221.432.365.688.475.33.143.694.206 1.052.227.53.031 1.584-.149 1.584-.149'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='26'
                                            strokeLinecap='butt'
                                            d='M160.473 90.231c-.77 1.497-2.692 2.12-4.276 2.69-1.812.654-3.91 1.382-5.73.751-1.588-.55-2.77-2.107-3.52-3.611-1.112-2.23-2.018-5.056-1.14-7.388.49-1.3 1.964-2.031 3.194-2.677 2.354-1.235 5.145-2.894 7.69-2.12 1.6.486 2.648 2.25 3.276 3.801 1.074 2.647 1.812 6.014.506 8.554z'
                                            display='inline'
                                            fill={setColorId('26')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M151.739 80.241s-.143 1.359-.09 2.036c.041.548.091 1.119.323 1.617.334.716 1.353 1.071 1.48 1.85.08.487-.38.912-.51 1.388-.204.756.201 1.827-.413 2.314-.588.467-1.5-.156-2.25-.12-.676.034-2.006.305-2.006.305'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M158.472 84.408s-1.05.598-1.62.786c-.551.182-1.141.216-1.713.32-.433.078-.944-.029-1.3.23-.451.328-.674.932-.787 1.48-.194.94-.283 2.061.235 2.87.415.647 1.245 1.056 2.01 1.13.805.078 2.302-.76 2.302-.76'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M155.539 91.22s-.653.591-1.02.834c-.276.183-.88.463-.88.463'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='27'
                                            strokeLinecap='butt'
                                            d='M163.55 102.279c-.845 1.771-3.067 2.538-4.878 3.293-1.773.74-3.86 1.816-5.654 1.127-1.402-.538-2.186-2.198-2.692-3.61-.731-2.038-1.365-4.595-.313-6.486.844-1.515 2.902-1.983 4.549-2.526 1.878-.619 4.083-1.586 5.883-.766 1.467.668 2.143 2.506 2.675 4.028.546 1.56 1.142 3.448.43 4.94z'
                                            display='inline'
                                            fill={setColorId('27')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M156.437 94.756s-1.122.604-1.295 1.156c-.199.635.171 1.343.463 1.941.347.71 1.353 1.071 1.48 1.851.08.486-.378.912-.51 1.387-.175.636.13 1.51-.366 1.944-.555.484-1.47.117-2.205.112-.81-.006-2.422-.159-2.422-.159'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M161.432 99.014s-.758.296-1.156.37c-.532.097-1.084.026-1.621.088-.437.05-.944-.029-1.3.23-.451.328-.64.94-.787 1.48-.182.67-.44 1.482-.089 2.082.196.335.666.415 1.037.53.546.167 1.7.211 1.7.211'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M158.128 103.927s-.763.328-1.065.603c-.279.253-.648.926-.648.926v0'
                                            display='inline'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='28'
                                            strokeLinecap='butt'
                                            d='M164.97 116.403c-.884 1.032-2.545 1.073-3.9 1.185-1.944.162-4.203.361-5.804-.754-1.231-.858-1.804-2.515-2.09-3.988-.285-1.464-.388-3.212.44-4.452.813-1.218 2.477-1.63 3.871-2.075 1.739-.555 3.81-1.53 5.432-.691 1.78.92 2.478 3.333 2.825 5.307.32 1.813.423 4.07-.774 5.468z'
                                            display='inline'
                                            fill={setColorId('28')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M159.195 107.533s-.83.437-1.018.833c-.316.668-.338 1.56 0 2.219.243.471 1.052.453 1.295.924.211.411.262 1.006 0 1.387-.393.57-1.263.601-1.942.74-.786.16-2.404.092-2.404.092'
                                            display='inline'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M163.219 111.917s-1.337-.276-1.986-.14c-.614.13-1.36.33-1.667.877-.227.405-.029.94.09 1.389.144.546.357 1.11.74 1.525.27.29 1.023.601 1.023.601'
                                            display='inline'
                                        ></path>
                                    </g>
                                </g>
                            </g>
                            <g id='inferior'>
                                <g id='quadrant-3'>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='31'
                                            strokeLinecap='butt'
                                            d='M119.58 218.548c.506-1.23-.636-2.607-1.241-3.791-.616-1.206-1.145-2.752-2.389-3.288-.583-.25-1.364-.112-1.889.246-.945.645-1.289 1.923-1.655 3.007-.438 1.298-1.367 2.926-.605 4.064.943 1.408 3.251 1.416 4.934 1.22 1.059-.122 2.44-.472 2.845-1.458z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('31')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M118.165 217.685s-.68.337-1.045.436c-.443.12-.906.154-1.364.185-.388.025-.782.049-1.167-.003-.492-.066-1.436-.388-1.436-.388'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='32'
                                            strokeLinecap='butt'
                                            d='M128.841 215.695c.04-1.59-1.888-2.614-3.153-3.576-1.11-.844-2.386-2.05-3.761-1.826-.584.095-.97.73-1.269 1.241-.47.807-.677 1.775-.72 2.709-.07 1.55-.373 3.55.78 4.59 1.183 1.067 3.281.882 4.768.31 1.497-.575 3.316-1.845 3.355-3.448z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('32')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M127.525 215.643s-.797.713-1.227 1.03c-.466.343-.93.704-1.46.938a5.641 5.641 0 01-1.769.475c-.607.054-1.822-.156-1.822-.156'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='33'
                                            strokeLinecap='butt'
                                            d='M137.23 211.203c-.453-1.31-1.813-2.18-3.023-2.859-1.488-.835-3.31-1.842-4.942-1.34-.47.145-.802.655-.96 1.12-.482 1.42-.207 3.063.245 4.493.425 1.343.954 3.003 2.236 3.585 1.797.816 4.458.46 5.844-.944.96-.972 1.047-2.764.6-4.055z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('33')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M135.905 211.42s-1.272 2.055-2.288 2.607c-.756.41-2.554.373-2.554.373'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='34'
                                            strokeLinecap='butt'
                                            d='M143.991 203.136c-.95-1.387-2.955-1.824-4.626-2.007-1.54-.168-3.47-.21-4.564.887-.73.732-.653 2.015-.584 3.047.074 1.098.277 2.346 1.049 3.13 1.368 1.388 3.57 2.045 5.517 1.939 1.265-.07 2.773-.558 3.426-1.644.92-1.53.792-3.88-.218-5.353z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('34')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M135.191 205.788s.601.208.895.137c.264-.064.478-.277.66-.48.228-.254.298-.622.51-.89.212-.265.49-.47.747-.691.164-.14.364-.239.506-.4.158-.177.32-.375.371-.606.05-.227-.077-.693-.077-.693'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path

                                            strokeLinecap='round'
                                            d='M137.636 208.217s-.676-.791-.872-1.264c-.145-.349-.275-.742-.206-1.113.055-.296.305-.519.471-.769.225-.336.41-.713.711-.982.295-.264.646-.505 1.033-.584.434-.09.886.061 1.32.144.915.174 1.42.498 1.42.498'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='35'
                                            strokeLinecap='butt'
                                            d='M149.142 194.728c-1.271-1.724-3.816-2.25-5.95-2.423-1.161-.094-2.394.204-3.406.781-.895.51-1.929 1.23-2.128 2.24-.32 1.625.588 3.502 1.799 4.633 1.396 1.305 3.562 1.792 5.471 1.71 1.674-.07 3.78-.47 4.652-1.9.88-1.44.563-3.684-.438-5.041z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('35')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M139.827 198.814s.648.21.946.103c.368-.134.692-.474.815-.846.069-.209-.074-.434-.085-.654a6.935 6.935 0 01.027-.995c.027-.286.157-.563.138-.85-.016-.231-.065-.48-.203-.667-.3-.407-1.255-.85-1.255-.85'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M143.91 200.137s-1.274-.34-1.699-.8c-.372-.403-.44-1.01-.582-1.54a3.228 3.228 0 01-.135-.816c-.003-.51-.04-1.083.235-1.514.277-.436.824-.63 1.284-.863.355-.179.725-.408 1.123-.402.806.013 2.25.886 2.25.886'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='36'
                                            strokeLinecap='butt'
                                            d='M155.787 180.474c-.871-1.472-3.057-1.633-4.731-1.989-1.869-.396-3.99-.908-5.73-.118-1.43.65-2.365 2.187-3.028 3.61-1.011 2.17-2.063 4.823-1.246 7.073.418 1.149 1.714 1.815 2.808 2.36 2.214 1.105 4.837 2.283 7.233 1.665 1.618-.417 2.974-1.857 3.733-3.345 1.41-2.763 2.543-6.587.962-9.256z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('36')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M143.963 190.675s1.294.081 1.77-.28c.319-.242.3-.744.5-1.09.356-.618 1.068-1.053 1.234-1.746.142-.592.008-1.263-.264-1.808a1.256 1.256 0 00-.483-.489c-.504-.303-1.116-.379-1.69-.512-.752-.175-2.286-.375-2.286-.375'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M152.838 188.825s-1.01-.093-1.514-.154c-.678-.082-1.394-.035-2.03-.285-.544-.213-1.142-.499-1.44-1.002-.36-.61-.508-1.463-.225-2.112.162-.371.719-.413.973-.728.446-.553.782-1.236.886-1.939.131-.892-.367-2.68-.367-2.68'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M153.873 182.33s-1.715.182-2.564.325c-.602.102-1.793.38-1.793.38'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='37'
                                            strokeLinecap='butt'
                                            d='M160.427 167.222c-.751-1.423-2.574-2.096-4.132-2.495-1.983-.508-4.355-.755-6.133.256-1.342.763-2.031 2.418-2.533 3.877-.677 1.967-1.498 4.38-.525 6.219.785 1.484 2.782 1.985 4.389 2.473 1.882.57 4.116 1.31 5.883.447 1.448-.707 2.166-2.498 2.675-4.028.71-2.138 1.429-4.757.376-6.75z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('37')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M152.654 177.258s-1.145-.461-1.295-.981c-.279-.965.645-1.905 1.06-2.82.114-.25.322-.46.391-.726.09-.346.125-.73.018-1.071-.093-.295-.274-.599-.543-.75-.505-.284-1.16-.051-1.733-.139-.711-.109-2.103-.48-2.103-.48'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M158.608 174.157s-.957-.713-1.507-.93c-.746-.295-1.568-.34-2.358-.475-.466-.08-1.036.1-1.405-.195-.323-.258-.464-.75-.436-1.163.041-.602.455-1.144.86-1.591a5.912 5.912 0 012.23-1.513c.92-.356 2.93-.422 2.93-.422'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M154.778 168.858s-.211-1.273-.117-1.901c.032-.215.214-.394.23-.61.02-.275-.176-.808-.176-.808'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        display='inline'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='38'
                                            strokeLinecap='butt'
                                            d='M163.414 153.158c-1.047-1.36-3.141-1.633-4.856-1.717-1.79-.088-3.853.128-5.22 1.287-1.104.935-1.42 2.57-1.718 3.987-.342 1.626-.857 3.539-.038 4.985.86 1.518 2.809 2.268 4.51 2.66 1.717.395 3.787.525 5.271-.426 1.468-.942 2.188-2.86 2.56-4.563.443-2.03.76-4.566-.509-6.213z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('38')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M154.661 162.56s1.326.113 1.75-.3c.526-.514.113-1.5.425-2.166.16-.339.635-.504.71-.871a1.954 1.954 0 00-.48-1.653c-.342-.358-.926-.36-1.409-.474-.822-.195-2.51-.358-2.51-.358'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M161.983 159.454s-1.09-.44-1.666-.499c-.732-.076-1.599.612-2.199.187-.48-.34-.558-1.13-.443-1.707.086-.43.678-.625.795-1.047.254-.916-.308-2.835-.308-2.835'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                </g>
                                <g id='quadrant-4'>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='41'
                                            strokeLinecap='butt'
                                            d='M103.428 217.086c-.239-1.134.639-2.25 1.215-3.254.59-1.028 1.082-2.54 2.247-2.756.702-.13 1.369.543 1.86 1.061.752.795 1.162 1.886 1.47 2.936.302 1.027.954 2.315.342 3.194-.943 1.354-3.21 1.662-4.798 1.214-1.074-.303-2.106-1.304-2.336-2.396z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('41')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        >
                                        </path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M104.82 217.585s.974.331 1.48.406a5.43 5.43 0 001.206.032 6.34 6.34 0 001.197-.217c.327-.09.952-.357.952-.357'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='42'
                                            strokeLinecap='butt'
                                            d='M94.447 215.756c-.247-1.388.98-2.73 1.955-3.747.952-.993 2.212-1.867 3.574-2.06.562-.08 1.251.01 1.655.409.777.767.796 2.079.82 3.17.036 1.537.218 3.513-.95 4.512-1.088.93-2.942.704-4.29.223-1.172-.418-2.545-1.283-2.764-2.508z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('42')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M95.557 215.084s.853.674 1.326.936c.384.214.793.39 1.216.511a6.826 6.826 0 001.646.262c.446.014 1.334-.126 1.334-.126'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='43'
                                            strokeLinecap='butt'
                                            d='M85.774 209.841c.627-1.58 2.737-2.067 4.294-2.748 1.033-.452 2.19-1.165 3.274-.854.707.203 1.263.914 1.514 1.605.42 1.159.065 2.492-.225 3.69-.328 1.355-.467 3.149-1.683 3.83-1.762.985-4.497.524-6-.824-1.202-1.078-1.77-3.199-1.174-4.7z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('43')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M87.135 210.676s1.242 1.678 2.1 2.234c.921.598 3.113 1.083 3.113 1.083'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='44'
                                            strokeLinecap='butt'
                                            d='M79.437 201.745c1.09-1.486 3.335-1.72 5.158-1.99 1.114-.165 2.408-.34 3.369.248.831.508 1.378 1.534 1.52 2.498.178 1.201-.203 2.543-.915 3.526-1.138 1.57-2.957 3.094-4.896 3.142-1.745.044-3.716-1.067-4.543-2.604-.762-1.418-.645-3.522.307-4.82z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('44')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M87.925 204.25s-.455.186-.695.186c-.36 0-.745-.078-1.04-.282-.248-.17-.35-.49-.531-.73-.243-.325-.466-.667-.742-.964-.248-.266-.747-.368-.817-.725-.04-.202.166-.377.272-.553.077-.129.263-.365.263-.365'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M83.807 207.296s1.252-.623 1.745-1.103c.34-.33.724-.713.795-1.183.034-.228-.115-.447-.2-.661-.15-.375-.31-.755-.547-1.082-.207-.287-.444-.572-.749-.752a2.986 2.986 0 00-1.486-.43c-.708 0-2.04.588-2.04.588'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='45'
                                            strokeLinecap='butt'
                                            d='M74.393 193.28c1.136-1.671 3.503-2.259 5.504-2.54 1.471-.209 3.182-.167 4.407.675.81.556 1.395 1.58 1.46 2.559.087 1.298-.581 2.664-1.466 3.618-1.493 1.61-3.707 2.893-5.904 2.928-1.575.026-3.484-.614-4.298-1.963-.91-1.508-.694-3.82.297-5.277z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('45')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M79.481 198.76s1.497-.528 1.86-1.162c.315-.549.057-1.264.053-1.897-.003-.394.127-.83-.05-1.181-.2-.397-.692-.557-1.036-.838-.23-.188-.415-.447-.687-.568a2.166 2.166 0 00-1.113-.165c-.706.082-1.981.79-1.981.79'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M81.466 196.614s.142.794.45.981c.477.291 1.677-.077 1.677-.077'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M80.121 193.48s-.318-.655-.222-.974c.133-.445 1.005-.963 1.005-.963'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeDasharray='none'
                                            strokeLinecap='round'
                                            strokeMiterlimit='4'
                                            d='M81.224 194.345s.968-.5 1.428-.79c.317-.202.913-.659.913-.659'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='46'
                                            strokeLinecap='butt'
                                            d='M68.418 179.57c.77-1.497 2.692-2.12 4.276-2.69 1.812-.653 3.926-1.427 5.73-.751 1.516.568 2.527 2.175 3.214 3.642 1.057 2.256 1.967 5.037 1.14 7.388-.433 1.231-1.746 2.013-2.888 2.646-2.326 1.287-5.145 2.894-7.69 2.121-1.6-.487-2.648-2.251-3.276-3.802-1.074-2.647-1.812-6.014-.506-8.554z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('46')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M78.651 188.952s-1.095-.838-1.408-1.429c-.258-.485-.216-1.078-.324-1.617-.056-.276-.108-.554-.169-.829-.122-.548-.743-1.196-.396-1.639.226-.29.737.042 1.101-.005.59-.077 1.164-.251 1.725-.448.58-.202 1.681-.75 1.681-.75'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M71 187.226s1.123-.139 1.68-.236a19.61 19.61 0 001.805-.382c.535-.146 1.266-.074 1.575-.535.65-.97.224-2.416-.221-3.496-.216-.525-.678-.927-1.121-1.281-.351-.281-.743-.565-1.185-.643-1.089-.192-3.28.486-3.28.486'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M74.727 181.239s-.339-1.603-.02-2.3c.244-.532 1.339-1.135 1.339-1.135'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='47'
                                            strokeLinecap='butt'
                                            d='M64.716 164.595c.821-1.335 2.689-1.774 4.232-2.05 1.733-.31 3.73-.366 5.256.512 1.371.788 2.223 2.366 2.773 3.848.776 2.093 1.591 4.682.578 6.671-.733 1.44-2.625 1.968-4.15 2.5-1.867.652-4.083 1.586-5.882.766-1.467-.668-2.197-2.488-2.675-4.027-.813-2.617-1.569-5.886-.132-8.22z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('47')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M71.647 175.398s1.099-.612 1.295-1.156c.24-.663-.007-1.456-.314-2.09-.306-.634-1.297-.854-1.442-1.542-.071-.337.092-.736.34-.974.488-.466 1.288-.402 1.94-.58.417-.113.84-.203 1.26-.31.428-.11 1.28-.338 1.28-.338'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M66.536 172.48s.676-.556 1.056-.767a6.896 6.896 0 011.572-.634c.438-.116.984.089 1.349-.18.568-.42.804-1.225.886-1.927.061-.519-.022-1.1-.308-1.537-.231-.353-.641-.58-1.037-.727-1.298-.482-4.134-.411-4.134-.411'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M70.087 166.672s.367-.646.47-1c.11-.379.241-.79.151-1.174-.081-.35-.596-.895-.596-.895'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M73.078 173.388s.088.508.251.69c.177.197.448.318.71.351.208.027.617-.128.617-.128'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    <g
                                        fill='none'
                                        stroke='#000'
                                        strokeLinejoin='miter'
                                        strokeOpacity='1'
                                        strokeWidth='0.265'
                                        transform='translate(-49.136 -34.285)'
                                    >
                                        <path
                                            id='48'
                                            strokeLinecap='butt'
                                            d='M61.944 151.43c.812-1.195 2.342-1.903 3.766-2.143 1.842-.311 4.002-.081 5.512 1.02 1.43 1.044 2.153 2.946 2.516 4.68.377 1.796.66 4.02-.44 5.49-.772 1.03-2.348 1.11-3.606 1.382-1.86.403-4.037 1.275-5.697.346-1.749-.98-2.478-3.334-2.826-5.308-.319-1.813-.26-3.945.775-5.467z'
                                            display='inline'
                                            opacity='0.996'
                                            fill={setColorId('48')}
                                            onClick={(e) => updateTeethStateChanged(e)}
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M69.792 160.886s-.735-.183-.951-.46c-.593-.76-.221-1.939-.585-2.831-.19-.466-.659-.793-.816-1.27-.086-.263-.25-.634-.053-.829.448-.444 1.26.195 1.888.138.76-.068 2.218-.571 2.218-.571'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            d='M63.322 156.928s1.876.143 2.677-.26c.598-.3 1.176-.841 1.348-1.488.13-.493-.338-.984-.33-1.494.008-.434.333-.827.324-1.26-.011-.47-.411-1.346-.411-1.346'
                                            display='inline'
                                            opacity='0.996'
                                        ></path>
                                    </g>
                                    
                                </g>
                            </g>
                            <svg width="100%" height="100%">
                                
                                {/* <path
                                    fill="none"
                                    stroke="red"
                                    strokeWidth="1"
                                    d={`M0 0H${matrix.width}V${matrix.height}H0z`}
                                    transform = {`translate(${matrix.x-49.136 }, ${matrix.y-34.285})`}
                                >
                                </path> */}

                                clicked === true{
                                <path
                                    fill="none"
                                    stroke="red"
                                    strokeWidth="1"
                                    d="M0 0H16V16H0z"
                                    transform = {`translate(${matrix.x-49.136 +(matrix.width/2)-8}, ${matrix.y-34.285+(matrix.height/2)-8})`}
                                >
                                </path>}
                            </svg> 
                        </svg>   
                    </Col>
                   {/*  <Col md="4">
                        {
                            Object.entries(teethState).map(([k, v], i) => (
                                <li key={i}>pieza {k}- estado {v}</li>
                            ))

                        }
                    </Col> */}
                </div>
                <ModalFooter>
                    <Button  color="primary" onClick={() => saveData()}>
                        Guardar
                    </Button>
                    <Button color="secondary"
                        onClick={() => props.setOpen(false)}>Cancelar
                             </Button>
                </ModalFooter>
            </ModalBody>
                      
        </Modal>
    )
}

export default Odontogram;