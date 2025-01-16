import { useState } from 'react'
import React, { useEffect, useRef, memo } from 'react';

function App() {
  const [count, setCount] = useState(0);
    const sliderTapeView = useRef(null);
    const symbolView = useRef(null);
    const chartView = useRef(null);
    const companyView = useRef(null);
    const screenerView = useRef(null);
    const newsView = useRef(null);
    const technicalView = useRef(null);
    
    const sliderTape = ()=>
    {
        if (sliderTapeView.current && !sliderTapeView.current.querySelector("script"))
        {
                const script = document.createElement("script");
                script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
                script.type = "text/javascript";
                script.async = true;
                script.innerHTML = `
                        {
                "symbols": [
                {
                    "description": "",
                    "proName": "NASDAQ:TSLA"
                },
                {
                    "description": "",
                    "proName": "NASDAQ:AAPL"
                },
                {
                    "description": "",
                    "proName": "NASDAQ:NVDA"
                },
                {
                    "description": "",
                    "proName": "NASDAQ:MSFT"
                },
                {
                    "description": "",
                    "proName": "NASDAQ:AMZN"
                },
                {
                    "description": "",
                    "proName": "NASDAQ:GOOGL"
                },
                {
                    "description": "",
                    "proName": "NASDAQ:META"
                },
                {
                    "description": "",
                    "proName": "NYSE:BRK.B"
                },
                {
                    "description": "",
                    "proName": "NYSE:LLY"
                },
                {
                    "description": "",
                    "proName": "NYSE:UNH"
                },
                {
                    "description": "",
                    "proName": "NYSE:V"
                },
                {
                    "description": "",
                    "proName": "NYSE:WMT"
                }
                ],
                "showSymbolLogo": true,
                "colorTheme": "light",
                "isTransparent": false,
                "displayMode": "adaptive",
                "locale": "en"
                }`;

                sliderTapeView.current.appendChild(script);
        }
     }
     
    const symbol = ()=>
    {
        if (symbolView.current && !symbolView.current.querySelector("script"))
        {
                const script = document.createElement("script");
                script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
                script.type = "text/javascript";
                script.async = true;
                script.innerHTML = `
                                    {
            "symbol": "MARKETSCOM:BITCOIN",
            "locale": "en",
            "colorTheme": "light",
            "isTransparent": true
             }`;

                symbolView.current.appendChild(script);
        }
     }
    
    const chart = ()=>
    {
        if (chartView.current && !chartView.current.querySelector("script"))
        {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
              {
                "autosize": true,
                "symbol": "MARKETSCOM:BITCOIN",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "2",
                "locale": "en",
                "allow_symbol_change": true,
                "calendar": false,
                "support_host": "https://www.tradingview.com"
              }`;

              chartView.current.appendChild(script);
        }
     }

    const company = ()=>
    {
        if (companyView.current && !companyView.current.querySelector("script"))
        {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
              {
                 
                "height": 200,
                "isTransparent": false,
                "colorTheme": "light",
                "symbol": "BITSTAMP:BTCUSD",
                "locale": "en"
              }`;

              companyView.current.appendChild(script);
        }
     }

    const screener = ()=>
    {
        if (screenerView.current && !screenerView.current.querySelector("script"))
        {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
              {
                 
                "height": 550,
                "defaultColumn": "overview",
                "screener_type": "crypto_mkt",
                "displayCurrency": "BTC",
                "colorTheme": "light",
                "locale": "en"
              }`;

              screenerView.current.appendChild(script);
        }
     }

     const news = ()=>
    {
        if (newsView.current && !newsView.current.querySelector("script"))
        {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
              {
                "feedMode": "symbol",
                "symbol": "BITSTAMP:BTCUSD",
                "isTransparent": false,
                "displayMode": "regular",
                "height": 550,
                "colorTheme": "light",
                "locale": "en"
              }`;

              newsView.current.appendChild(script);
        }
     }

    const technical = ()=>
    {
        if (technicalView.current && !technicalView.current.querySelector("script"))
        {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
              {
                "dataSource": "Crypto",
                "blockSize": "market_cap_calc",
                "blockColor": "change",
                "locale": "en",
                "symbolUrl": "",
                "colorTheme": "light",
                "hasTopBar": false,
                "isDataSetEnabled": false,
                "isZoomEnabled": true,
                "hasSymbolTooltip": true,
                "isMonoSize": false,
                "height": "100%"
              }`;

              technicalView.current.appendChild(script);
        }
     }
        useEffect(
            () => {
                sliderTape();
                symbol();
                chart();
                company();
                screener();
                news();
                technical();
            },
            []
        );
    
  return (
    <div>
          <div className="be-wrapper be-fixed-sidebar">
              <nav id="ticker-tape" className="navbar navbar-expand fixed-top be-top-header">
                  <div className="container-fluid">
                      <div className="be-navbar-header">
                          <a className="navbar-brand" href="">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0V32L8.75787 23.2407V8.75934L0 0Z" fill="currentColor"></path><path d="M15.9999 15.9824L11.621 11.621V31.9975L20.3788 23.2748L20.3788 11.621L15.9999 15.9824Z" fill="currentColor"></path><path d="M23.2421 8.74506V31.9989L32 23.2538V0L23.2421 8.74506Z" fill="currentColor"></path></svg>
                          </a>
                      </div>
                      <div className="tradingview-widget-container w-100">
                        <div ref={sliderTapeView} className="tradingview-widget-container__widget"></div>
                      </div>
                      <div className="be-right-navbar">
                          
                          <ul className="nav navbar-nav float-right be-icons-nav">
                              <li className="nav-item dropdown">
                                  <a
                                      className="nav-link be-toggle-right-sidebar"
                                      href="#"
                                      role="button"
                                      aria-expanded="false"
                                  >
                                      <span className="icon mdi mdi-search" />
                                  </a>
                              </li>
                               
                          </ul>
                      </div>
                  </div>
              </nav>

              <div className="be-left-sidebar">
                  <div className="left-sidebar-wrapper bg-white">
                      
                      <div className="left-sidebar-spacer">
                          <div className="left-sidebar-scroll">
                              <div className="left-sidebar-content">
                                  <ul className="sidebar-elements mt-2">
                                      <li className="">
                                          <a href="#">
                                              <img style={{ height: '30px' }} src="https://img.icons8.com/?size=100&id=63192&format=png&color=000000" />
                                              <span className="px-2 py-2">Bitcoin</span>
                                          </a>
                                      </li>
                                      <li className=""><hr/></li>
                                      
                                      <li className="parent">
                                          <a href="#">
                                              <i className="icon mdi mdi-chart-donut" />
                                              <span>Overview</span>
                                          </a>
                                          <ul className="sub-menu">
                                              <li>
                                                  <a href="">Item 1</a>
                                              </li>
                                              <li>
                                                  <a href="">Item 2</a>
                                              </li>
                                              
                                          </ul>
                                      </li>
                                      <li className="parent">
                                          <a href="">
                                              <i className="icon mdi mdi-money" />
                                              <span>Markets</span>
                                          </a>
                                          <ul className="sub-menu">
                                              <li>
                                                  <a href="">1</a>
                                              </li>
                                              <li>
                                                  <a href="">2</a>
                                              </li>
                                               
                                          </ul>
                                      </li>
                                      <li className="parent">
                                          <a href="#">
                                              <i className="icon mdi mdi-dot-circle" />
                                              <span>Quarterly Reports</span>
                                          </a>
                                          <ul className="sub-menu">
                                              <li>
                                                  <a href="">Item 1</a>
                                              </li>
                                              <li>
                                                  <a href="">Item 2</a>
                                              </li>

                                          </ul>
                                      </li>
                                      <li className="parent">
                                          <a href="#">
                                              <i className="icon mdi mdi-border-all" />
                                              <span>Research</span>
                                          </a>
                                          <ul className="sub-menu">
                                              <li>
                                                  <a href="">Item 1</a>
                                              </li>
                                              <li>
                                                  <a href="">Item 2</a>
                                              </li>

                                          </ul>
                                      </li>
                                      <li className="parent">
                                          <a href="#">
                                              <i className="icon mdi mdi-chart" />
                                              <span>Charts</span>
                                          </a>
                                          <ul className="sub-menu">
                                              <li>
                                                  <a href="">Item 1</a>
                                              </li>
                                              <li>
                                                  <a href="">Item 2</a>
                                              </li>

                                          </ul>
                                      </li>
                                      
                                  </ul>
                              </div>
                          </div>
                      </div>
                   </div>
              </div>

              <div className="be-content">
                  <div className="main-content container-fluid">
                  <main>
                    <section id="symbol-info" className="row">
                    <div className="tradingview-widget-container card w-100">
                        <div ref={symbolView} className="card-body tradingview-widget-container__widget"></div>
                      </div>
                    </section>
                    <section id="company-profile"  className="row">
                    <div className="tradingview-widget-container card w-100">
                        <div ref={companyView} className="card-body tradingview-widget-container__widget"></div>
                      </div>
                    </section>
                    <section id="fundamental-data"  className="row">
                    <div className="tradingview-widget-container card w-100">
                        <div ref={screenerView}  className="card-body tradingview-widget-container__widget"></div>
                      </div>
                    </section>
                    <section id="advanced-chart" className="row">
                    <div className="tradingview-widget-container card w-100">
                        <div ref={chartView} style={{height:'500px'}} className="card-body tradingview-widget-container__widget"></div>
                      </div>
                    </section>
                    
                    <section id="technical-analysis"className="row">
                    <div className="tradingview-widget-container card w-100">
                        <div ref={technicalView} style={{height:'500px'}} className="card-body tradingview-widget-container__widget"></div>
                      </div>
                    </section>
                    <section id="top-stories" className="row">
                    <div className="tradingview-widget-container card w-100">
                        <div ref={newsView} style={{height:'500px'}} className="card-body tradingview-widget-container__widget"></div>
                      </div>
                    </section>
			 
		        </main>
                  </div>
              </div>
              <nav className="be-right-sidebar">
                  <div className="sb-content">
                      <div className="tab-navigation">
                          <ul className="nav nav-tabs nav-justified" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <a
                                      className="nav-link active"
                                      href="#tab1"
                                      aria-controls="tab1"
                                      role="tab"
                                      data-toggle="tab"
                                  >
                                      Chat
                                  </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <a
                                      className="nav-link"
                                      href="#tab2"
                                      aria-controls="tab2"
                                      role="tab"
                                      data-toggle="tab"
                                  >
                                      Todo
                                  </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <a
                                      className="nav-link"
                                      href="#tab3"
                                      aria-controls="tab3"
                                      role="tab"
                                      data-toggle="tab"
                                  >
                                      Settings
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="tab-panel">
                          <div className="tab-content">
                              <div className="tab-pane tab-chat active" id="tab1" role="tabpanel">
                                  <div className="chat-contacts">
                                      <div className="chat-sections">
                                          <div className="be-scroller-chat">
                                              <div className="content">
                                                  <h2>Recent</h2>
                                                  <div className="contact-list contact-list-recent">
                                                      <div className="user">
                                                          <a href="#">
                                                              <img src="assets/img/avatar1.png" alt="Avatar" />
                                                              <div className="user-data">
                                                                  <span className="status away" />
                                                                  <span className="name">Claire Sassu</span>
                                                                  <span className="message">
                                                                      Can you share the...
                                                                  </span>
                                                              </div>
                                                          </a>
                                                      </div>
                                                      <div className="user">
                                                          <a href="#">
                                                              <img src="assets/img/avatar2.png" alt="Avatar" />
                                                              <div className="user-data">
                                                                  <span className="status" />
                                                                  <span className="name">Maggie jackson</span>
                                                                  <span className="message">
                                                                      I confirmed the info.
                                                                  </span>
                                                              </div>
                                                          </a>
                                                      </div>
                                                      <div className="user">
                                                          <a href="#">
                                                              <img src="assets/img/avatar3.png" alt="Avatar" />
                                                              <div className="user-data">
                                                                  <span className="status offline" />
                                                                  <span className="name">Joel King </span>
                                                                  <span className="message">
                                                                      Ready for the meeti...
                                                                  </span>
                                                              </div>
                                                          </a>
                                                      </div>
                                                  </div>
                                                  <h2>Contacts</h2>
                                                  <div className="contact-list">
                                                      <div className="user">
                                                          <a href="#">
                                                              <img src="assets/img/avatar4.png" alt="Avatar" />
                                                              <div className="user-data2">
                                                                  <span className="status" />
                                                                  <span className="name">Mike Bolthort</span>
                                                              </div>
                                                          </a>
                                                      </div>
                                                      <div className="user">
                                                          <a href="#">
                                                              <img src="assets/img/avatar5.png" alt="Avatar" />
                                                              <div className="user-data2">
                                                                  <span className="status" />
                                                                  <span className="name">Maggie jackson</span>
                                                              </div>
                                                          </a>
                                                      </div>
                                                      <div className="user">
                                                          <a href="#">
                                                              <img src="assets/img/avatar6.png" alt="Avatar" />
                                                              <div className="user-data2">
                                                                  <span className="status offline" />
                                                                  <span className="name">Jhon Voltemar</span>
                                                              </div>
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bottom-input">
                                          <input type="text" placeholder="Search..." name="q" />
                                          <span className="mdi mdi-search" />
                                      </div>
                                  </div>
                                  <div className="chat-window">
                                      <div className="title">
                                          <div className="user">
                                              <img src="assets/img/avatar2.png" alt="Avatar" />
                                              <h2>Maggie jackson</h2>
                                              <span>Active 1h ago</span>
                                          </div>
                                          <span className="icon return mdi mdi-chevron-left" />
                                      </div>
                                      <div className="chat-messages">
                                          <div className="be-scroller-messages">
                                              <div className="content">
                                                  <ul>
                                                      <li className="friend">
                                                          <div className="msg">Hello</div>
                                                      </li>
                                                      <li className="self">
                                                          <div className="msg">Hi, how are you?</div>
                                                      </li>
                                                      <li className="friend">
                                                          <div className="msg">
                                                              Good, I'll need support with my pc
                                                          </div>
                                                      </li>
                                                      <li className="self">
                                                          <div className="msg">
                                                              Sure, just tell me what is going on with your
                                                              computer?
                                                          </div>
                                                      </li>
                                                      <li className="friend">
                                                          <div className="msg">
                                                              I don't know it just turns off suddenly
                                                          </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="chat-input">
                                          <div className="input-wrapper">
                                              <span className="photo mdi mdi-camera" />
                                              <input
                                                  type="text"
                                                  placeholder="Message..."
                                                  name="q"
                                                  autoComplete="off"
                                              />
                                              <span className="send-msg mdi mdi-mail-send" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane tab-todo" id="tab2" role="tabpanel">
                                  <div className="todo-container">
                                      <div className="todo-wrapper">
                                          <div className="be-scroller-todo">
                                              <div className="todo-content">
                                                  <span className="category-title">Today</span>
                                                  <ul className="todo-list">
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  defaultChecked=""
                                                                  id="tck1"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck1"
                                                              >
                                                                  Initialize the project
                                                              </label>
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  id="tck2"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck2"
                                                              >
                                                                  Create the main structure{" "}
                                                              </label>
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  id="tck3"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck3"
                                                              >
                                                                  Updates changes to GitHub{" "}
                                                              </label>
                                                          </div>
                                                      </li>
                                                  </ul>
                                                  <span className="category-title">Tomorrow</span>
                                                  <ul className="todo-list">
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  id="tck4"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck4"
                                                              >
                                                                  Initialize the project{" "}
                                                              </label>
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  id="tck5"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck5"
                                                              >
                                                                  Create the main structure{" "}
                                                              </label>
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  id="tck6"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck6"
                                                              >
                                                                  Updates changes to GitHub{" "}
                                                              </label>
                                                          </div>
                                                      </li>
                                                      <li>
                                                          <div className="custom-checkbox custom-control custom-control-sm">
                                                              <span className="delete mdi mdi-delete" />
                                                              <input
                                                                  className="custom-control-input"
                                                                  type="checkbox"
                                                                  id="tck7"
                                                              />
                                                              <label
                                                                  className="custom-control-label"
                                                                  htmlFor="tck7"
                                                                  title="This task is too long to be displayed in a normal space!"
                                                              >
                                                                  This task is too long to be displayed in a normal
                                                                  space!{" "}
                                                              </label>
                                                          </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bottom-input">
                                          <input type="text" placeholder="Create new task..." name="q" />
                                          <span className="mdi mdi-plus" />
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane tab-settings" id="tab3" role="tabpanel">
                                  <div className="settings-wrapper">
                                      <div className="be-scroller-settings">
                                          <span className="category-title">General</span>
                                          <ul className="settings-list">
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input
                                                          type="checkbox"
                                                          defaultChecked=""
                                                          name="st1"
                                                          id="st1"
                                                      />
                                                      <span>
                                                          <label htmlFor="st1" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Available</span>
                                              </li>
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input
                                                          type="checkbox"
                                                          defaultChecked=""
                                                          name="st2"
                                                          id="st2"
                                                      />
                                                      <span>
                                                          <label htmlFor="st2" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Enable notifications</span>
                                              </li>
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input
                                                          type="checkbox"
                                                          defaultChecked=""
                                                          name="st3"
                                                          id="st3"
                                                      />
                                                      <span>
                                                          <label htmlFor="st3" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Login with Facebook</span>
                                              </li>
                                          </ul>
                                          <span className="category-title">Notifications</span>
                                          <ul className="settings-list">
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input type="checkbox" name="st4" id="st4" />
                                                      <span>
                                                          <label htmlFor="st4" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Email notifications</span>
                                              </li>
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input
                                                          type="checkbox"
                                                          defaultChecked=""
                                                          name="st5"
                                                          id="st5"
                                                      />
                                                      <span>
                                                          <label htmlFor="st5" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Project updates</span>
                                              </li>
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input
                                                          type="checkbox"
                                                          defaultChecked=""
                                                          name="st6"
                                                          id="st6"
                                                      />
                                                      <span>
                                                          <label htmlFor="st6" />
                                                      </span>
                                                  </div>
                                                  <span className="name">New comments</span>
                                              </li>
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input type="checkbox" name="st7" id="st7" />
                                                      <span>
                                                          <label htmlFor="st7" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Chat messages</span>
                                              </li>
                                          </ul>
                                          <span className="category-title">Workflow</span>
                                          <ul className="settings-list">
                                              <li>
                                                  <div className="switch-button switch-button-sm">
                                                      <input type="checkbox" name="st8" id="st8" />
                                                      <span>
                                                          <label htmlFor="st8" />
                                                      </span>
                                                  </div>
                                                  <span className="name">Deploy on commit</span>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          </div>
    </div>    
  )
}

export default App
