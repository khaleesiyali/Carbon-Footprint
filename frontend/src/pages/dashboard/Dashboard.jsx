import {Button} from 'react-bootstrap'
import VisitsChart from '../../components/charts/chartjs/dashboard/VisitsChart'
import TrafficChart from '../../components/charts/chartjs/dashboard/TrafficChart'
import RecentTickets from '../../components/tables/dashboard/RecentTickets'
import ProjectStatus from '../../components/tables/dashboard/ProjectStatus'
import TodoApp from '../../components/apps/TodoApp'
import InlineDatePicker from '../../components/forms/InlineDatePicker'
import { useNavigate } from 'react-router-dom'
import AdvancedForm from '../form-elements/AdvancedForm'
import { useState, useEffect } from 'react'
import AMGif from '../../assets/images/AM.gif';
import NoonGif from '../../assets/images/Noon.gif';
import PMGif from '../../assets/images/PM.gif';


function Dashboard() {

  const toggleProBanner = () => {
    document.querySelector('.proBanner').classList.toggle('d-none');
  };

  const navigate = useNavigate();
  // Hover state for Get Started button
  const [btnHover, setBtnHover] = useState(false);
  
  // State and effect to reset GIF key on refresh
  const [gifKey, setGifKey] = useState(0);
  useEffect(() => {
    setGifKey(Date.now());
  }, []);

  // Select appropriate GIF based on time of day
  function getGifSrc() {
    const hour = new Date().getHours();
    if (hour < 12) return AMGif;
    if (hour < 18) return NoonGif;
    return PMGif;
  }

  // Get greeting based on current time
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 18) return 'Good Evening!';
    if (hour >= 12) return 'Good Afternoon!';
    return 'Good Morning!';
  }

  // Get a friendly message from Leaf based on current time
  function getLeafMessage() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Hi there!! Hope you have a wonderful day today.';
    if (hour < 15) return 'You are half way there! still rocking the day??';
    if (hour < 18) return 'Hello there, don\'t forget to give some time to rest yourself. You got this!!';
    if (hour < 21) return 'Long day, huh! What’s your plan for dinner tonight?';
    return 'You made it through the day. Time to power down and recharge!';
  }

  const greeting = getGreeting();

  return (
    <div>
      {/* <div className="row p-0 proBanner grid-margin mx-0" id="proBanner">
        <div className="col-md-12 p-0">
          <div className="card-body card-body-padding d-flex align-items-center justify-content-between">
            <div className="ps-lg-1">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn me-2 buy-now-btn border-0">Buy Now</a>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <a href="#"><i className="mdi mdi-home me-3 text-white"></i></a>
                <Button className='btn border-0 p-0' id='bannerClose' onClick={toggleProBanner}>
                  <i className="mdi mdi-close text-white me-0"></i>
                </Button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='page-header'>
        <h3 className='page-title' style={{ fontSize: '2rem' }}>
          <span>
          </span>
          
        </h3>
        <nav aria-label='breadcrumb'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'>
              <span style={{ fontSize: '1.1rem' }}></span>
            </li>
          </ul>
        </nav>
      </div>
    
    


      <div className='row'>
              <div className='col-12 grid-margin'>
                <div className='card'>
                  <div className='card-body'>
                    {/* Introduction and Leaf message */}
                    <div className='row align-items-center'>
                      <div className='col-md-5 grid-margin'>
                        <div className='card'>
                          <div className='card-body'>
                            <h1
                              className='card-title'
                              style={{
                                fontSize: '2.5rem',
                                background: 'linear-gradient(90deg, #27b988, #fe7096, #9a55ff, #36d7e8)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                              }}
                            >
                              {greeting}
                            </h1>
                            <br />
                            <p className='card-description' style={{ fontSize: '1.2rem' }}>
                              Welcome to CarbonLeaf. Here you can calculate your own carbon footprint, track your progress, and learn more about how to reduce your impact on the environment. 
                            </p>
                            <br />
                            <br />
                            <div className="d-flex justify-content-start mt-1">
                              <Button
                                variant="link"
                                onClick={() => navigate('/form-elements/advanced-elements')}
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                                style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'none' }}
                              >
                                <span
                                  style={btnHover ? {
                                    background: 'linear-gradient(90deg, #27b988, #fe7096, #9a55ff, #36d7e8)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    fontSize: '1.5rem',
                                    textDecoration: 'none'
                                  } : {
                                    color: '#fff',
                                    fontSize: '1.5rem',
                                    textDecoration: 'none'
                                  }}
                                >
                                  Get Started
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7 grid-margin'>
                        <div className='card h-100'>
                          <div className='card-body d-flex align-items-center justify-content-center p-0' style={{height: '100%'}}> 
                            <img key={gifKey} src={getGifSrc()} alt='CarbonLeaf Logo' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>



      <div className='row'>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card-body'>
          <h3>Input Data</h3>
        </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4 stretch-card grid-margin'>
          <div className='card bg-gradient-danger card-img-holder text-white'>
            <div className='card-body'>
              <img src="/images/dashboard/circle.png" alt="circle" className='card-img-absolute' />
              <h4 className="font-weight-normal mb-3" style={{ fontSize: '3rem' }}>Electricity <i className="mdi mdi-chart-line mdi-24px float-end"></i></h4>
              <h2 className='mb-5' style={{ fontSize: '1.2rem' }}>Emissions (tCO2E): 0.0</h2>
              <h6 className='card-text' style={{ fontSize: '1rem' }}>Increased by 0% from last week</h6>
            </div>
          </div>
        </div>
        <div className='col-md-4 stretch-card grid-margin'>
          <div className='card bg-gradient-info card-img-holder text-white'>
            <div className='card-body'>
                <img src="/images/dashboard/circle.png" className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3" style={{ fontSize: '3rem' }}>Travel <i className="mdi mdi-bookmark-outline mdi-24px float-end"></i></h4>
                <h2 className="mb-5" style={{ fontSize: '1.2rem' }}>Emissions (tCO2E): 0.0</h2>
                <h6 className="card-text" style={{ fontSize: '1rem' }}>Decreased by 10% from last week</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img src="/images/dashboard/circle.png" className="card-img-absolute" alt="circle" />
              <h4 className="font-weight-normal mb-3" style={{ fontSize: '3rem' }}>Shopping <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5" style={{ fontSize: '1.2rem' }}>Emissions (tCO2E): 0.0</h2>
              <h6 className="card-text" style={{ fontSize: '1rem' }}>Increased by 5% from last week</h6>
            </div>
          </div>
        </div>
      </div>


      <div className='row'>
        <div className='col-md-7 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <div className='clearfix mb-4'>
                <h4 className='card-title float-start' style={{ fontSize: '1.5rem' }}>Monthly Carbon Emissions Report</h4>
                <div id='visit-sale-chart-legend' className='rounded-legend legend-horizontal legend-top-right float-end'>
                  <ul>
                    <li>
                      <span className='legend-dots bg-primary'></span>Travel
                    </li>
                    <li>
                      <span className='legend-dots bg-danger'></span>Electricity
                    </li>
                    <li>
                      <span className='legend-dots bg-info'></span>Shopping
                    </li>
                  </ul>
                </div>
              </div>
              <VisitsChart />
            </div>
          </div>
        </div>


        
        <div className='col-md-5 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title' style={{ fontSize: '1.3rem' }}>Percentage of Carbon Emissions</h4>
              <TrafficChart />
              <div id='traffic-chart-legend' className='rounded-legend legend-vertical legend-bottom-left pt-4'>
                <ul>
                  <li>
                    <span className="legend-dots" style={{backgroundColor: 'rgba(154, 85, 255, 1)'}}></span>Travel
                    <span className="float-end" style={{ fontSize: '1rem' }}>30%</span>
                  </li>
                  <li>
                    <span className="legend-dots" style={{backgroundColor: 'rgba(54, 215, 232, 1)'}}></span>Shopping
                    <span className="float-end" style={{ fontSize: '1rem' }}>30%</span>
                  </li>
                  <li>
                    <span className="legend-dots" style={{backgroundColor: 'rgba(254, 112, 150, 1)'}}></span>Electricity
                    <span className="float-end" style={{ fontSize: '1rem' }}>40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* FAQ Section */}
      <div className='row'>
        <div className="col-12 grid-margin stretch-card"> {/* Full width */}
          <div className="card bg-dark" style={{ minHeight: '320px', borderRadius: '1.2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
            <div className="card-body">
              <h4 className="card-title" style={{ fontSize: '1.7rem', color: '#fff', fontWeight: 700, letterSpacing: '0.5px', marginBottom: 24 }}>FAQs</h4>
              <FAQList />
            </div>
          </div>
        </div>
      </div>




      {/*}
      <div className='row'>
        <div className='col-xl-7 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title' style={{ fontSize: '1.3rem' }}>Project Status</h4>
              <ProjectStatus />
            </div>
          </div>
        </div>
        <div className='col-xl-5 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title' style={{ fontSize: '1.3rem' }}>Todo</h4>
              <TodoApp />
            </div>
          </div>
        </div>
      </div> */}



    </div>
  )
}

