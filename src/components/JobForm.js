import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
class JobForm extends React.Component{

    render(){
        return(
            <div>
                <Form>
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

                        <Label className='label' for="distance">How Far Will The Pool Table Need To Be Transported?</Label>
                        <br />
                        <h6 className='form-labels'>Starting Zipcode</h6>
                        <Input className='input' value={this.props.state.startingZipcode} id="startingZipcode" type="text" placeholder="Enter Starting Zipcode" onChange={this.props.handleChange}></Input>


                        <h6 className='form-labels ending-label'>Ending Zipcode</h6>
                        <Input className='input' value={this.props.state.endingZipcode} id="endingZipcode" type="text" placeholder="Enter Starting Zipcode" onChange={this.props.handleChange}></Input>

                        
                        <Link to='/quote'><Button onClick={this.props.calculateQuote}>Get Your Quote!</Button></Link>

                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default JobForm;