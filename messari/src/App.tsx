import  { useEffect, useRef } from 'react';

function App() {
    const sliderTapeView = useRef<HTMLDivElement>(null);
    const symbolView = useRef<HTMLDivElement>(null);
    const chartView = useRef<HTMLDivElement>(null);
    const companyView = useRef<HTMLDivElement>(null);
    const screenerView = useRef<HTMLDivElement>(null);
    const newsView = useRef<HTMLDivElement>(null);
    const technicalView = useRef<HTMLDivElement>(null);
    
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
               
          </div>
    </div>    
  )
}

export default App
