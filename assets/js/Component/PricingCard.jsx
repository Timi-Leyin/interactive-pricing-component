function PricingCard() {
    // set states for pricing and billing type
    let [price, changePrice] = useState(1);
    let [submit, submitted] = useState(false);
    let [billingSwitch, changeSwitch] = useState(false);
    let [billingType, changeBilling] = useState("month");
    //  if(billingSwitch)changeBilling(billingType = 'year'); else changeBilling(billingType = 'month');

    const priceChange = ({ target }) => {
        changePrice(price=target.value)
       };
       
       // Billing Switch
       const switcher = () => {
           changeSwitch((prev) => (billingSwitch = !prev));
    };
    
   
    const pageInfo=()=>{
        const results={};
        if(billingType==='month'){
       results.views=Number(price/2)
       results.type='monthly'
       results.price=Number(price)
   }else{
       results.views=Number(String(price*12/2).slice(0,4))
       results.type='yearly'
       results.price=Number(String(price*1.8).slice(0,5))
   
   }
   return results
   }
   
    // change billing type based on switch value
    useEffect((e) => {
       billingSwitch
        ? changeBilling((billingType = "year"))
        : changeBilling((billingType = "month"));
     
        pageInfo();
   
       
       //  console.log(data.price)
       //    useEffect ends here...
      },[billingSwitch,price]);
     
   const result=submit
   
      if(result){
          return(
           <main className="pricing-card">
              <React.Suspense fallback='Please Wait'>
              <Result result={pageInfo()}/>
              </React.Suspense>
           </main>
          )
      }else{
          return (
           <main className="pricing-card">
           <div className="card_header">
            <h5 className="page-views">
             <span className="views">{billingType === 'month' ?  price/2 : String(price*12/2).slice(0,4) }</span>K
             PAGEVIEWS
            </h5>
       
            <div className="amount">
             <h2 className="_price">${billingType === 'month' ? price : String(price*1.8).slice(0,5) }</h2>/
             <span className="billing">{billingType}</span>
            </div>
           </div>
           <div className="middle">
            <div className="range-slider">
             <input
              type="range"
              defaultValue={price}
              step="0.1"
              max="30"
              min='1'
              onChange={priceChange}
              name="price-range"
              id="price-range"
              list="range-price-list"
             />
            </div>
       
            <div className="billing-type">
             <div className="first-billing-option monthly-billing">
              Monthly Billing
             </div>
       
             <div className={`switch ${billingSwitch && "on"}`}>
              <div className="circle-touch">
               <input type="checkbox" name="switch" onChange={switcher} id="switch" />
              </div>
             </div>
       
             <div className="first-billing-option yearly-billing ">
              Yearly Billing <span className="tag">-25% <span className='mobile'>discount</span> </span>
             </div>
            </div>
           </div>
           {/*  */}
       
           <div className="card-footer">
            <ul className="features">
             <li data-icon={`${pageInfo().price < 30 ? '❌' : '✅'}` } className={ `feature ${pageInfo().price < 30 && 'not-included'}` } >Unlimed websites</li>
             <li data-icon={`${pageInfo().price < 45 ? '❌' : '✅'}` }  className={ `feature ${pageInfo().price < 45 && 'not-included'}`  }>100% data ownership</li>
             <li data-icon={`${pageInfo().price < 0 ? '❌' : '✅'}` }   className={ `feature ${pageInfo().price < 0 && 'not-included'}`  }>Email reports</li>
             <li data-icon={`${pageInfo().price < 0 ? '❌' : '✅'}` }  className={`feature ${pageInfo().price < 0 && 'not-included'}` }>30-days free trial</li>
            </ul>
       
       
             <button type='submit' className="cta" onClick={()=>{
                 submitted(submit =true)
             }} >Start my trial</button>
       
           </div>
          </main>
          )
      }
     
   }
