import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import EnhancedTable from "../enhancedtable";
import CreateOffer from "../createoffer";

import { getRelays,updateRelays } from "./redux/actions/postActions";


var showhide =false;

class Relay extends Component {
    state = { 
        selecteddata : {}
     }

    componentDidMount(){
        this.props.getRelays();
    }

    handleClick = (event, id) => {
        showhide=true;
        this.setState({
            selecteddata: id
        });
    }
    
    handleSetDiscount = (event, selectedata) =>{
        this.props.updateRelays(selectedata);
        this.setState({
            selecteddata: {}
        });
        showhide=false;
    }

    getTotalSum = () =>{
        var reducevar = this.props.selectallrelays.filter(function(row) {
            return row.discountoffered >0;
        });
        
        var total =reducevar.reduce(( acc, currValue,currIndex,array )=>{
        return acc+ parseInt(currValue.invoiceamount);
        },0);

        return total;
    }

    render() { 
        return (
            <React.Fragment>
                
                <table>
                    <tr align="center">
                        <td>Discounted Receivables</td>
                        <td>Discount Offered</td>
                    </tr>
                    <tr align="center">
                        <td>
                        $ {
                            this.getTotalSum()
                
                        }
                        </td>
                        <td>
                        $ {this.props.selectallrelays.reduce(( acc, currValue,currIndex,array )=>{
                            return acc+ parseInt(currValue.discountoffered);
                        },0) }
                        </td>
                    </tr>
                </table>
                

                

                {/* {JSON.stringify(this.props.selectallrelays)} */}
                {(showhide==false)?
                <EnhancedTable
                columnkeys={JSON.parse('["clientname", "invoiceid", "invoiceduedate", "invoiceamount","discountoffered"]')}
                data={this.props.selectallrelays}
                handleClick={(e,x)=>this.handleClick(e,x)}
                />
                :
                <CreateOffer
                selecteddata={this.state.selecteddata}
                handleSetDiscount={(e,x)=>this.handleSetDiscount(e,x)}/>
                }
            </React.Fragment>
          );
    }
}
Relay.protoTypes = {
    getRelays: PropTypes.func.isRequired,
    updateRelays: PropTypes.func.isRequired,
    selectallrelays: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    selectallrelays: state.postsrelay.allrelay
})
export default connect(mapStateToProps,{getRelays,updateRelays})(Relay);