export default Dashboard

// Revamped FAQList component adopting block_dark style
function FAQList() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: "What is a carbon footprint?", a: "A carbon footprint is the greenhouse gas emissions that are caused directly and indirectly by a person or an organization over a specific period.", resources: [ { title: "What is a carbon footprint, and how is it measured? | Ecologi", url: "https://ecologi.com/articles/blog/what-is-a-carbon-footprint-and-how-is-it-measured", type: "Article" } ] },
    { q: "Why should I calculate my carbon footprint?", a: "It’s important to calculate your carbon footprint because it helps identify the major sources of emissions so you can target and reduce them effectively.", resources: [ { title: "7 Reasons to Start Measuring Your Carbon Footprint Now | OneCarbonWorld", url: "https://www.onecarbonworld.com/articles/7-reasons-to-start-measuring-your-carbon-footprint-now", type: "Article" } ] },
    { q: "What can I do to reduce my carbon footprint?", a: "There are many strategies such as improving home insulation, choosing renewable energy, reducing travel emissions, and changing consumption habits.", resources: [ { title: "How to reduce your carbon footprint | Panda.org", url: "https://explore.panda.org/climate/how-to-reduce-your-carbon-footprint", type: "Article" }, { title: "35 Ways to Reduce Your Carbon Footprint – State of the Planet", url: "https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/", type: "Article" }, { title: "How to reduce your carbon footprint by 80% | Matthew Tolley | TEDxTelford", url: "https://www.ted.com/talks/matthew_tolley_how_to_reduce_your_carbon_footprint_by_80", type: "Video" } ] },
    { q: "What’s your mission?", a: "Our goal is to empower each individual and organizations to better understand their carbon footprint and reduce our collective emissions for our home – Mother Earth.", resources: [] },
    { q: "Do small actions make a difference?", a: "Yes. While big systemic change is important, small actions done collectively drive awareness and policy changes.", resources: [] }
  ];
  return (
    <div style={{ width: '100%' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} style={{ background: '#343a40', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${idx}`}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer'
              }}
            >
              <span>{faq.q}</span>
              <span style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s', fontSize: '1.4rem', color: '#28a745' }}>+</span>
            </button>
            <div
              id={`faq-content-${idx}`}
              style={{ maxHeight: isOpen ? '600px' : '0px', overflow: 'hidden', transition: 'max-height 0.5s ease' }}
              aria-labelledby={`faq-button-${idx}`}
            >
              <div style={{ padding: isOpen ? '16px' : '0 16px', color: '#e9ecef', fontSize: '1rem', lineHeight: '1.6' }}>
                <p style={{ margin: 0 }}>{faq.a}</p>
                {faq.resources && faq.resources.length > 0 && (
                  <div style={{ marginTop: '12px' }}>
                    <p style={{ fontWeight: 600, marginBottom: '8px', color: '#28a745' }}>Related Resources</p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {faq.resources.map((res, rIdx) => (
                        <a
                          key={rIdx}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', width: 'calc(50% - 12px)', minWidth: '200px', borderRadius: '6px', background: '#495057', overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.2)' }}
                        >
                          <img src={`https://www.google.com/s2/favicons?domain=${new URL(res.url).hostname}`} alt="favicon" style={{ width: '40px', height: '40px', margin: '12px', float: 'left' }} />
                          <div style={{ padding: '12px 12px 12px 60px' }}>
                            <div style={{ fontWeight: 600, color: '#fff' }}>{res.title}</div>
                            <div style={{ fontSize: '0.85rem', color: '#adb5bd', marginTop: '4px' }}>{res.type}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}