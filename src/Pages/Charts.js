import React, {Component} from 'react';
import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";
import animal from '../images/animal.svg';
import bill from '../images/bill.svg';
import burger from '../images/burger.svg';
import closet from '../images/closet.svg';
import wine from '../images/wine.svg';
import tableBtn from '../images/table-btn.svg';

class Charts extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2 text-center'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Charges</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Incomes</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                    <div className='text-lg-right mb-3'>
                                        <h3 style={{color:'blue'}}>Balance</h3>
                                        <strong style={{fontSize:'30px'}}>$2,670.20</strong>
                                    </div>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <h3 className='mr-3'>My Charges</h3>
                                            <span>this week</span>
                                        </div>
                                        <div>
                                            <button className='pt-1 pb-1 pl-3 pr-3 bg-primary' style={{color:'#fff', borderRadius:'5px'}} variant='primary'>Add</button>
                                        </div>
                                    </div>
                                    <table className='w-100'>
                                        <tr className='border'>
                                            <th className='p-3'>Category</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th>Money</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={burger} className='mr-2' style={{maxWidth:'35px'}} alt="Food"/><span>Food</span></td>
                                            <td className='p-3'><span>Dinner with John</span></td>
                                            <td className='p-3'><span>26/12/2019</span></td>
                                            <td className='p-3'><span>$13.00</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={closet} className='mr-2' style={{maxWidth:'35px'}} alt="Clothes"/><span>Clothes</span></td>
                                            <td className='p-3'><span></span></td>
                                            <td className='p-3'><span>23/12/2019</span></td>
                                            <td className='p-3'><span>$26.10</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={wine} className='mr-2' style={{maxWidth:'35px'}} alt="wine"/><span>Restaurants</span></td>
                                            <td className='p-3'><span></span></td>
                                            <td className='p-3'><span>22/12/2019</span></td>
                                            <td className='p-3'><span>$11.25</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={bill} className='mr-2' style={{maxWidth:'35px'}} alt="bill"/><span>Utility bills</span></td>
                                            <td className='p-3'><span></span></td>
                                            <td className='p-3'><span>21/12/2019</span></td>
                                            <td className='p-3'><span>$3.50</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={animal} className='mr-2' style={{maxWidth:'35px'}} alt="animal"/><span>Pets</span></td>
                                            <td className='p-3'><span>Dinner with John</span></td>
                                            <td className='p-3'><span>21/12/2019</span></td>
                                            <td className='p-3'><span>$121.60</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                    </table>

                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <div className='text-lg-right mb-3'>
                                        <h3 style={{color:'blue'}}>Balance</h3>
                                        <strong style={{fontSize:'30px'}}>$2,670.20</strong>
                                    </div>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <h3 className='mr-3'>My Charges</h3>
                                            <span>this week</span>
                                        </div>
                                        <div>
                                            <button className='pt-1 pb-1 pl-3 pr-3 bg-primary border-radius' style={{color:'#fff', borderRadius:'5px'}} variant='primary'>Add</button>
                                        </div>
                                    </div>
                                    <table className='w-100'>
                                        <tr className='border'>
                                            <th className='p-3'>Category</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th>Money</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={burger} className='mr-2' style={{maxWidth:'35px'}} alt="Food"/><span>Food</span></td>
                                            <td className='p-3'><span>Dinner with John</span></td>
                                            <td className='p-3'><span>26/12/2019</span></td>
                                            <td className='p-3'><span>$13.00</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={closet} className='mr-2' style={{maxWidth:'35px'}} alt="Clothes"/><span>Clothes</span></td>
                                            <td className='p-3'><span></span></td>
                                            <td className='p-3'><span>23/12/2019</span></td>
                                            <td className='p-3'><span>$26.10</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={wine} className='mr-2' style={{maxWidth:'35px'}} alt="wine"/><span>Restaurants</span></td>
                                            <td className='p-3'><span></span></td>
                                            <td className='p-3'><span>22/12/2019</span></td>
                                            <td className='p-3'><span>$11.25</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={bill} className='mr-2' style={{maxWidth:'35px'}} alt="bill"/><span>Utility bills</span></td>
                                            <td className='p-3'><span></span></td>
                                            <td className='p-3'><span>21/12/2019</span></td>
                                            <td className='p-3'><span>$3.50</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                        <tr className='align-items-center'>
                                            <td className='p-3'><img src={animal} className='mr-2' style={{maxWidth:'35px'}} alt="animal"/><span>Pets</span></td>
                                            <td className='p-3'><span>Dinner with John</span></td>
                                            <td className='p-3'><span>21/12/2019</span></td>
                                            <td className='p-3'><span>$121.60</span></td>
                                            <td className='p-3'><img src={tableBtn} className='pl-2 h-75' style={{cursor:'pointer'}} alt="Settings"/></td>
                                        </tr>
                                    </table>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default Charts;