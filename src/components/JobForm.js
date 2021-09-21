import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect } from "react-router-dom"
class JobForm extends React.Component{

    handleSubmit = () => {
        const zip1 = this.props.state.startingZipcode
        const zip2 = this.props.state.endingZipcode
        const isZip1Valid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip1)
        const isZip2Valid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip2)

        if(isZip1Valid && isZip2Valid){
            this.props.calculateQuote()
        }else{
        
        }
    }


    render(){
        if(this.props.state.redirect){
            return <Redirect to='/quote' />
        }
        return(
            <div id="form-container">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup id='job-form'>
                        <Label className='label' for="tabel-size">What Size Is The Pool Table?</Label>
                        <Input value={this.props.state.size} className='input' type="select" name="select" id="size" onChange={this.props.handleChange} required >
                        <option >7 Foot</option>
                        <option >8 Foot</option>
                        <option >9 Foot</option>
                        </Input>

                        <Label className='label' for="tabel-type">What Type Of Pockets Does The Pool Table Have?</Label>
                        <Input value={this.props.state.type} className='input' type="select" name="select" id="type" onChange={this.props.handleChange}>
                        <option >Leather</option>
                        <option >Plastic</option>
                        </Input>
                        
                        <Label className='label'>Will There Be Any Stairs Involved In the Moving Process?...</Label>
                        <br/>
                        <Label className='label' for="stairs"> If So, Please Tell Us Exactly How Many</Label>
                        <Input className='input' value={this.props.state.stairs} id="stairs" type="number" min="0" placeholder="0" onChange={this.props.handleChange} ></Input> 

                        <Label className='label' for="distance">Please Enter The Zipcodes Of The Starting And Ending Locations</Label>
                        <br />
                        <h6 className='form-labels'>Starting Zipcode</h6>
                        <Input className='input' value={this.props.state.startingZipcode} id="startingZipcode" type="text" placeholder="Enter Starting Zipcode" onChange={this.props.handleChange} minLength="5" maxLength="5" required></Input>


                        <h6 className='form-labels ending-label'>Ending Zipcode</h6>
                        <Input className='input' value={this.props.state.endingZipcode} id="endingZipcode" type="text" placeholder="Enter Starting Zipcode" onChange={this.props.handleChange} minLength="5" maxLength="5" required></Input>

                        
                        <Button type="submit"  id='calc-quote-btn'>Calculate Quote Now!</Button>

                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default JobForm;