import React from 'react'
import './Third.css'
function Third() {
  return (
    <>
        <div className="row">
                <div className="col-lg-3 border-0" >
                    <h6><i className="space  fa fa-user-plus" aria-hidden="false"></i>new users
                    <button type="button" className="space  btn btn-info rounded-pill">see all</button>
                    </h6>
                    {/* <i class="fa fa-face-smile"></i> */}
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='sqsm' alt="nknkn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2dWTdO--DI-qe3UpO0LMuWmO1bvGs3salBoDUOc&s" ></img>
                        </div>
                        <div className='col-lg-6 first'>
                            <h6>hubx</h6>
                            <p>24 minutes</p>
                        </div>
                    </div>
                </div>
                <div className="space col-lg-3 border-0">
                   <h6>
                    <i class="space fa fa-hand-back-fist"></i>how to sell courses blog
                   <button type="button" className="space  btn btn-info rounded-pill" >see all</button>
                   </h6>
                   <div className='row'>
                    <div className='col-lg-8'>
                    <ul>
                        <li><small><a href='#'>Blended Learning : What it is, Why it Matters & How to apply</a></small></li>
                        <li><small><a href='#'>Join the Course Sales Bootcamp [Free Live Workshops]</a></small></li>
                        <li><small><a href='#'>12 Steps to Creating Awesome Live Classes in 2021</a></small></li>
                        <li><small><a href='#'>Guy Kawasaki on the Future of Business in thr Midst of a Pandemic</a></small></li>
                        <li><small><a href='#'>What is Educational Marketing & How to use it to Grow with Examples</a></small></li>
                    </ul>
                    </div>
                    {/* <div className='col-lg-2'>
                        
                    </div> */}
                    <div className='col-lg-4'>
                        <p></p>
                        <small><p>7 days ago</p></small>
                        <p>.</p>
                        <small><p>12 days ago</p></small>
                        <small><p>20 days ago</p></small>
                        <p>.</p>
                        <small><p>22 days ago</p></small>
                        <p>.</p>
                        <small><p>23 days ago</p></small>
                    </div>
                   </div>
                </div>
                        <div className="space col-lg-3 border-0">
                            <h6><i className="space fa fa-key" aria-hidden="false"></i>Events Log
                                <button type="button" className="space  btn btn-info rounded-pill">see all</button>
                            </h6>
                            <div className='row'>
                                <div className='col-lg-1'>
                                    <i class="fa fa-key"></i>
                                </div>
                                <div className='col-lg-7'>
                                    <small><a href="#">hubx</a></small>
                                    <small><p>Logged in</p></small>
                                    <small><a href="#">more info</a></small>
                                </div>
                                <div className='col-lg-4'>
                                    <small>22 minutes</small>
                                </div>
                        </div>
                    </div>
                        <div className="spaces  col-lg-3 border-0">
                            <h5 className='space'>Trial Period</h5>
                            <div className='row'>
                                <div className="circle col-lg-3"> 
                                    <p>.</p><h6>30 </h6>days left
                                </div>
                                <div className='col-lg-9'>
                                    <i class=" tr fa fa-hourglass"></i>
                                </div>
                            </div>
                            <div>
                                    <button type="button" class=" tr btn btn-danger rounded-pill">Upgrade Now</button>
                            </div>
                            <div>
                                <h6>.</h6>
                                <h6>.</h6>
                                <h6><i className="space  fa fa-user-plus" aria-hidden="false"></i>Online Users(1)
                                    <button type="button" className="space  btn btn-info rounded-pill">see all</button>
                                    
                                </h6>
                                <div className='row'>
                                    <div className='col-lg-2'>
                                    <img className='sqsm' alt="nknkn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2dWTdO--DI-qe3UpO0LMuWmO1bvGs3salBoDUOc&s" ></img>
                                    </div>
                                    <div className='col-lg-6'>
                                        <small><a href="#">hubx</a></small>
                                    </div>
                                    <div className='col-lg-4'>
                                    <button type="button" className="tr btn btn-info">contact</button>
                                    </div>
                                </div>
                            </div>
                        <div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Third