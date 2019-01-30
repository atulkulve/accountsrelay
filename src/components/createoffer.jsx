import React, { Component } from 'react';

var onchangetxt = false;

class CreateOffer extends Component {
    state = { 
        selecteddata:{}
     }

     static getDerivedStateFromProps(nextProps,prevstate){

        if(onchangetxt==false){
            if(nextProps.selecteddata){
                
                return{
                    selecteddata:nextProps.selecteddata
                }
            }
        }
        return null;
      }
    
      onChangeText = (txt) =>{
          
        const selecteddata = {...this.state.selecteddata};
        selecteddata.discountoffered = txt.target.value;
        this.setState({selecteddata});    
        onchangetxt=true;
      }

    render() { 
        return ( 
        <React.Fragment>
            {
                (JSON.stringify(this.state.selecteddata) != '{}')?
            
                
                <React.Fragment>
                    <h2 align="center"> Create Offer </h2>
                <table cellpadding="7">
                    <tr >
                        <td><h5>Client Name</h5></td>
                        <td><h5>Invoice ID</h5></td>
                        <td><h5>Due Date</h5></td>
                    </tr>
                    <tr>
                        <td>{this.state.selecteddata.clientname}</td>
                        <td>{this.state.selecteddata.invoiceid}</td>
                        <td>{this.state.selecteddata.invoiceduedate}</td>
                    </tr>
                </table>

                <br/>

                <table cellpadding="3">
                    <tr align="center" >
                        <td><h2>Invoice Amount</h2></td>
                        <td><h2>Discount</h2></td>
                        
                    </tr>
                    <tr align="center">
                        <td ><h3>${this.state.selecteddata.invoiceamount}</h3></td>
                        <td>
                            <h3>
                            <input type="text"
                             onChange={(text)=>this.onChangeText(text)}
                             value={this.state.selecteddata.discountoffered}/>
                             </h3>
                             {
                                 (this.state.selecteddata.discountoffered>0)?
                                 parseFloat(this.state.selecteddata.discountoffered*100/this.state.selecteddata.invoiceamount).toFixed(2)
                                 :
                                 0 
                                 
                             } % Discount
                        </td>
                        
                    </tr>
                </table>
                <button onClick={(event)=> 
                    {
                        onchangetxt=false;
                        this.props.handleSetDiscount(event,this.state.selecteddata);
                    }}>
                    Set Discount
                </button>
                </React.Fragment>
            :
            <h1></h1>
            }
        </React.Fragment> );
    }
}
 
export default CreateOffer;